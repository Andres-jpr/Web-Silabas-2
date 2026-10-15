/**
 * SYLLABUS-9: Misión Intergaláctica de Sílabas
 * Bundle de ejecución universal (Compatible con HTTP Local y con protocolo file://)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. BASE DE DATOS DE PALABRAS Y REGLAS
  // =========================================================================
  const WORDS_DATABASE = [
    // --- MONOSÍLABAS ---
    { word: "Sol", syllables: ["Sol"], type: "monosilaba", category: "Espacio", hint: "La estrella más brillante de nuestro sistema solar." },
    { word: "Pez", syllables: ["Pez"], type: "monosilaba", category: "Naturaleza", hint: "Animal acuático que respira por branquias." },
    { word: "Luz", syllables: ["Luz"], type: "monosilaba", category: "Física", hint: "Viaja a 300.000 kilómetros por segundo en el vacío." },
    { word: "Tren", syllables: ["Tren"], type: "monosilaba", category: "Transporte", hint: "Medio de transporte sobre rieles." },
    { word: "Rey", syllables: ["Rey"], type: "monosilaba", category: "Historia", hint: "Monarca de un reino." },
    { word: "Pan", syllables: ["Pan"], type: "monosilaba", category: "Alimento", hint: "Alimento horneado hecho con harina y levadura." },
    { word: "Mar", syllables: ["Mar"], type: "monosilaba", category: "Geografía", hint: "Gran masa de agua salada." },
    { word: "Flor", syllables: ["Flor"], type: "monosilaba", category: "Naturaleza", hint: "Estructura reproductiva de muchas plantas." },
    { word: "Voz", syllables: ["Voz"], type: "monosilaba", category: "Comunicación", hint: "Sonido producido por las cuerdas vocales." },
    { word: "Gris", syllables: ["Gris"], type: "monosilaba", category: "Colores", hint: "Color intermedio entre el blanco y el negro." },
    { word: "Buey", syllables: ["Buey"], type: "monosilaba", category: "Animales", hint: "¡Cuidado con el triptongo! Tiene 3 vocales en una sola sílaba." },

    // --- BISÍLABAS ---
    { word: "Luna", syllables: ["Lu", "na"], type: "bisilaba", category: "Espacio", hint: "El satélite natural de la Tierra." },
    { word: "Robot", syllables: ["Ro", "bot"], type: "bisilaba", category: "Tecnología", hint: "Máquina programable capaz de realizar tareas complejas." },
    { word: "Láser", syllables: ["Lá", "ser"], type: "bisilaba", category: "Tecnología", hint: "Haz de luz concentrada y de gran energía." },
    { word: "Nave", syllables: ["Na", "ve"], type: "bisilaba", category: "Espacio", hint: "Vehículo diseñado para viajar por el cosmos." },
    { word: "Reloj", syllables: ["Re", "loj"], type: "bisilaba", category: "Instrumentos", hint: "Dispositivo que mide el tiempo estelar." },
    { word: "Árbol", syllables: ["Ár", "bol"], type: "bisilaba", category: "Naturaleza", hint: "Planta con tronco leñoso que produce oxígeno." },
    { word: "Viento", syllables: ["Vien", "to"], type: "bisilaba", category: "Naturaleza", hint: "¡Ojo al diptongo 'ie'!: las dos vocales van en la misma sílaba." },
    { word: "Ciudad", syllables: ["Ciu", "dad"], type: "bisilaba", category: "Geografía", hint: "Diptongo con dos vocales cerradas ('i' y 'u') juntas." },
    { word: "Canción", syllables: ["Can", "ción"], type: "bisilaba", category: "Música", hint: "Composición con letra y melodía." },
    { word: "Cosmos", syllables: ["Cos", "mos"], type: "bisilaba", category: "Espacio", hint: "El universo ordenado y armónico." },
    { word: "Astro", syllables: ["As", "tro"], type: "bisilaba", category: "Espacio", hint: "Cuerpo celeste del firmamento." },

    // --- TRISÍLABAS ---
    { word: "Planeta", syllables: ["Pla", "ne", "ta"], type: "trisilaba", category: "Espacio", hint: "Cuerpo celeste que orbita alrededor de una estrella." },
    { word: "Cometa", syllables: ["Co", "me", "ta"], type: "trisilaba", category: "Espacio", hint: "Cuerpo helado que deja una brillante cola al acercarse al Sol." },
    { word: "Cohete", syllables: ["Co", "he", "te"], type: "trisilaba", category: "Espacio", hint: "¡Hiato! Las dos vocales 'o' y 'e' se separan en sílabas distintas." },
    { word: "Estrella", syllables: ["Es", "tre", "lla"], type: "trisilaba", category: "Espacio", hint: "Esfera de plasma gigante que emite su propia luz." },
    { word: "Galaxia", syllables: ["Ga", "la", "xia"], type: "trisilaba", category: "Espacio", hint: "Enorme conjunto de miles de millones de estrellas." },
    { word: "Cápsula", syllables: ["Cáp", "su", "la"], type: "trisilaba", category: "Tecnología", hint: "Módulo espacial donde viajan los astronautas." },
    { word: "Brújula", syllables: ["Brú", "ju", "la"], type: "trisilaba", category: "Navegación", hint: "Instrumento con aguja imantada que señala el norte magnético." },
    { word: "Órbita", syllables: ["Ór", "bi", "ta"], type: "trisilaba", category: "Física", hint: "Trayectoria que describe un astro alrededor de otro." },
    { word: "Espacio", syllables: ["Es", "pa", "cio"], type: "trisilaba", category: "Espacio", hint: "La inmensa extensión donde existen todas las galaxias." },
    { word: "Eclipse", syllables: ["E", "clip", "se"], type: "trisilaba", category: "Astronomía", hint: "Ocultación de un astro por la interposición de otro." },
    { word: "Módulo", syllables: ["Mó", "du", "lo"], type: "trisilaba", category: "Tecnología", hint: "Sección independiente de una nave espacial." },

    // --- POLISÍLABAS ---
    { word: "Astronauta", syllables: ["As", "tro", "nau", "ta"], type: "polisilaba", category: "Espacio", hint: "Persona entrenada para tripular naves en el espacio." },
    { word: "Telescopio", syllables: ["Te", "les", "co", "pio"], type: "polisilaba", category: "Instrumentos", hint: "Instrumento óptico para ver objetos celestes lejanos." },
    { word: "Constelación", syllables: ["Cons", "te", "la", "ción"], type: "polisilaba", category: "Astronomía", hint: "Agrupación convencional de estrellas en el cielo." },
    { word: "Supernova", syllables: ["Su", "per", "no", "va"], type: "polisilaba", category: "Astronomía", hint: "Explosión colosal de una estrella masiva al final de su vida." },
    { word: "Gravitatorio", syllables: ["Gra", "vi", "ta", "to", "rio"], type: "polisilaba", category: "Física", hint: "Relacionado con la fuerza de gravedad que une los astros." },
    { word: "Computadora", syllables: ["Com", "pu", "ta", "do", "ra"], type: "polisilaba", category: "Tecnología", hint: "El cerebro electrónico de la estación espacial." },
    { word: "Intergaláctico", syllables: ["In", "ter", "ga", "lác", "ti", "co"], type: "polisilaba", category: "Espacio", hint: "¡Palabra de 6 sílabas! Que ocurre entre dos o más galaxias." },
    { word: "Extraordinario", syllables: ["Ex", "tra", "or", "di", "na", "rio"], type: "polisilaba", category: "Calificativos", hint: "Fuera de lo común o excepcional." },
    { word: "Murciélago", syllables: ["Mur", "cié", "la", "go"], type: "polisilaba", category: "Animales", hint: "El único mamífero volador; ¡contiene las 5 vocales!" },
    { word: "Espectacular", syllables: ["Es", "pec", "ta", "cu", "lar"], type: "polisilaba", category: "Calificativos", hint: "Que causa gran asombro y admiración estelar." }
  ];

  const SYLLABLE_RULES = {
    monosilaba: {
      name: "Monosílabas", count: "1 Sílaba", icon: "⚡", color: "#00F0FF",
      desc: "Se pronuncian en un solo golpe de voz. Por regla general no llevan tilde (salvo tilde diacrítica como él/el, tú/tu).",
      examples: ["Sol", "Pez", "Luz", "Pan", "Rey"]
    },
    bisilaba: {
      name: "Bisílabas", count: "2 Sílabas", icon: "🚀", color: "#A78BFA",
      desc: "Tienen dos emisiones de voz (ej: Ro-bot, Lu-na). Cuidado con los diptongos que no se separan.",
      examples: ["Lu-na", "Ro-bot", "Lá-ser", "Re-loj"]
    },
    trisilaba: {
      name: "Trisílabas", count: "3 Sílabas", icon: "🪐", color: "#F43F5E",
      desc: "Formadas por tres sílabas. Presta atención a las esdrújulas (siempre con tilde) como ór-bi-ta.",
      examples: ["Pla-ne-ta", "Co-me-ta", "Es-tre-lla", "Ór-bi-ta"]
    },
    polisilaba: {
      name: "Polisílabas", count: "4 o más Sílabas", icon: "🌌", color: "#FBBF24",
      desc: "Tienen cuatro (tetrasílabas), cinco (pentasílabas) o más sílabas. ¡Palabras legendarias de largo alcance!",
      examples: ["As-tro-nau-ta", "Te-les-co-pio", "In-ter-ga-lác-ti-co"]
    }
  };

  // =========================================================================
  // 2. MOTOR DE AUDIO Y VOZ
  // =========================================================================
  class SoundEngine {
    constructor() {
      this.audioCtx = null;
      this.sfxEnabled = true;
      this.voiceEnabled = true;
      this.speechSynth = window.speechSynthesis || null;
      this.spanishVoice = null;

      const savedSfx = localStorage.getItem('syllabus_sfx');
      const savedVoice = localStorage.getItem('syllabus_voice');
      if (savedSfx !== null) this.sfxEnabled = savedSfx === 'true';
      if (savedVoice !== null) this.voiceEnabled = savedVoice === 'true';

      this.initVoice();
    }

    initContext() {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.audioCtx = new AudioContext();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    initVoice() {
      if (!this.speechSynth) return;
      const updateVoice = () => {
        const voices = this.speechSynth.getVoices();
        this.spanishVoice = voices.find(v => v.lang.startsWith('es') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Sabina') || v.name.includes('Helena') || v.name.includes('Raul'))) 
          || voices.find(v => v.lang.startsWith('es')) 
          || null;
      };
      updateVoice();
      if (this.speechSynth.onvoiceschanged !== undefined) {
        this.speechSynth.onvoiceschanged = updateVoice;
      }
    }

    toggleSfx() {
      this.sfxEnabled = !this.sfxEnabled;
      localStorage.setItem('syllabus_sfx', this.sfxEnabled);
      if (this.sfxEnabled) this.playTone(440, 'sine', 0.1, 0.2);
      return this.sfxEnabled;
    }

    toggleVoice() {
      this.voiceEnabled = !this.voiceEnabled;
      localStorage.setItem('syllabus_voice', this.voiceEnabled);
      if (this.voiceEnabled) this.speakText("Voz activada, comandante");
      return this.voiceEnabled;
    }

    playTone(freq, type = 'sine', duration = 0.15, volume = 0.25) {
      if (!this.sfxEnabled) return;
      this.initContext();
      if (!this.audioCtx) return;
      try {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
        gain.gain.setValueAtTime(volume, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + duration);
      } catch (e) {}
    }

    playClick() {
      if (!this.sfxEnabled) return;
      this.initContext();
      if (!this.audioCtx) return;
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
      } catch (e) {}
    }

    playCorrect() {
      if (!this.sfxEnabled) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 'triangle', 0.25, 0.2), idx * 60);
      });
    }

    playComboFanfare() {
      if (!this.sfxEnabled) return;
      const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
      notes.forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 'sine', 0.3, 0.25), idx * 50);
      });
    }

    playWrong() {
      if (!this.sfxEnabled) return;
      this.initContext();
      if (!this.audioCtx) return;
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {}
    }

    playSyllableCut() {
      if (!this.sfxEnabled) return;
      this.initContext();
      if (!this.audioCtx) return;
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(1200, now + 0.05);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.15);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      } catch (e) {}
    }

    speakText(text) {
      if (!this.voiceEnabled || !this.speechSynth) return;
      this.speechSynth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      if (this.spanishVoice) utterance.voice = this.spanishVoice;
      utterance.pitch = 1.05;
      utterance.rate = 0.95;
      this.speechSynth.speak(utterance);
    }

    speakSyllables(syllablesArray) {
      if (!this.voiceEnabled || !this.speechSynth) return;
      this.speechSynth.cancel();
      const formatted = syllablesArray.join(" ... ");
      const utterance = new SpeechSynthesisUtterance(formatted);
      utterance.lang = 'es-ES';
      if (this.spanishVoice) utterance.voice = this.spanishVoice;
      utterance.pitch = 1.1;
      utterance.rate = 0.85;
      this.speechSynth.speak(utterance);
    }
  }

  // =========================================================================
  // 3. MOTOR DE ANIMACIONES & CANVAS
  // =========================================================================
  class AnimationEngine {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.stars = [];
    }

    initBackgroundCanvas(canvasElement) {
      if (!canvasElement) return;
      this.canvas = canvasElement;
      this.ctx = this.canvas.getContext('2d');
      this.resizeCanvas();
      window.addEventListener('resize', () => this.resizeCanvas());

      this.stars = [];
      const count = Math.min(130, Math.floor((window.innerWidth * window.innerHeight) / 9000));
      for (let i = 0; i < count; i++) {
        this.stars.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: Math.random() * 1.8 + 0.4,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          baseAlpha: Math.random() * 0.6 + 0.3,
          alphaOffset: Math.random() * Math.PI * 2,
          color: ['#00F0FF', '#8B5CF6', '#F43F5E', '#FFFFFF', '#FBBF24'][Math.floor(Math.random() * 5)]
        });
      }
      this.renderStars();
    }

    resizeCanvas() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    renderStars() {
      if (!this.ctx || !this.canvas) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const now = Date.now() * 0.002;

      for (let star of this.stars) {
        star.x += star.speedX;
        star.y += star.speedY;
        if (star.x < 0) star.x = this.canvas.width;
        if (star.x > this.canvas.width) star.x = 0;
        if (star.y < 0) star.y = this.canvas.height;
        if (star.y > this.canvas.height) star.y = 0;

        const alpha = Math.max(0.1, star.baseAlpha + Math.sin(now + star.alphaOffset) * 0.25);
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = star.color;
        this.ctx.globalAlpha = alpha;
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = star.color;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
      this.ctx.globalAlpha = 1.0;
      requestAnimationFrame(() => this.renderStars());
    }

    triggerConfetti(isBigWin = false) {
      if (typeof confetti === 'function') {
        if (isBigWin) {
          const count = 180;
          const defaults = { origin: { y: 0.7 } };
          const fire = (particleRatio, opts) => {
            confetti(Object.assign({}, defaults, opts, { particleCount: Math.floor(count * particleRatio) }));
          };
          fire(0.25, { spread: 26, startVelocity: 55, colors: ['#00F0FF', '#8B5CF6', '#FBBF24'] });
          fire(0.2, { spread: 60, colors: ['#EC4899', '#3B82F6', '#10B981'] });
          fire(0.35, { spread: 100, decay: 0.91, scalar: 1.2 });
        } else {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.65 },
            colors: ['#00F0FF', '#8B5CF6', '#FBBF24', '#FFFFFF']
          });
        }
      }
    }

    pulseZone(element, isSuccess) {
      if (!element) return;
      const animationClass = isSuccess ? 'zone-flash-success' : 'zone-flash-error';
      element.classList.remove('zone-flash-success', 'zone-flash-error');
      void element.offsetWidth;
      element.classList.add(animationClass);
      setTimeout(() => element.classList.remove(animationClass), 600);
    }

    showFloatingScore(text, x, y, color = '#00F0FF') {
      const floatEl = document.createElement('div');
      floatEl.className = 'floating-score-tag';
      floatEl.innerText = text;
      floatEl.style.left = `${x}px`;
      floatEl.style.top = `${y}px`;
      floatEl.style.color = color;
      floatEl.style.textShadow = `0 0 16px ${color}`;
      document.body.appendChild(floatEl);

      if (window.gsap) {
        window.gsap.fromTo(floatEl, 
          { scale: 0.4, opacity: 0, y: 0 },
          { scale: 1.3, opacity: 1, y: -70, duration: 0.85, ease: "back.out(2)", onComplete: () => floatEl.remove() }
        );
      } else {
        setTimeout(() => floatEl.remove(), 900);
      }
    }
  }

  // =========================================================================
  // 4. CONTROLADOR PRINCIPAL DEL JUEGO
  // =========================================================================
  const soundEngine = new SoundEngine();
  const animationEngine = new AnimationEngine();

  class GameController {
    constructor() {
      this.currentMode = 'mission';
      this.score = 0;
      this.highScore = parseInt(localStorage.getItem('syllabus_high_score') || '0', 10);
      this.wordsClassified = parseInt(localStorage.getItem('syllabus_total_words') || '0', 10);
      this.streak = 0;
      this.maxStreak = parseInt(localStorage.getItem('syllabus_max_streak') || '0', 10);
      this.shipEnergy = 0;

      this.wordsPool = [];
      this.currentWord = null;
      this.isWordRevealed = false;
      this.timerInterval = null;
      this.timeLeft = 60;
      this.arcadeActive = false;

      this.initDOM();
      this.bindEvents();
      this.loadNewGame();
    }

    initDOM() {
      this.scoreEl = document.getElementById('hud-score');
      this.streakEl = document.getElementById('hud-streak');
      this.streakTagEl = document.getElementById('streak-multiplier-tag');
      this.energyBarEl = document.getElementById('ship-energy-fill');
      this.energyPercentEl = document.getElementById('ship-energy-text');
      this.rankEl = document.getElementById('pilot-rank-badge');

      this.activeWordCard = document.getElementById('active-word-card');
      this.activeWordText = document.getElementById('word-display-text');
      this.wordHintText = document.getElementById('word-hint-text');
      this.wordCategoryTag = document.getElementById('word-category-tag');
      this.syllablePreviewContainer = document.getElementById('syllables-preview');

      this.updateHUD();
    }

    bindEvents() {
      document.getElementById('btn-toggle-sfx')?.addEventListener('click', (e) => {
        const active = soundEngine.toggleSfx();
        e.currentTarget.classList.toggle('muted', !active);
      });

      document.getElementById('btn-toggle-voice')?.addEventListener('click', (e) => {
        const active = soundEngine.toggleVoice();
        e.currentTarget.classList.toggle('muted', !active);
      });

      document.querySelectorAll('[data-nav-mode]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const mode = e.currentTarget.getAttribute('data-nav-mode');
          this.switchMode(mode);
        });
      });

      document.getElementById('btn-speak-word')?.addEventListener('click', () => {
        if (!this.currentWord) return;
        soundEngine.playClick();
        soundEngine.speakText(this.currentWord.word);
      });

      document.getElementById('btn-reveal-syllables')?.addEventListener('click', () => {
        this.revealSyllablesWithLaser();
      });

      // Zonas de clasificación
      const dropZones = document.querySelectorAll('.classification-dock');
      dropZones.forEach(zone => {
        const targetCategory = zone.getAttribute('data-target-type');

        zone.addEventListener('dragover', (e) => {
          e.preventDefault();
          zone.classList.add('dock-hover');
        });

        zone.addEventListener('dragleave', () => {
          zone.classList.remove('dock-hover');
        });

        zone.addEventListener('drop', (e) => {
          e.preventDefault();
          zone.classList.remove('dock-hover');
          this.evaluateAnswer(targetCategory, zone);
        });

        zone.addEventListener('click', () => {
          if (!this.currentWord) return;
          this.evaluateAnswer(targetCategory, zone);
        });
      });

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

      document.getElementById('btn-start-arcade')?.addEventListener('click', () => {
        this.startArcadeTimer();
      });

      this.renderAcademyRules();
      this.renderTrophies();
    }

    loadNewGame() {
      this.shuffleWords();
      this.pickNextWord();
    }

    shuffleWords() {
      this.wordsPool = [...WORDS_DATABASE].sort(() => Math.random() - 0.5);
    }

    pickNextWord() {
      if (this.wordsPool.length === 0) this.shuffleWords();
      this.currentWord = this.wordsPool.pop();
      this.isWordRevealed = false;
      if (!this.currentWord) return;

      this.activeWordText.innerText = this.currentWord.word;
      this.wordHintText.innerText = `💡 Pista: ${this.currentWord.hint}`;
      this.wordCategoryTag.innerText = this.currentWord.category.toUpperCase();

      this.syllablePreviewContainer.innerHTML = '';
      this.syllablePreviewContainer.style.display = 'none';
      this.activeWordText.style.display = 'block';

      if (window.gsap) {
        window.gsap.fromTo(this.activeWordCard, 
          { scale: 0.8, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.7)" }
        );
      }
    }

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
          scale: 0, opacity: 0, y: -15, stagger: 0.12, duration: 0.4, ease: "back.out(2)"
        });
      }

      soundEngine.speakSyllables(this.currentWord.syllables);
    }

    evaluateAnswer(chosenType, dockElement) {
      if (!this.currentWord) return;
      const isCorrect = chosenType === this.currentWord.type;
      const dockRect = dockElement.getBoundingClientRect();

      if (isCorrect) {
        this.streak += 1;
        if (this.streak > this.maxStreak) {
          this.maxStreak = this.streak;
          localStorage.setItem('syllabus_max_streak', this.maxStreak);
        }

        const multiplier = Math.min(5, 1 + Math.floor(this.streak / 3));
        const pointsEarned = 100 * multiplier;
        this.score += pointsEarned;
        this.wordsClassified += 1;
        this.shipEnergy = Math.min(100, this.shipEnergy + 10);
        localStorage.setItem('syllabus_total_words', this.wordsClassified);

        if (this.streak >= 3) {
          soundEngine.playComboFanfare();
          animationEngine.showFloatingScore(`🔥 ¡COMBO x${multiplier}! +${pointsEarned}`, dockRect.left + dockRect.width / 2, dockRect.top, '#FFD600');
          animationEngine.triggerConfetti(false);
        } else {
          soundEngine.playCorrect();
          animationEngine.showFloatingScore(`+${pointsEarned} PTS`, dockRect.left + dockRect.width / 2, dockRect.top, '#00F0FF');
        }

        animationEngine.pulseZone(dockElement, true);

        if (this.shipEnergy >= 100) {
          this.triggerHyperdriveJump();
        }

        this.checkAchievements();
        this.updateHUD();

        if (window.gsap) {
          window.gsap.to(this.activeWordCard, {
            scale: 0.5, opacity: 0, y: -40, duration: 0.25, ease: "power2.in",
            onComplete: () => this.pickNextWord()
          });
        } else {
          setTimeout(() => this.pickNextWord(), 250);
        }

      } else {
        soundEngine.playWrong();
        animationEngine.pulseZone(dockElement, false);
        this.streak = 0;
        this.updateHUD();
        animationEngine.showFloatingScore(`¡Inténtalo otra vez!`, dockRect.left + dockRect.width / 2, dockRect.top, '#F43F5E');

        if (window.gsap) {
          window.gsap.to(this.activeWordCard, {
            x: 14, repeat: 5, yoyo: true, duration: 0.06,
            onComplete: () => window.gsap.set(this.activeWordCard, { x: 0 })
          });
        }
        this.revealSyllablesWithLaser();
      }
    }

    triggerHyperdriveJump() {
      this.shipEnergy = 0;
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

      let rank = "Cadete Espacial";
      if (this.score >= 5000) rank = "Comandante Supremo";
      else if (this.score >= 3000) rank = "Piloto de Élite";
      else if (this.score >= 1500) rank = "Oficial de Enlace";
      else if (this.score >= 500) rank = "Navegante Estelar";

      if (this.rankEl) this.rankEl.innerText = rank;

      if (this.score > this.highScore) {
        this.highScore = this.score;
        localStorage.setItem('syllabus_high_score', this.highScore);
      }
    }

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
        if (this.timeLeft <= 5) soundEngine.playTone(880, 'sine', 0.1, 0.3);

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

    setupCutterMode() {
      const cutterPool = WORDS_DATABASE.filter(w => w.syllables.length >= 2);
      const targetWordObj = cutterPool[Math.floor(Math.random() * cutterPool.length)];
      this.cutterWord = targetWordObj;

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
      const expectedCuts = [];
      let accumulatedLength = 0;
      for (let i = 0; i < wordObj.syllables.length - 1; i++) {
        accumulatedLength += wordObj.syllables[i].length;
        expectedCuts.push(accumulatedLength);
      }

      const activeSlots = Array.from(document.querySelectorAll('.cutter-laser-slot.cut-active'))
        .map(slot => parseInt(slot.getAttribute('data-cut-index'), 10));

      const isExactMatch = expectedCuts.length === activeSlots.length &&
        expectedCuts.every((val, idx) => val === activeSlots[idx]);

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

  // Inicialización global
  window.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('space-stars-canvas');
    animationEngine.initBackgroundCanvas(canvasEl);
    window.syllabusApp = new GameController();
  });
})();
