/**
 * Motor de Audio Arcade y Síntesis de Voz
 * Combina Web Audio API procedimental (100% libre de latencia y offline)
 * con la Web Speech API para lectura silábica interactiva en español.
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.sfxEnabled = true;
    this.voiceEnabled = true;
    this.speechSynth = window.speechSynthesis || null;
    this.spanishVoice = null;

    // Cargar preferencias guardadas
    const savedSfx = localStorage.getItem('syllabus_sfx');
    const savedVoice = localStorage.getItem('syllabus_voice');
    if (savedSfx !== null) this.sfxEnabled = savedSfx === 'true';
    if (savedVoice !== null) this.voiceEnabled = savedVoice === 'true';

    this.initVoice();
  }

  // Inicializar contexto tras el primer gesto del usuario
  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  initVoice() {
    if (!this.speechSynth) return;
    const updateVoice = () => {
      const voices = this.speechSynth.getVoices();
      // Buscar voz nativa en español
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
    if (this.voiceEnabled) {
      this.speakText("Voz activada, comandante");
    }
    return this.voiceEnabled;
  }

  // Generador de tonos Web Audio
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
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Sonido: Clic láser / Selección
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

  // Sonido: Acierto estelar (Campana brillante)
  playCorrect() {
    if (!this.sfxEnabled) return;
    this.initContext();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // Do, Mi, Sol, Do (Acorde Mayor triunfal)
    notes.forEach((freq, index) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.25, 0.2);
      }, index * 60);
    });
  }

  // Sonido: Combo racha alta (x3 o superior)
  playComboFanfare() {
    if (!this.sfxEnabled) return;
    this.initContext();
    if (!this.audioCtx) return;

    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
    notes.forEach((freq, index) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.3, 0.25);
      }, index * 50);
    });
  }

  // Sonido: Error amable (Gota suave / alerta amigable)
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

  // Sonido: Corte de sílaba (Espada láser)
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

  // Pronunciar texto normal con la síntesis de voz en español
  speakText(text, pitch = 1.05, rate = 0.95) {
    if (!this.voiceEnabled || !this.speechSynth) return;

    this.speechSynth.cancel(); // Detener pronunciaciones previas
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    if (this.spanishVoice) utterance.voice = this.spanishVoice;
    utterance.pitch = pitch;
    utterance.rate = rate;
    this.speechSynth.speak(utterance);
  }

  // Pronunciar palabra dividida rítmicamente en sílabas
  // Ej: "Pla... ne... ta!"
  speakSyllables(syllablesArray) {
    if (!this.voiceEnabled || !this.speechSynth) return;

    this.speechSynth.cancel();
    const formatted = syllablesArray.join(" ... ");
    const utterance = new SpeechSynthesisUtterance(formatted);
    utterance.lang = 'es-ES';
    if (this.spanishVoice) utterance.voice = this.spanishVoice;
    utterance.pitch = 1.1;
    utterance.rate = 0.85; // Pausa más lenta para que el niño identifique cada golpe de voz
    this.speechSynth.speak(utterance);
  }
}

export const soundEngine = new SoundEngine();
