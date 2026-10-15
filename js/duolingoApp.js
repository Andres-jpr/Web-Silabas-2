/**
 * SYLLABUS DUO: Motor de Juego Interactivo Estilo Duolingo
 * Vidas, Botones 3D con Push Effect, Mascota reactiva SVG y Cajón inferior
 */

(function () {
  'use strict';

  // Banco de palabras graduadas para la lección
  const LESSON_WORDS = [
    { word: "Sol", syllables: ["Sol"], type: "monosilaba", label: "Monosílaba", count: "1 sílaba", hint: "La estrella de nuestro sistema solar" },
    { word: "Luna", syllables: ["Lu", "na"], type: "bisilaba", label: "Bisílaba", count: "2 sílabas", hint: "Satélite natural que brilla de noche" },
    { word: "Cohete", syllables: ["Co", "he", "te"], type: "trisilaba", label: "Trisílaba", count: "3 sílabas", hint: "Vehículo espacial con hiato (o-e)" },
    { word: "Planeta", syllables: ["Pla", "ne", "ta"], type: "trisilaba", label: "Trisílaba", count: "3 sílabas", hint: "Gira en órbita alrededor del Sol" },
    { word: "Astronauta", syllables: ["As", "tro", "nau", "ta"], type: "polisilaba", label: "Polisílaba", count: "4 sílabas", hint: "Explorador con traje espacial" },
    { word: "Pez", syllables: ["Pez"], type: "monosilaba", label: "Monosílaba", count: "1 sílaba", hint: "Nada velozmente en el océano" },
    { word: "Robot", syllables: ["Ro", "bot"], type: "bisilaba", label: "Bisílaba", count: "2 sílabas", hint: "Máquina inteligente programable" },
    { word: "Telescopio", syllables: ["Te", "les", "co", "pio"], type: "polisilaba", label: "Polisílaba", count: "4 sílabas", hint: "Para observar constelaciones lejanas" }
  ];

  // =========================================================================
  // MOTOR DE SONIDO PROCEDURAL ESTILO DUOLINGO
  // =========================================================================
  class DuoAudio {
    constructor() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = AudioContext ? new AudioContext() : null;
      this.speechSynth = window.speechSynthesis || null;
      this.spanishVoice = null;
      this.initVoice();
    }

    initVoice() {
      if (!this.speechSynth) return;
      const getV = () => {
        const voices = this.speechSynth.getVoices();
        this.spanishVoice = voices.find(v => v.lang.startsWith('es') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Sabina') || v.name.includes('Helena') || v.name.includes('Raul'))) 
          || voices.find(v => v.lang.startsWith('es')) 
          || null;
      };
      getV();
      if (this.speechSynth.onvoiceschanged !== undefined) {
        this.speechSynth.onvoiceschanged = getV;
      }
    }

    resume() {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    // Tap seco de botón
    playTap() {
      this.resume();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }

    // Acorde alegre de acierto de Duolingo (Ding-Ding brillante)
    playCorrect() {
      this.resume();
      if (!this.ctx) return;
      const notes = [587.33, 880]; // Re5, La5
      notes.forEach((freq, i) => {
        setTimeout(() => {
          try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.28, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.35);
          } catch (e) {}
        }, i * 90);
      });
    }

    // Sonido suave de fallo (Boing amable sin frustración)
    playWrong() {
      this.resume();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.25);
      } catch (e) {}
    }

    // Pérdida de corazón
    playHeartLoss() {
      this.resume();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
      } catch (e) {}
    }

    // Fanfarria de lección completada
    playLessonComplete() {
      this.resume();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, i) => {
        setTimeout(() => {
          try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.4);
          } catch (e) {}
        }, i * 80);
      });
    }

    // Pronunciación de la palabra con voz natural en español
    speak(text) {
      if (!this.speechSynth) return;
      this.speechSynth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'es-ES';
      if (this.spanishVoice) u.voice = this.spanishVoice;
      u.pitch = 1.05;
      u.rate = 0.95;
      this.speechSynth.speak(u);
    }
  }

  // =========================================================================
  // CONTROLADOR DUOLINGO
  // =========================================================================
  class DuolingoGame {
    constructor() {
      this.audio = new DuoAudio();
      this.questions = [...LESSON_WORDS];
      this.currentIndex = 0;
      this.hearts = 5;
      this.gems = 120;
      this.streak = 3;
      this.earnedXP = 0;
      this.correctAnswersCount = 0;

      this.selectedOption = null;
      this.isChecking = false; // Si ya comprobó la respuesta actual

      this.initElements();
      this.bindEvents();
      this.renderQuestion();
      this.updateHeartsUI();
    }

    initElements() {
      // Header
      this.progressBar = document.getElementById('duo-progress-bar');
      this.heartsContainer = document.getElementById('duo-hearts-group');
      this.gemsCountEl = document.getElementById('duo-gems-count');
      this.streakCountEl = document.getElementById('duo-streak-count');

      // Área de Pregunta
      this.targetWordEl = document.getElementById('duo-target-word');
      this.targetHintEl = document.getElementById('duo-target-hint');
      this.syllablesChipRow = document.getElementById('duo-syllables-chip-row');
      this.btnAudioSpeaker = document.getElementById('duo-audio-speaker');

      // Mascota
      this.mascotContainer = document.getElementById('duo-mascot-avatar');

      // Opciones
      this.optionCards = document.querySelectorAll('.duo-choice-card');

      // Drawer Inferior
      this.bottomDrawer = document.getElementById('duo-bottom-drawer');
      this.drawerFeedback = document.getElementById('duo-feedback-container');
      this.feedbackIcon = document.getElementById('duo-feedback-icon');
      this.feedbackTitle = document.getElementById('duo-feedback-title');
      this.feedbackMessage = document.getElementById('duo-feedback-message');
      this.btnAction = document.getElementById('duo-action-btn');

      // Vistas
      this.exerciseView = document.getElementById('duo-exercise-view');
      this.victoryView = document.getElementById('duo-victory-view');
      this.heartsModal = document.getElementById('duo-hearts-modal');
      this.btnRefillHearts = document.getElementById('duo-btn-refill-hearts');

      // Estadísticas finales
      this.victoryXpEl = document.getElementById('victory-xp-val');
      this.victoryAccuracyEl = document.getElementById('victory-accuracy-val');
      this.btnFinishLesson = document.getElementById('duo-btn-finish-lesson');
    }

    bindEvents() {
      // Altavoz
      this.btnAudioSpeaker?.addEventListener('click', () => {
        const q = this.questions[this.currentIndex];
        if (q) {
          this.audio.playTap();
          this.audio.speak(q.word);
        }
      });

      // Selección de opciones 3D
      this.optionCards.forEach(card => {
        card.addEventListener('click', () => {
          if (this.isChecking) return;
          const choice = card.getAttribute('data-choice');
          this.selectOption(choice);
        });
      });

      // Botón 3D de Acción (COMPROBAR / CONTINUAR)
      this.btnAction?.addEventListener('click', () => {
        if (!this.selectedOption && !this.isChecking) return;

        if (!this.isChecking) {
          this.checkAnswer();
        } else {
          this.nextQuestion();
        }
      });

      // Modal de recarga de corazones
      this.btnRefillHearts?.addEventListener('click', () => {
        this.hearts = 5;
        this.updateHeartsUI();
        this.heartsModal?.classList.remove('active');
        this.setMascotState('idle');
      });

      // Botón finalizar lección
      this.btnFinishLesson?.addEventListener('click', () => {
        this.restartLesson();
      });

      // Atajos de teclado estilo Duolingo: 1, 2, 3, 4 y Enter
      window.addEventListener('keydown', (e) => {
        if (this.heartsModal?.classList.contains('active')) return;

        if (e.key === '1') this.selectOption('monosilaba');
        if (e.key === '2') this.selectOption('bisilaba');
        if (e.key === '3') this.selectOption('trisilaba');
        if (e.key === '4') this.selectOption('polisilaba');

        if (e.key === 'Enter') {
          e.preventDefault();
          this.btnAction?.click();
        }
      });
    }

    // Seleccionar opción con push 3D
    selectOption(choice) {
      this.selectedOption = choice;
      this.audio.playTap();

      this.optionCards.forEach(c => {
        c.classList.toggle('is-selected', c.getAttribute('data-choice') === choice);
      });

      // Habilitar botón COMPROBAR
      this.btnAction.classList.remove('btn-disabled');
      this.btnAction.classList.add('btn-green');
      this.btnAction.innerText = "COMPROBAR";
    }

    renderQuestion() {
      const q = this.questions[this.currentIndex];
      if (!q) return;

      this.selectedOption = null;
      this.isChecking = false;

      // Reset de clases de opciones
      this.optionCards.forEach(c => c.classList.remove('is-selected'));

      // Textos
      this.targetWordEl.innerText = q.word;
      this.targetHintEl.innerText = q.hint;

      // Limpiar desglose de sílabas
      this.syllablesChipRow.innerHTML = '';
      this.syllablesChipRow.style.display = 'none';

      // Reset del drawer inferior a estado neutro
      this.bottomDrawer.className = 'duo-bottom-drawer';
      this.btnAction.className = 'duo-action-btn-3d btn-disabled';
      this.btnAction.innerText = "COMPROBAR";

      // Progreso
      const progressPercent = (this.currentIndex / this.questions.length) * 100;
      this.progressBar.style.width = `${Math.max(8, progressPercent)}%`;

      // Mascota a estado idle
      this.setMascotState('idle');

      // Animación suave de entrada de la tarjeta de palabra
      if (window.gsap) {
        window.gsap.fromTo('.duo-speech-bubble', 
          { scale: 0.94, opacity: 0, y: 10 },
          { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.5)" }
        );
      }
    }

    checkAnswer() {
      const q = this.questions[this.currentIndex];
      if (!q || !this.selectedOption) return;

      this.isChecking = true;
      const isCorrect = this.selectedOption === q.type;

      // Mostrar chips con las sílabas separadas en el globo de texto
      this.syllablesChipRow.style.display = 'flex';
      this.syllablesChipRow.innerHTML = q.syllables.map(syl => 
        `<span class="duo-syllable-tag">${syl}</span>`
      ).join('');

      if (isCorrect) {
        // --- ACIERTO ESTILO DUOLINGO ---
        this.correctAnswersCount += 1;
        this.earnedXP += 15;
        this.audio.playCorrect();
        this.setMascotState('happy');

        // Confeti estelar
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 60,
            spread: 75,
            origin: { y: 0.75 },
            colors: ['#58CC02', '#1CB0F6', '#FFC800', '#CE82FF']
          });
        }

        // Drawer Verde
        this.bottomDrawer.className = 'duo-bottom-drawer is-correct';
        this.feedbackIcon.innerText = '✅';
        this.feedbackTitle.innerText = '¡Excelente trabajo!';
        this.feedbackMessage.innerText = `"${q.word}" tiene ${q.count} (${q.syllables.join(' - ')}).`;

        this.btnAction.className = 'duo-action-btn-3d btn-green';
        this.btnAction.innerText = 'CONTINUAR';

      } else {
        // --- FALLO ESTILO DUOLINGO ---
        this.audio.playWrong();
        this.audio.playHeartLoss();
        this.setMascotState('sad');

        // Quitar 1 corazón
        this.hearts = Math.max(0, this.hearts - 1);
        this.updateHeartsUI(true);

        // Drawer Rojo suave
        this.bottomDrawer.className = 'duo-bottom-drawer is-incorrect';
        this.feedbackIcon.innerText = '❌';
        this.feedbackTitle.innerText = 'Solución correcta:';
        this.feedbackMessage.innerText = `${q.label} (${q.count}: ${q.syllables.join(' - ')}).`;

        this.btnAction.className = 'duo-action-btn-3d btn-red';
        this.btnAction.innerText = 'ENTENDIDO';
      }
    }

    nextQuestion() {
      // Si se quedó sin corazones, mostrar modal
      if (this.hearts <= 0) {
        this.heartsModal?.classList.add('active');
        return;
      }

      this.currentIndex += 1;

      // Si terminó la lección
      if (this.currentIndex >= this.questions.length) {
        this.showVictoryScreen();
      } else {
        this.renderQuestion();
      }
    }

    updateHeartsUI(didLoseOne = false) {
      if (!this.heartsContainer) return;
      const heartSpans = this.heartsContainer.querySelectorAll('.heart-icon');

      heartSpans.forEach((heart, i) => {
        if (i < this.hearts) {
          heart.classList.remove('lost');
        } else {
          heart.classList.add('lost');
          if (didLoseOne && i === this.hearts) {
            heart.classList.add('shake-break');
            setTimeout(() => heart.classList.remove('shake-break'), 700);
          }
        }
      });
    }

    showVictoryScreen() {
      this.audio.playLessonComplete();
      this.exerciseView.style.display = 'none';
      this.bottomDrawer.style.display = 'none';
      this.victoryView.classList.add('active');
      this.progressBar.style.width = '100%';

      // Confeti de victoria masivo
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#FFC800', '#58CC02', '#1CB0F6', '#FF4B4B']
        });
      }

      // Calcular precisión
      const accuracy = Math.round((this.correctAnswersCount / this.questions.length) * 100);
      this.victoryAccuracyEl.innerText = `${accuracy}%`;
      this.victoryXpEl.innerText = `+${this.earnedXP} XP`;
    }

    restartLesson() {
      this.currentIndex = 0;
      this.correctAnswersCount = 0;
      this.earnedXP = 0;
      this.exerciseView.style.display = 'flex';
      this.bottomDrawer.style.display = 'block';
      this.victoryView.classList.remove('active');
      this.renderQuestion();
    }

    // Cambiar estados de la mascota SVG
    setMascotState(state) {
      const mascot = document.getElementById('mascot-svg-el');
      if (!mascot) return;

      mascot.classList.remove('mascot-idle', 'mascot-happy', 'mascot-sad');
      mascot.classList.add(`mascot-${state}`);

      const eyes = document.getElementById('mascot-eyes');
      const mouth = document.getElementById('mascot-mouth');

      if (state === 'happy') {
        if (eyes) eyes.innerHTML = '<path d="M 28 38 Q 33 30 38 38 M 52 38 Q 57 30 62 38" stroke="#3C3C3C" stroke-width="4" stroke-linecap="round" fill="none"/>';
        if (mouth) mouth.setAttribute('d', 'M 36 50 Q 45 62 54 50');
      } else if (state === 'sad') {
        if (eyes) eyes.innerHTML = '<circle cx="33" cy="38" r="4" fill="#3C3C3C"/><circle cx="57" cy="38" r="4" fill="#3C3C3C"/>';
        if (mouth) mouth.setAttribute('d', 'M 38 56 Q 45 48 52 56');
      } else {
        // Idle
        if (eyes) eyes.innerHTML = '<ellipse cx="33" cy="36" rx="5" ry="7" fill="#3C3C3C"/><circle cx="35" cy="34" r="2" fill="#FFF"/><ellipse cx="57" cy="36" rx="5" ry="7" fill="#3C3C3C"/><circle cx="59" cy="34" r="2" fill="#FFF"/>';
        if (mouth) mouth.setAttribute('d', 'M 38 48 Q 45 56 52 48');
      }
    }
  }

  // Inicializar al cargar
  window.addEventListener('DOMContentLoaded', () => {
    window.duoGame = new DuolingoGame();
  });
})();
