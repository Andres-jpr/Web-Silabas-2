/**
 * SYLLABUS-9: Juego de Clasificación de Palabras por Sílabas
 * Lógica principal del juego, modos, estados, puntuaciones y drag-and-drop.
 */

import { WORDS_DATABASE, SYLLABLE_RULES } from './data/words.js';
import { soundEngine } from './audio.js';
import { animationEngine } from './animations.js';

class GameController {
  constructor() {
    this.currentMode = 'mission'; // 'mission' | 'arcade' | 'cutter' | 'academy' | 'trophies'
    this.score = 0;
    this.highScore = parseInt(localStorage.getItem('syllabus_high_score') || '0', 10);
    this.wordsClassified = parseInt(localStorage.getItem('syllabus_total_words') || '0', 10);
    this.streak = 0;
    this.maxStreak = parseInt(localStorage.getItem('syllabus_max_streak') || '0', 10);
    this.shipEnergy = 0; // 0 to 100%

    // Estado del juego actual
    this.wordsPool = [];
    this.currentWord = null;
    this.isWordRevealed = false;
    this.timerInterval = null;
    this.timeLeft = 60;
    this.arcadeActive = false;

    // Estado de modo cortador
    this.cutterSelectedCuts = [];

    // Trofeos desbloqueados
    this.unlockedAchievements = JSON.parse(localStorage.getItem('syllabus_achievements') || '[]');

    this.initDOM();
    this.bindEvents();
    this.loadNewGame();
  }

  initDOM() {
    // Referencias principales
    this.scoreEl = document.getElementById('hud-score');
    this.streakEl = document.getElementById('hud-streak');
    this.streakTagEl = document.getElementById('streak-multiplier-tag');
    this.energyBarEl = document.getElementById('ship-energy-fill');
    this.energyPercentEl = document.getElementById('ship-energy-text');
    this.rankEl = document.getElementById('pilot-rank-badge');

    // Paneles
    this.missionView = document.getElementById('view-mission');
    this.arcadeView = document.getElementById('view-arcade');
    this.cutterView = document.getElementById('view-cutter');
    this.academyView = document.getElementById('view-academy');
    this.trophiesView = document.getElementById('view-trophies');

    // Elementos de la palabra
    this.activeWordCard = document.getElementById('active-word-card');
    this.activeWordText = document.getElementById('word-display-text');
    this.wordHintText = document.getElementById('word-hint-text');
    this.wordCategoryTag = document.getElementById('word-category-tag');
    this.syllablePreviewContainer = document.getElementById('syllables-preview');

    this.updateHUD();
  }

  bindEvents() {
    // Sonidos y voz
    document.getElementById('btn-toggle-sfx')?.addEventListener('click', (e) => {
      const active = soundEngine.toggleSfx();
      e.currentTarget.classList.toggle('muted', !active);
    });

    document.getElementById('btn-toggle-voice')?.addEventListener('click', (e) => {
      const active = soundEngine.toggleVoice();
      e.currentTarget.classList.toggle('muted', !active);
    });

    // Navegación de pestañas / modos
    document.querySelectorAll('[data-nav-mode]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = e.currentTarget.getAttribute('data-nav-mode');
        this.switchMode(mode);
      });
    });

    // Botones de acción en la tarjeta
    document.getElementById('btn-speak-word')?.addEventListener('click', () => {
      if (!this.currentWord) return;
      soundEngine.playClick();
      soundEngine.speakText(this.currentWord.word);
    });

    document.getElementById('btn-reveal-syllables')?.addEventListener('click', () => {
      this.revealSyllablesWithLaser();
    });

    // Zonas de clasificación (Drop zones & Clic directo)
    const dropZones = document.querySelectorAll('.classification-dock');
    dropZones.forEach(zone => {
      const targetCategory = zone.getAttribute('data-target-type');

      // Drag over
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('dock-hover');
      });

      zone.addEventListener('dragleave', () => {
        zone.classList.remove('dock-hover');
      });

      // Drop
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('dock-hover');
        this.evaluateAnswer(targetCategory, zone);
      });

      // Clic directo en la estación (útil para pantallas táctiles y teclado)
      zone.addEventListener('click', () => {
        if (!this.currentWord) return;
        this.evaluateAnswer(targetCategory, zone);
      });
    });

    // Configurar Drag en la tarjeta de palabra
    if (this.activeWordCard) {
      this.activeWordCard.addEventListener('dragstart', (e) => {
        this.activeWordCard.classList.add('is-dragging');
        e.dataTransfer.setData('text/plain', this.currentWord?.type || '');
        soundEngine.playClick();
      });

      this.activeWordCard.addEventListener('dragend', () => {
        this.activeWordCard.classList.remove('is-dragging');
      });
    }

    // Atajos de teclado (1: Monosílaba, 2: Bisílaba, 3: Trisílaba, 4: Polisílaba, Espacio: Escuchar)
    window.addEventListener('keydown', (e) => {
      if (this.currentMode !== 'mission' && this.currentMode !== 'arcade') return;

      if (e.key === '1') this.evaluateAnswer('monosilaba', document.querySelector('[data-target-type="monosilaba"]'));
      if (e.key === '2') this.evaluateAnswer('bisilaba', document.querySelector('[data-target-type="bisilaba"]'));
      if (e.key === '3') this.evaluateAnswer('trisilaba', document.querySelector('[data-target-type="trisilaba"]'));
      if (e.key === '4') this.evaluateAnswer('polisilaba', document.querySelector('[data-target-type="polisilaba"]'));
      if (e.code === 'Space') {
        e.preventDefault();
        if (this.currentWord) soundEngine.speakText(this.currentWord.word);
      }
    });

    // Botón iniciar Arcade
    document.getElementById('btn-start-arcade')?.addEventListener('click', () => {
      this.startArcadeTimer();
    });

    // Renderizar Academia
    this.renderAcademyRules();
    this.renderTrophies();
  }

  // Barajar y cargar nueva palabra
  loadNewGame() {
    this.shuffleWords();
    this.pickNextWord();
  }

  shuffleWords() {
    this.wordsPool = [...WORDS_DATABASE].sort(() => Math.random() - 0.5);
  }

  pickNextWord() {
    if (this.wordsPool.length === 0) {
      this.shuffleWords();
    }
    this.currentWord = this.wordsPool.pop();
    this.isWordRevealed = false;

    if (!this.currentWord) return;

    // Actualizar vista
    this.activeWordText.innerText = this.currentWord.word;
    this.wordHintText.innerText = `💡 Pista: ${this.currentWord.hint}`;
    this.wordCategoryTag.innerText = this.currentWord.category.toUpperCase();

    // Reset de contenedor de sílabas
    this.syllablePreviewContainer.innerHTML = '';
    this.syllablePreviewContainer.style.display = 'none';
    this.activeWordText.style.display = 'block';

    // Animación de entrada de la tarjeta
    if (window.gsap) {
      window.gsap.fromTo(this.activeWordCard, 
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.7)" }
      );
    }
  }

  // Revelar corte de sílabas con láser pedagógico
  revealSyllablesWithLaser() {
    if (!this.currentWord || this.isWordRevealed) return;
    this.isWordRevealed = true;

    soundEngine.playSyllableCut();

    this.activeWordText.style.display = 'none';
    this.syllablePreviewContainer.style.display = 'flex';
    this.syllablePreviewContainer.innerHTML = '';

    this.currentWord.syllables.forEach((syl, idx) => {
      const sylBox = document.createElement('div');
      sylBox.className = 'syllable-pill';
      sylBox.innerText = syl;
      sylBox.setAttribute('data-index', idx + 1);

      this.syllablePreviewContainer.appendChild(sylBox);
    });

    if (window.gsap) {
      window.gsap.from('.syllable-pill', {
        scale: 0,
        opacity: 0,
        y: -15,
        stagger: 0.12,
        duration: 0.4,
        ease: "back.out(2)"
      });
    }

    // Pronunciar rítmicamente en voz alta
    soundEngine.speakSyllables(this.currentWord.syllables);
  }

  // Evaluación de la respuesta
  evaluateAnswer(chosenType, dockElement) {
    if (!this.currentWord) return;

    const isCorrect = chosenType === this.currentWord.type;
    const dockRect = dockElement.getBoundingClientRect();

    if (isCorrect) {
      // Éxito
      this.streak += 1;
      if (this.streak > this.maxStreak) {
        this.maxStreak = this.streak;
        localStorage.setItem('syllabus_max_streak', this.maxStreak);
      }

      const multiplier = Math.min(5, 1 + Math.floor(this.streak / 3));
      const pointsEarned = 100 * multiplier;
      this.score += pointsEarned;
      this.wordsClassified += 1;

      // Actualizar progreso
      this.shipEnergy = Math.min(100, this.shipEnergy + 10);
      localStorage.setItem('syllabus_total_words', this.wordsClassified);

      // Audio y efectos
      if (this.streak >= 3) {
        soundEngine.playComboFanfare();
        animationEngine.showFloatingScore(`🔥 ¡COMBO x${multiplier}! +${pointsEarned}`, dockRect.left + dockRect.width / 2, dockRect.top, '#FFD600');
        animationEngine.triggerConfetti(false);
      } else {
        soundEngine.playCorrect();
        animationEngine.showFloatingScore(`+${pointsEarned} PTS`, dockRect.left + dockRect.width / 2, dockRect.top, '#00F0FF');
      }

      animationEngine.pulseZone(dockElement, true);

      // Verificar salto hiperespacial (energía al 100%)
      if (this.shipEnergy >= 100) {
        this.triggerHyperdriveJump();
      }

      this.checkAchievements();
      this.updateHUD();

      // Transición animada a la siguiente palabra
      if (window.gsap) {
        window.gsap.to(this.activeWordCard, {
          scale: 0.5,
          opacity: 0,
          y: -40,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => this.pickNextWord()
        });
      } else {
        setTimeout(() => this.pickNextWord(), 250);
      }

    } else {
      // Error amable pedagógico
      soundEngine.playWrong();
      animationEngine.pulseZone(dockElement, false);
      this.streak = 0;
      this.updateHUD();

      animationEngine.showFloatingScore(`¡Inténtalo otra vez!`, dockRect.left + dockRect.width / 2, dockRect.top, '#F43F5E');

      // Animación de sacudida
      if (window.gsap) {
        window.gsap.to(this.activeWordCard, {
          x: 14,
          repeat: 5,
          yoyo: true,
          duration: 0.06,
          onComplete: () => {
            window.gsap.set(this.activeWordCard, { x: 0 });
          }
        });
      }

      // Si falló, revelar las sílabas automáticamente para educar
      this.revealSyllablesWithLaser();
    }
  }

  // Celebración cuando la nave llega a 100% de energía
  triggerHyperdriveJump() {
    this.shipEnergy = 0; // Se reinicia para el siguiente nivel
    soundEngine.playComboFanfare();
    soundEngine.speakText("¡Energía al máximo! Salto hiperespacial completado.");
    animationEngine.triggerConfetti(true);

    const banner = document.createElement('div');
    banner.className = 'hyperdrive-overlay-banner';
    banner.innerHTML = `
      <div class="banner-content">
        <span class="banner-icon">🌌</span>
        <h2>¡SALTO HIPERESPACIAL!</h2>
        <p>¡Has dominado el núcleo de energía silábica!</p>
        <div class="banner-bonus">+500 PUNTOS DE BONIFICACIÓN</div>
      </div>
    `;
    document.body.appendChild(banner);

    this.score += 500;
    this.updateHUD();

    if (window.gsap) {
      window.gsap.fromTo(banner, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" });
    }

    setTimeout(() => {
      if (window.gsap) {
        window.gsap.to(banner, { opacity: 0, scale: 1.1, duration: 0.4, onComplete: () => banner.remove() });
      } else {
        banner.remove();
      }
    }, 2800);
  }

  updateHUD() {
    if (this.scoreEl) this.scoreEl.innerText = this.score.toLocaleString();
    if (this.streakEl) this.streakEl.innerText = this.streak;

    if (this.streakTagEl) {
      const multiplier = Math.min(5, 1 + Math.floor(this.streak / 3));
      this.streakTagEl.innerText = `x${multiplier}`;
      this.streakTagEl.className = `streak-tag ${this.streak >= 3 ? 'active-fire' : ''}`;
    }

    if (this.energyBarEl) this.energyBarEl.style.width = `${this.shipEnergy}%`;
    if (this.energyPercentEl) this.energyPercentEl.innerText = `${this.shipEnergy}%`;

    // Calcular Rango
    let rank = "Cadete Espacial";
    if (this.score >= 5000) rank = "Comandante Supremo";
    else if (this.score >= 3000) rank = "Piloto de Élite";
    else if (this.score >= 1500) rank = "Oficial de Enlace";
    else if (this.score >= 500) rank = "Navegante Estelar";

    if (this.rankEl) this.rankEl.innerText = rank;

    // Guardar high score
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('syllabus_high_score', this.highScore);
    }
  }

  // Cambio de vista/modo
  switchMode(mode) {
    this.currentMode = mode;
    soundEngine.playClick();

    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('[data-nav-mode]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-nav-mode') === mode);
    });

    const targetView = document.getElementById(`view-${mode}`);
    if (targetView) targetView.classList.add('active');

    if (mode === 'mission') {
      this.pickNextWord();
    } else if (mode === 'cutter') {
      this.setupCutterMode();
    } else if (mode === 'trophies') {
      this.renderTrophies();
    }
  }

  // Modo Desafío Contrarreloj (Arcade 60s)
  startArcadeTimer() {
    this.timeLeft = 60;
    this.arcadeActive = true;
    const timerDisplay = document.getElementById('arcade-timer-number');
    const startBtn = document.getElementById('btn-start-arcade');
    if (startBtn) startBtn.style.display = 'none';

    soundEngine.speakText("¡Misión contrarreloj iniciada! 60 segundos.");

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft -= 1;
      if (timerDisplay) timerDisplay.innerText = this.timeLeft;

      if (this.timeLeft <= 5) {
        soundEngine.playTone(880, 'sine', 0.1, 0.3); // Beep de alerta
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.endArcadeTimer();
      }
    }, 1000);
  }

  endArcadeTimer() {
    this.arcadeActive = false;
    soundEngine.playComboFanfare();
    soundEngine.speakText("¡Tiempo agotado! Excelente desempeño estelar.");
    animationEngine.triggerConfetti(true);

    const startBtn = document.getElementById('btn-start-arcade');
    if (startBtn) {
      startBtn.style.display = 'inline-flex';
      startBtn.innerText = "JUGAR DE NUEVO (60s)";
    }
  }

  // Modo Cortador de Sílabas (Laser Cutter)
  setupCutterMode() {
    const cutterPool = WORDS_DATABASE.filter(w => w.syllables.length >= 2);
    const targetWordObj = cutterPool[Math.floor(Math.random() * cutterPool.length)];
    this.cutterWord = targetWordObj;
    this.cutterSelectedCuts = [];

    const lettersContainer = document.getElementById('cutter-letters-stage');
    const cutterStatus = document.getElementById('cutter-status-message');
    if (!lettersContainer) return;

    lettersContainer.innerHTML = '';
    cutterStatus.innerHTML = `Corta la palabra en <strong>${targetWordObj.syllables.length}</strong> sílabas haciendo clic entre las letras:`;

    const fullLetters = targetWordObj.word.split('');
    fullLetters.forEach((letter, i) => {
      const letterSpan = document.createElement('span');
      letterSpan.className = 'cutter-letter-box';
      letterSpan.innerText = letter;
      lettersContainer.appendChild(letterSpan);

      // Si no es la última letra, insertar divisor clicable
      if (i < fullLetters.length - 1) {
        const divider = document.createElement('button');
        divider.className = 'cutter-laser-slot';
        divider.title = "Haz clic para cortar aquí";
        divider.setAttribute('data-cut-index', i + 1);

        divider.addEventListener('click', () => {
          soundEngine.playSyllableCut();
          divider.classList.toggle('cut-active');
          this.checkCutterSolution(targetWordObj);
        });

        lettersContainer.appendChild(divider);
      }
    });

    const nextCutterBtn = document.getElementById('btn-cutter-next');
    if (nextCutterBtn) {
      nextCutterBtn.onclick = () => this.setupCutterMode();
    }
  }

  checkCutterSolution(wordObj) {
    // Calcular posiciones de corte esperadas
    const expectedCuts = [];
    let accumulatedLength = 0;
    for (let i = 0; i < wordObj.syllables.length - 1; i++) {
      accumulatedLength += wordObj.syllables[i].length;
      expectedCuts.push(accumulatedLength);
    }

    const activeSlots = Array.from(document.querySelectorAll('.cutter-laser-slot.cut-active'))
      .map(slot => parseInt(slot.getAttribute('data-cut-index'), 10));

    // Comparar
    const isExactMatch = expectedCuts.length === activeSlots.length &&
      expectedCuts.every((val, index) => val === activeSlots[index]);

    if (isExactMatch) {
      soundEngine.playCorrect();
      soundEngine.speakText(`¡Corte perfecto! ${wordObj.syllables.join(", ")}`);
      animationEngine.triggerConfetti(false);

      const cutterStatus = document.getElementById('cutter-status-message');
      cutterStatus.innerHTML = `<span style="color:#00F0FF; font-weight:bold;">✨ ¡EXCELENTE CORTE LÁSER! (${wordObj.syllables.join(' - ')})</span>`;

      this.score += 250;
      this.updateHUD();
    }
  }

  // Render de reglas en la Academia
  renderAcademyRules() {
    const container = document.getElementById('academy-cards-grid');
    if (!container) return;

    container.innerHTML = Object.entries(SYLLABLE_RULES).map(([key, rule]) => `
      <div class="academy-card" style="border-top: 4px solid ${rule.color}">
        <div class="academy-card-header">
          <span class="academy-icon">${rule.icon}</span>
          <div>
            <h3>${rule.name}</h3>
            <span class="academy-count-badge" style="background:${rule.color}20; color:${rule.color};">${rule.count}</span>
          </div>
        </div>
        <p class="academy-desc">${rule.desc}</p>
        <div class="academy-examples-list">
          ${rule.examples.map(ex => `
            <button class="academy-example-pill" onclick="window.syllabusApp.pronounceWord('${ex}')">
              🔊 ${ex}
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Salón de Trofeos
  renderTrophies() {
    const container = document.getElementById('trophies-grid');
    if (!container) return;

    const achievementsList = [
      { id: 'first_word', title: 'Primer Contacto', desc: 'Clasifica tu primera palabra con éxito.', icon: '🛰️', req: this.wordsClassified >= 1 },
      { id: 'streak_5', title: 'Velocidad Luz', desc: 'Consigue una racha de 5 aciertos seguidos.', icon: '⚡', req: this.maxStreak >= 5 },
      { id: 'master_10', title: 'Piloto Destacado', desc: 'Clasifica 10 palabras estelares.', icon: '🚀', req: this.wordsClassified >= 10 },
      { id: 'hyperdrive', title: 'Comandante Supremo', desc: 'Supera los 3,000 puntos en misiones.', icon: '👑', req: this.score >= 3000 },
      { id: 'hiato_master', title: 'Maestro del Hiato', desc: 'Clasifica una palabra compleja como Cohete o Murciélago.', icon: '🌌', req: this.score >= 800 }
    ];

    container.innerHTML = achievementsList.map(item => `
      <div class="trophy-badge-card ${item.req ? 'unlocked' : 'locked'}">
        <div class="trophy-icon">${item.icon}</div>
        <div class="trophy-info">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <span class="trophy-status">${item.req ? '¡DESBLOQUEADO!' : 'BLOQUEADO'}</span>
        </div>
      </div>
    `).join('');
  }

  checkAchievements() {
    this.renderTrophies();
  }

  pronounceWord(word) {
    soundEngine.playClick();
    soundEngine.speakText(word);
  }
}

// Inicializar y exportar a window para interoperabilidad de botones
window.addEventListener('DOMContentLoaded', () => {
  window.syllabusApp = new GameController();
});
