/**
 * SÍLABAS ENCANTADAS - MOTOR INTERACTIVO ROBUSTO
 * - Botones inferiores siempre activos con respuesta instantánea
 * - Animación visual de palmadas en pantalla
 * - Efectos de sonido y voz desbloqueados
 */

(function () {
  'use strict';

  // Banco de palabras ampliado y graduado por nivel de edad (Hasta 10 años)
  const WORDS_BY_AGE = {
    // -----------------------------------------------------------------------
    // NIVEL 1: 5 - 6 AÑOS (Palabras familiares, cortas: 1 y 2 sílabas)
    // -----------------------------------------------------------------------
    "5-6": [
      // Monosílabas (1)
      { word: "Sol", icon: "☀️", syllables: ["Sol"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "magic", fact: "Nos da luz y calor todos los días" },
      { word: "Pan", icon: "🥖", syllables: ["Pan"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "crunch", fact: "Es rico y crujiente para el desayuno" },
      { word: "Pez", icon: "🐟", syllables: ["Pez"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "water", fact: "Nada feliz y veloz en el agua" },
      { word: "Flor", icon: "🌸", syllables: ["Flor"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "magic", fact: "Tiene pétalos de colores y rico perfume" },
      { word: "Tren", icon: "🚂", syllables: ["Tren"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "train", fact: "Hace chu-chu viajando por los rieles" },
      { word: "Mar", icon: "🌊", syllables: ["Mar"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "water", fact: "Inmenso océano azul lleno de olas" },
      { word: "Sal", icon: "🧂", syllables: ["Sal"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "sparkle", fact: "Le da un toque sabroso a las comidas" },
      { word: "Rey", icon: "👑", syllables: ["Rey"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bell", fact: "Lleva una hermosa corona dorada" },
      { word: "Pie", icon: "🦶", syllables: ["Pie"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "step", fact: "Nos sostiene al caminar y saltar" },
      { word: "Dos", icon: "✌️", syllables: ["Dos"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bounce", fact: "Es el número que sigue después del uno" },

      // Bisílabas (2)
      { word: "Gato", icon: "🐱", syllables: ["Ga", "to"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "cat", fact: "Dice miau y ronronea cuando está feliz" },
      { word: "Casa", icon: "🏠", syllables: ["Ca", "sa"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "El dulce hogar donde vive la familia" },
      { word: "Luna", icon: "🌙", syllables: ["Lu", "na"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Brilla suave y redondita en la noche" },
      { word: "Taza", icon: "☕", syllables: ["Ta", "za"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Sirve para tomar leche o chocolate" },
      { word: "Pato", icon: "🦆", syllables: ["Pa", "to"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Nada en el lago diciendo cuac cuac" },
      { word: "Sapo", icon: "🐸", syllables: ["Sa", "po"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bounce", fact: "Salta muy alto buscando mosquitas" },
      { word: "Vaca", icon: "🐮", syllables: ["Va", "ca"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "cat", fact: "Dice muu y nos da leche muy fresca" },
      { word: "Oso", icon: "🐻", syllables: ["O", "so"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Es muy fuerte y le encanta comer miel" },
      { word: "Mesa", icon: "🪑", syllables: ["Me", "sa"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Donde apoyamos los cuadernos para dibujar" },
      { word: "Cama", icon: "🛏️", syllables: ["Ca", "ma"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Lugar calentito para descansar y soñar" },
      { word: "León", icon: "🦁", syllables: ["Le", "ón"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "El rey de la selva con melena dorada" },
      { word: "Mono", icon: "🐵", syllables: ["Mo", "no"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bounce", fact: "Se balancea divertido entre los árboles" },
      { word: "Nieve", icon: "❄️", syllables: ["Nie", "ve"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Copos blancos y fríos que caen del cielo" },
      { word: "Fuego", icon: "🔥", syllables: ["Fue", "go"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Da calor en las noches frías de campamento" },
      { word: "Bebé", icon: "👶", syllables: ["Be", "bé"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Aprende sus primeras palabras con alegría" }
    ],

    // -----------------------------------------------------------------------
    // NIVEL 2: 7 - 8 AÑOS (Palabras intermedias: 2, 3 sílabas y primeras de 4)
    // -----------------------------------------------------------------------
    "7-8": [
      // Bisílabas interesantes
      { word: "Reloj", icon: "⏰", syllables: ["Re", "loj"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "tictac", fact: "Marca el paso del tiempo con su tic-tac" },
      { word: "Perro", icon: "🐶", syllables: ["Pe", "rro"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "dog", fact: "El mejor amigo fiel que mueve la cola" },
      { word: "Delfín", icon: "🐬", syllables: ["Del", "fín"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Mamífero marino muy inteligente y alegre" },
      { word: "Dragón", icon: "🐉", syllables: ["Dra", "gón"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Criatura de leyenda que vuela por los cielos" },
      { word: "Pincel", icon: "🖌️", syllables: ["Pin", "cel"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Herramienta mágica para pintar obras de arte" },
      { word: "Barco", icon: "⛵", syllables: ["Bar", "co"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Navega con sus velas sobre el ancho mar" },

      // Trisílabas (3)
      { word: "Cohete", icon: "🚀", syllables: ["Co", "he", "te"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "laser", fact: "Viaja veloz hacia la Luna y las estrellas" },
      { word: "Estrella", icon: "⭐", syllables: ["Es", "tre", "lla"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "sparkle", fact: "Titila luminosa en el cielo nocturno" },
      { word: "Planeta", icon: "🪐", syllables: ["Pla", "ne", "ta"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Cuerpo celeste que gira alrededor del Sol" },
      { word: "Pelota", icon: "⚽", syllables: ["Pe", "lo", "ta"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bounce", fact: "Rebota alto en el patio de juegos y fútbol" },
      { word: "Guitarra", icon: "🎸", syllables: ["Gui", "ta", "rra"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "strum", fact: "Tiene seis cuerdas y produce bellas notas" },
      { word: "Zapato", icon: "👟", syllables: ["Za", "pa", "to"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Protege nuestros pies al correr y explorar" },
      { word: "Camello", icon: "🐪", syllables: ["Ca", "me", "llo"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Resiste largas caminatas en el desierto" },
      { word: "Espejo", icon: "🪞", syllables: ["Es", "pe", "jo"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "sparkle", fact: "Refleja con nitidez nuestra gran sonrisa" },
      { word: "Ventana", icon: "🪟", syllables: ["Ven", "ta", "na"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bell", fact: "Permite ver el paisaje y deja entrar el sol" },
      { word: "Mochila", icon: "🎒", syllables: ["Mo", "chi", "la"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Lleva seguros los libros a la escuela" },
      { word: "Castillo", icon: "🏰", syllables: ["Cas", "ti", "llo"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bell", fact: "Gran fortaleza de reyes y caballeros antiguos" },
      { word: "Palmera", icon: "🌴", syllables: ["Pal", "me", "ra"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Árbol tropical que crece cerca de la playa" },
      { word: "Campana", icon: "🔔", syllables: ["Cam", "pa", "na"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bell", fact: "Emite un sonido claro que se escucha a lo lejos" },
      { word: "Tortuga", icon: "🐢", syllables: ["Tor", "tu", "ga"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Lleva su casita protectora sobre su espalda" },
      { word: "Payaso", icon: "🤡", syllables: ["Pa", "ya", "so"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bounce", fact: "Hace reír a grandes y chicos en el circo" },
      { word: "Manzana", icon: "🍎", syllables: ["Man", "za", "na"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Fruta crujiente y deliciosa llena de energía" },

      // Polisílabas (4+)
      { word: "Arcoíris", icon: "🌈", syllables: ["Ar", "co", "í", "ris"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "magic", fact: "Siete hermosos colores tras la lluvia" },
      { word: "Elefante", icon: "🐘", syllables: ["E", "le", "fan", "te"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "roar", fact: "El animal terrestre más grande del mundo" },
      { word: "Calabaza", icon: "🎃", syllables: ["Ca", "la", "ba", "za"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "crunch", fact: "Fruto grande y redondo de color anaranjado" },
      { word: "Paraguas", icon: "☂️", syllables: ["Pa", "ra", "guas"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Nos protege de mojarnos en los días de lluvia" }
    ],

    // -----------------------------------------------------------------------
    // NIVEL 3: 9 - 10 AÑOS (Palabras avanzadas: 3, 4 y 5+ sílabas, ciencia y vocabulario)
    // -----------------------------------------------------------------------
    "9-10": [
      // Trisílabas complejas
      { word: "Galaxia", icon: "🌌", syllables: ["Ga", "la", "xia"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Conjunto de miles de millones de estrellas" },
      { word: "Volcán", icon: "🌋", syllables: ["Vol", "cán"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Montaña que puede expulsar lava y ceniza" },
      { word: "Brújula", icon: "🧭", syllables: ["Brú", "ju", "la"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "sparkle", fact: "Instrumento con aguja que señala siempre al norte" },

      // Polisílabas de 4 sílabas (4+)
      { word: "Astronauta", icon: "👨‍🚀", syllables: ["As", "tro", "nau", "ta"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "laser", fact: "Piloto audaz que explora galaxias lejanas" },
      { word: "Mariposa", icon: "🦋", syllables: ["Ma", "ri", "po", "sa"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "sparkle", fact: "Vuela de flor en flor con sus alas multicolores" },
      { word: "Telescopio", icon: "🔭", syllables: ["Te", "les", "co", "pio"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "sparkle", fact: "Nos permite observar planetas a millones de kilómetros" },
      { word: "Dinosaurio", icon: "🦖", syllables: ["Di", "no", "sau", "rio"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "roar", fact: "Reptiles gigantes que habitaron la Tierra antigua" },
      { word: "Murciélago", icon: "🦇", syllables: ["Mur", "cié", "la", "go"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "sparkle", fact: "Único mamífero volador; ¡lleva las cinco vocales!" },
      { word: "Chocolate", icon: "🍫", syllables: ["Cho", "co", "la", "te"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "crunch", fact: "Delicioso manjar elaborado con granos de cacao" },
      { word: "Bicicleta", icon: "🚲", syllables: ["Bi", "ci", "cle", "ta"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "bell", fact: "Vehículo ecológico impulsado por nuestros pedales" },
      { word: "Cocodrilo", icon: "🐊", syllables: ["Co", "co", "dri", "lo"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "water", fact: "Reptil de mandíbulas fuertes que vive en ríos" },
      { word: "Submarino", icon: "🚤", syllables: ["Sub", "ma", "ri", "no"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "water", fact: "Nave que desciende hasta el fondo del mar" },
      { word: "Constelación", icon: "✨", syllables: ["Cons", "te", "la", "ción"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "sparkle", fact: "Patrón imaginario formado por estrellas en el cielo" },
      { word: "Escalera", icon: "🪜", syllables: ["Es", "ca", "le", "ra"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "step", fact: "Nos ayuda a subir de un piso a otro con seguridad" },
      { word: "Termómetro", icon: "🌡️", syllables: ["Ter", "mó", "me", "tro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "tictac", fact: "Aparato que mide la temperatura de nuestro cuerpo" },
      { word: "Relámpago", icon: "⚡", syllables: ["Re", "lám", "pa", "go"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "laser", fact: "Descarga eléctrica que ilumina la tormenta" },
      { word: "Instrumento", icon: "🎷", syllables: ["Ins", "tru", "men", "to"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "strum", fact: "Objeto musical que crea melodías y armonías" },
      { word: "Microscopio", icon: "🔬", syllables: ["Mi", "cros", "co", "pio"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "sparkle", fact: "Lente potente para ver células y microorganismos" },
      { word: "Semáforo", icon: "🚦", syllables: ["Se", "má", "fo", "ro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "bell", fact: "Ordena el tránsito de las calles con 3 colores" },
      { word: "Universo", icon: "🪐", syllables: ["U", "ni", "ver", "so"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "magic", fact: "Todo el espacio, tiempo, materia y energía existente" },

      // Polisílabas de 5 o más sílabas (4+)
      { word: "Computadora", icon: "💻", syllables: ["Com", "pu", "ta", "do", "ra"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "Máquina electrónica para aprender, investigar y programar" },
      { word: "Helicóptero", icon: "🚁", syllables: ["He", "li", "cóp", "te", "ro"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "train", fact: "Aeronave que despega y vuela con grandes hélices" },
      { word: "Hipopótamo", icon: "🦛", syllables: ["Hi", "po", "pó", "ta", "mo"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "water", fact: "Pasa el día sumergido en lagos africanos" },
      { word: "Fotografía", icon: "📷", syllables: ["Fo", "to", "gra", "fí", "a"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Arte de inmortalizar instantes inolvidables" },
      { word: "Matemáticas", icon: "📐", syllables: ["Ma", "te", "má", "ti", "cas"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "Ciencia que estudia los números, formas y patrones" },
      { word: "Electricidad", icon: "💡", syllables: ["E", "lec", "tri", "ci", "dad"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Fuerza energética que enciende bombillos y motores" },
      { word: "Enciclopedia", icon: "📚", syllables: ["En", "ci", "clo", "pe", "dia"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Obra monumental que reúne el saber humano" },
      { word: "Rinoceronte", icon: "🦏", syllables: ["Ri", "no", "ce", "ron", "te"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "roar", fact: "Imponente herbívoro con un cuerno protector" },
      { word: "Arquitectura", icon: "🏛️", syllables: ["Ar", "qui", "tec", "tu", "ra"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "El arte de proyectar monumentos y bellos edificios" }
    ]
  };

  const DIALOGUES = {
    welcome: [
      "¡Hola amiguito! Soy Silabín el ratón explorador. ¡Vamos a descubrir las sílabas juntos!",
      "¡Bienvenido! Cada palabra tiene música. ¡Descubramos cuántos golpes de voz tiene!",
      "¡Qué alegría verte! ¿Listo para una gran aventura de palabras?"
    ],
    correct: [
      "¡Bravo, lo lograste! ¡Tienes un oído genial!",
      "¡Eso es! ¡Eres un súper detective de palabras!",
      "¡Guau, qué bien! ¡Acertaste!",
      "¡Choca esos cinco! ¡Excelente respuesta!",
      "¡Perfecto! Cada vez avanzamos más en el camino mágico."
    ],
    incorrect: [
      "¡Casi casi! No te preocupes, escucha la palabra conmigo y contemos juntos.",
      "¡Buen intento! Da palmadas al decirla para sentir cada sílaba.",
      "¡Tranquilo amiguito! Los grandes exploradores aprenden practicando.",
      "¡No pasa nada! Prueba de nuevo, tú puedes lograrlo."
    ],
    thinking: [
      "Mmm... ¿quieres una pista? Puedes pulsar el botón de palmadas.",
      "Tómate tu tiempo, da palmadas con tus manos para contar los golpes de voz.",
      "¿Será cortita o tendrá más sílabas? ¡Tú puedes descubrirlo!"
    ],
    tickle: [
      "¡Jijiji, eso me da cosquillas en los bigotes! ¡Sigamos jugando!",
      "¡Aquí estoy contigo! ¡Vamos a aprender muchas palabras!",
      "¡Choca la patita! ¡Eres mi mejor amigo explorador!"
    ]
  };

  // =========================================================================
  // MOTOR DE AUDIO BLINDADO
  // =========================================================================
  class EnchantedSound {
    constructor() {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = AudioCtx ? new AudioCtx() : null;
      this.synth = window.speechSynthesis || null;
      this.friendlyVoice = null;
      this.activeUtterance = null;
      this.isMusicPlaying = false;
      this.musicInterval = null;

      this.initVoice();

      // Monitor Keep-Alive para que SpeechSynthesis no se duerma
      setInterval(() => {
        if (this.synth && this.synth.paused) {
          this.synth.resume();
        }
      }, 800);
    }

    initVoice() {
      if (!this.synth) return;
      const selectBestVoice = () => {
        const voices = this.synth.getVoices();
        this.friendlyVoice = voices.find(v => v.lang.startsWith('es') && (
          v.name.includes('Sabina') || 
          v.name.includes('Laura') || 
          v.name.includes('Monica') || 
          v.name.includes('Paulina') || 
          v.name.includes('Paloma') || 
          v.name.includes('Elena') || 
          v.name.includes('Lucia') || 
          v.name.includes('Helena') || 
          v.name.includes('Dalia') ||
          v.name.includes('Camila') ||
          v.name.includes('Mia') ||
          v.name.includes('Sofia') ||
          v.name.includes('Natural') ||
          v.name.includes('Google')
        )) || voices.find(v => v.lang.startsWith('es')) || null;
      };

      selectBestVoice();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = selectBestVoice;
      }
    }

    resume() {
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    }

    playPop() {
      this.resume();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(650, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) {}
    }

    playClap() {
      this.resume();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.09);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      } catch (e) {}
    }

    playSpecialSfx(type) {
      this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      try {
        if (type === 'cat') {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(850, now + 0.15);
          osc.frequency.exponentialRampToValueAtTime(450, now + 0.4);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.4);
        } else if (type === 'dog') {
          [0, 0.14].forEach(offset => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(260, now + offset);
            osc.frequency.exponentialRampToValueAtTime(140, now + offset + 0.1);
            gain.gain.setValueAtTime(0.22, now + offset);
            gain.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.1);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + offset);
            osc.stop(now + offset + 0.1);
          });
        } else if (type === 'tictac') {
          const osc1 = this.ctx.createOscillator();
          const gain1 = this.ctx.createGain();
          osc1.type = 'triangle';
          osc1.frequency.setValueAtTime(1200, now);
          gain1.gain.setValueAtTime(0.18, now);
          gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
          osc1.connect(gain1);
          gain1.connect(this.ctx.destination);
          osc1.start(now);
          osc1.stop(now + 0.05);

          const osc2 = this.ctx.createOscillator();
          const gain2 = this.ctx.createGain();
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(900, now + 0.18);
          gain2.gain.setValueAtTime(0.18, now + 0.18);
          gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.23);
          osc2.connect(gain2);
          gain2.connect(this.ctx.destination);
          osc2.start(now + 0.18);
          osc2.stop(now + 0.23);
        } else if (type === 'train') {
          const notes = [440, 554.37];
          notes.forEach(f => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, now);
            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.35);
          });
        } else if (type === 'sparkle' || type === 'magic') {
          [600, 800, 1000, 1200].forEach((f, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now + idx * 0.06);
            gain.gain.setValueAtTime(0.15, now + idx * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.15);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.15);
          });
        } else if (type === 'laser') {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(880, now);
          osc.frequency.exponentialRampToValueAtTime(110, now + 0.22);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.22);
        } else if (type === 'bell') {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(1400, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.45);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.45);
        } else if (type === 'water') {
          [340, 480, 620].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);
            osc.frequency.exponentialRampToValueAtTime(freq + 150, now + idx * 0.08 + 0.12);
            gain.gain.setValueAtTime(0.18, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.12);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.12);
          });
        } else if (type === 'roar') {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(120, now);
          osc.frequency.linearRampToValueAtTime(75, now + 0.35);
          gain.gain.setValueAtTime(0.28, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.35);
        } else if (type === 'crunch') {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(280, now);
          osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);
          gain.gain.setValueAtTime(0.22, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.12);
        } else if (type === 'bounce') {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(170, now);
          osc.frequency.exponentialRampToValueAtTime(530, now + 0.14);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.14);
        } else if (type === 'strum') {
          [330, 440, 550].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.05);
            gain.gain.setValueAtTime(0.2, now + idx * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.005, now + idx * 0.05 + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.05);
            osc.stop(now + idx * 0.05 + 0.3);
          });
        } else if (type === 'step') {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(320, now);
          osc.frequency.exponentialRampToValueAtTime(160, now + 0.08);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.08);
        }
      } catch (e) {}
    }

    playWin() {
      this.resume();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        setTimeout(() => {
          try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.35);
          } catch (e) {}
        }, i * 65);
      });
    }

    playFail() {
      this.resume();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(260, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.22);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.22);
      } catch (e) {}
    }

    toggleMusic() {
      this.isMusicPlaying = !this.isMusicPlaying;
      if (this.isMusicPlaying) {
        this.resume();
        const notes = [523.25, 587.33, 659.25, 783.99, 659.25, 587.33];
        let noteIndex = 0;
        this.musicInterval = setInterval(() => {
          if (!this.isMusicPlaying || !this.ctx) return;
          try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(notes[noteIndex], now);
            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.25);
            noteIndex = (noteIndex + 1) % notes.length;
          } catch (e) {}
        }, 650);
      } else {
        clearInterval(this.musicInterval);
      }
      return this.isMusicPlaying;
    }

    speakFriendly(text, onComplete = null, pitch = 1.35, rate = 0.92) {
      if (!this.synth) {
        if (onComplete) onComplete();
        return;
      }

      if (this.synth.paused) {
        this.synth.resume();
      }
      this.synth.cancel();

      const cleanText = text
        .replace(/ - /g, ', ')
        .replace(/ \.\.\. /g, ', ');

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = this.friendlyVoice ? this.friendlyVoice.lang : 'es-ES';
      if (this.friendlyVoice) utterance.voice = this.friendlyVoice;
      utterance.pitch = pitch;
      utterance.rate = rate;

      this.activeUtterance = utterance;

      utterance.onstart = () => {
        const mouth = document.getElementById('raton-mouth');
        if (mouth) mouth.classList.add('mouth-talking');
        const badge = document.getElementById('mouse-speech-badge');
        if (badge) badge.classList.add('active');
      };

      let completed = false;
      const finishSpeaking = () => {
        if (completed) return;
        completed = true;
        const mouth = document.getElementById('raton-mouth');
        if (mouth) mouth.classList.remove('mouth-talking');
        const badge = document.getElementById('mouse-speech-badge');
        if (badge) badge.classList.remove('active');
        this.activeUtterance = null;
        if (onComplete) onComplete();
      };

      utterance.onend = finishSpeaking;
      utterance.onerror = finishSpeaking;

      // Respaldo de seguridad holgado que NUNCA interrumpe el habla natural
      const estimatedDurationMs = Math.max(8000, Math.ceil(cleanText.length * 115) + 4000);
      setTimeout(() => {
        finishSpeaking();
      }, estimatedDurationMs);

      this.synth.speak(utterance);
    }
  }

  // =========================================================================
  // CONTROLADOR PRINCIPAL DEL JUEGO
  // =========================================================================
  class EnchantedGame {
    constructor() {
      this.sound = new EnchantedSound();
      this.selectedAge = "7-8";
      this.words = this.shuffle(WORDS_BY_AGE[this.selectedAge]);
      this.currentIndex = 0;
      this.scoreProgress = 0;
      this.totalSegments = 6;
      this.streakCount = 0;
      this.thinkingTimer = null;
      this.isLevelChanging = false;

      this.initDOM();
      this.bindEvents();
      this.loadWord(false);
      this.resetThinkingTimer();

      setTimeout(() => {
        const helloPhrase = this.pickRandom(DIALOGUES.welcome);
        this.showCloud("¡Hola amiguito! 🐭✨");
        this.sound.speakFriendly(helloPhrase, () => {
          setTimeout(() => {
            const cur = this.words[this.currentIndex];
            if (cur) this.sound.speakFriendly(`Primera palabra: ${cur.word}`);
          }, 600);
        });
      }, 700);
    }

    shuffle(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    pickRandom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    initDOM() {
      this.cardIllustration = document.getElementById('card-illustration');
      this.cardTitle = document.getElementById('card-word-title');
      this.cardSyllableReveal = document.getElementById('card-syllable-reveal');
      this.cardFactText = document.getElementById('card-fact-text');
      this.characterEl = document.getElementById('character-walker');
      this.characterSvg = document.querySelector('.character-svg');
      this.cloudFeedback = document.getElementById('floating-cloud-feedback');
      this.progressSegments = document.querySelectorAll('.progress-segment');
      this.stoneBtns = document.querySelectorAll('.jelly-stone-btn');
      this.streakBadgeEl = document.getElementById('streak-stars-count');
      this.clappingHandsEl = document.getElementById('visual-clapping-hands');

      this.agePills = document.querySelectorAll('.age-pill-btn');

      // Botones inferiores (referenciando tanto los wrappers como los botones)
      this.btnSpeak = document.getElementById('btn-nav-speak');
      this.btnSyllables = document.getElementById('btn-nav-syllables');
      this.btnReset = document.getElementById('btn-nav-reset');
      this.btnMusicToggle = document.getElementById('btn-music-toggle');

      this.victoryModal = document.getElementById('diploma-victory-modal');
      this.btnPlayAgain = document.getElementById('btn-diploma-play-again');
      this.btnFullscreen = document.getElementById('btn-fullscreen-toggle');
    }

    bindEvents() {
      // PANTALLA COMPLETA
      this.btnFullscreen?.addEventListener('click', () => {
        this.sound.playPop();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.().catch(() => {});
          this.btnFullscreen.innerText = '⛶ Salir';
          this.btnFullscreen.classList.add('active');
        } else {
          document.exitFullscreen?.().catch(() => {});
          this.btnFullscreen.innerText = '⛶ Pantalla completa';
          this.btnFullscreen.classList.remove('active');
        }
      });

      document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && this.btnFullscreen) {
          this.btnFullscreen.innerText = '⛶ Pantalla completa';
          this.btnFullscreen.classList.remove('active');
        }
      });
      // SELECTOR DE EDAD CON ANUNCIO COMPLETO
      this.agePills.forEach(pill => {
        pill.addEventListener('click', () => {
          const age = pill.getAttribute('data-age');
          if (age === this.selectedAge || this.isLevelChanging) return;

          this.sound.playPop();
          this.selectedAge = age;
          this.agePills.forEach(p => p.classList.toggle('active', p === pill));

          this.isLevelChanging = true;
          clearTimeout(this.thinkingTimer);

          this.words = this.shuffle(WORDS_BY_AGE[this.selectedAge]);
          this.currentIndex = 0;
          this.scoreProgress = 0;
          this.streakCount = 0;
          this.updateProgressUI();
          this.updateStreakUI();

          this.loadWord(false);

          const agePhrases = {
            "5-6": "¡Cambiando a nivel inicial de 5 y 6 años! Palabras cortitas y fáciles.",
            "7-8": "¡Cambiando a nivel de 7 y 8 años! Vamos a explorar palabras medianas.",
            "9-10": "¡Cambiando a nivel avanzado de 9 y 10 años! Palabras largas con diptongos e hiatos."
          };

          const levelAnnouncement = agePhrases[age] || `¡Nivel de ${age} años!`;
          this.showCloud(`Nivel ${age} años 🌟`);

          this.sound.speakFriendly(levelAnnouncement, () => {
            setTimeout(() => {
              const cur = this.words[this.currentIndex];
              if (cur) {
                if (cur.soundType) this.sound.playSpecialSfx(cur.soundType);
                this.sound.speakFriendly(`La palabra es: ${cur.word}`, () => {
                  this.isLevelChanging = false;
                  this.resetThinkingTimer();
                });
              } else {
                this.isLevelChanging = false;
              }
            }, 700);
          });
        });
      });

      // Música de fondo
      this.btnMusicToggle?.addEventListener('click', () => {
        const playing = this.sound.toggleMusic();
        this.btnMusicToggle.classList.toggle('active', playing);
        this.btnMusicToggle.innerText = playing ? '🎵 Música: ON' : '🔇 Música: OFF';
      });

      // Clic en las piedras de gelatina (1, 2, 3, 4+)
      this.stoneBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.resetThinkingTimer();
          const countChosen = parseInt(btn.getAttribute('data-syllable-count'), 10);
          this.handleAnswer(countChosen, btn);
        });
      });

      // Clic en el ratón
      this.characterEl?.addEventListener('click', () => {
        this.sound.playPop();
        const ticklePhrase = this.pickRandom(DIALOGUES.tickle);
        this.characterEl.classList.add('character-hop');
        setTimeout(() => this.characterEl.classList.remove('character-hop'), 650);
        this.showCloud("¡Jijiji cosquillas! 🐭");
        this.sound.speakFriendly(ticklePhrase);
      });

      // =====================================================================
      // BOTONES INFERIORES: BLINDADOS, ROBUSTOS Y CON DELEGACIÓN TOTAL
      // =====================================================================

      // 1. Botón Escuchar (🔊)
      const handleSpeak = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.sound.resume();
        this.resetThinkingTimer();
        const cur = this.words[this.currentIndex];
        if (cur) {
          this.sound.playPop();
          if (cur.soundType) this.sound.playSpecialSfx(cur.soundType);
          this.characterEl.classList.add('character-hop');
          setTimeout(() => this.characterEl.classList.remove('character-hop'), 500);
          this.showCloud(`¡Escucha: ${cur.word}! 🔊`);
          this.sound.speakFriendly(`La palabra es: ${cur.word}. ${cur.fact || ''}`);
        }
      };

      // 2. Botón Palmadas (👏)
      const handleClapping = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.sound.resume();
        this.resetThinkingTimer();
        const cur = this.words[this.currentIndex];
        if (cur) {
          this.triggerInteractiveClapping(cur);
        }
      };

      // 3. Botón Siguiente (🔄)
      const handleNext = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.sound.resume();
        this.sound.playPop();
        this.resetThinkingTimer();

        // Ocultar overlay de palmadas si estuviera activo
        const clappingOverlay = document.getElementById('visual-clapping-hands');
        if (clappingOverlay) clappingOverlay.classList.remove('active');
        document.querySelectorAll('.jelly-stone-btn').forEach(btn => btn.classList.remove('stone-hint-glow'));

        this.currentIndex += 1;
        if (this.currentIndex >= this.words.length) {
          this.words = this.shuffle(WORDS_BY_AGE[this.selectedAge]);
          this.currentIndex = 0;
        }
        this.loadWord(true);
      };

      // Asignación directa y robusta a los botones
      if (this.btnSpeak) this.btnSpeak.onclick = handleSpeak;
      if (this.btnSyllables) this.btnSyllables.onclick = handleClapping;
      if (this.btnReset) this.btnReset.onclick = handleNext;

      // Delegación de eventos a nivel de documento como garantía absoluta contra cualquier bloqueo
      document.addEventListener('click', (e) => {
        const speakTarget = e.target.closest('#btn-nav-speak');
        if (speakTarget) {
          handleSpeak(e);
          return;
        }
        const syllablesTarget = e.target.closest('#btn-nav-syllables');
        if (syllablesTarget) {
          handleClapping(e);
          return;
        }
        const resetTarget = e.target.closest('#btn-nav-reset');
        if (resetTarget) {
          handleNext(e);
          return;
        }

        // Clic en la tarjeta ilustrada para reproducir audio y sonido
        const cardTarget = e.target.closest('#target-word-card');
        if (cardTarget && !e.target.closest('.syllable-bubble-chip')) {
          handleSpeak(e);
          return;
        }
      });

      // Botón jugar de nuevo en el Diploma
      this.btnPlayAgain?.addEventListener('click', () => {
        this.sound.playPop();
        this.victoryModal?.classList.remove('active');
        this.scoreProgress = 0;
        this.streakCount = 0;
        this.updateProgressUI();
        this.updateStreakUI();
        this.words = this.shuffle(WORDS_BY_AGE[this.selectedAge]);
        this.currentIndex = 0;
        this.loadWord(true);
      });

      // Atajos de teclado: 1, 2, 3, 4, Espacio (Escuchar), P (Palmadas), S (Siguiente)
      window.addEventListener('keydown', (e) => {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const targetBtn = document.querySelector(`.jelly-stone-btn[data-syllable-count="${e.key}"]`);
          if (targetBtn) targetBtn.click();
        }
        if (e.code === 'Space') {
          e.preventDefault();
          handleSpeak();
        }
        if (e.key.toLowerCase() === 'p') {
          handleClapping();
        }
        if (e.key.toLowerCase() === 's') {
          handleNext();
        }
      });
    }

    // Renderiza las sílabas en fichas interactivas táctiles
    renderSyllableChips(syllables, isInteractive = true) {
      if (!this.cardSyllableReveal) return;
      this.cardSyllableReveal.innerHTML = '';
      this.cardSyllableReveal.style.display = 'flex';

      syllables.forEach((syl, i) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'syllable-bubble-chip';
        chip.id = `chip-syl-${i}`;
        chip.innerText = syl;
        chip.title = `Toca para escuchar: "${syl}"`;

        if (isInteractive) {
          chip.addEventListener('click', (e) => {
            e.stopPropagation();
            this.sound.playPop();
            chip.classList.add('highlighted');
            setTimeout(() => chip.classList.remove('highlighted'), 380);
            this.sound.speakFriendly(syl, null, 1.4, 0.85);
          });
        }

        this.cardSyllableReveal.appendChild(chip);
      });
    }

    // Efecto de palmadas rítmicas con animación visual en pantalla y conteo paso a paso
    triggerInteractiveClapping(wordObj) {
      this.sound.playPop();
      this.renderSyllableChips(wordObj.syllables, true);
      this.showCloud(`👏 ¡Contemos ${wordObj.syllables.length} palmadas! 👏`);

      const clappingOverlay = document.getElementById('visual-clapping-hands');
      const counterBadge = document.getElementById('clapping-counter-badge');
      const currentSylBadge = document.getElementById('clapping-current-syllable');

      if (clappingOverlay) {
        clappingOverlay.classList.add('active');
        if (counterBadge) counterBadge.innerText = '1';
        if (currentSylBadge) currentSylBadge.innerText = `¡${wordObj.syllables[0]}!`;
      }

      // Iluminar suavemente la piedra de respuesta correcta como pista mágica pedagógica
      const hintStone = document.querySelector(`.jelly-stone-btn[data-syllable-count="${wordObj.count}"]`);
      if (hintStone) {
        hintStone.classList.add('stone-hint-glow');
        setTimeout(() => hintStone.classList.remove('stone-hint-glow'), wordObj.syllables.length * 700 + 1800);
      }

      wordObj.syllables.forEach((syl, idx) => {
        setTimeout(() => {
          this.sound.playClap();

          if (counterBadge) counterBadge.innerText = `${idx + 1}`;
          if (currentSylBadge) currentSylBadge.innerText = `¡${syl}!`;

          // Destacar la ficha correspondiente en la tarjeta
          const chip = document.getElementById(`chip-syl-${idx}`);
          if (chip) {
            chip.classList.add('highlighted');
            setTimeout(() => chip.classList.remove('highlighted'), 500);
          }

          // Salto rítmico del ratoncito Silabín
          this.characterEl.classList.add('character-hop');
          setTimeout(() => this.characterEl.classList.remove('character-hop'), 320);
        }, idx * 700);
      });

      const totalDuration = wordObj.syllables.length * 700;

      setTimeout(() => {
        if (clappingOverlay) {
          clappingOverlay.classList.remove('active');
        }
      }, totalDuration + 800);

      const countText = wordObj.count === 1 ? 'una sílaba' : `${wordObj.count} sílabas`;
      const phrase = `¡Demos palmadas! ${wordObj.syllables.join(', ')}. ¡Tiene ${countText}!`;
      setTimeout(() => {
        this.sound.speakFriendly(phrase);
      }, totalDuration + 500);
    }

    resetThinkingTimer() {
      clearTimeout(this.thinkingTimer);
      if (this.characterSvg) {
        this.characterSvg.classList.remove('mouse-thinking');
      }

      // Tiempo de espera generoso (15 segundos) para que el niño piense sin interrupciones
      this.thinkingTimer = setTimeout(() => {
        if (this.isLevelChanging) return;
        if (this.characterSvg) {
          this.characterSvg.classList.add('mouse-thinking');
          const cur = this.words[this.currentIndex];
          if (cur) {
            const thinkPhrase = this.pickRandom(DIALOGUES.thinking);
            this.showCloud(`Mmm... ¿cuántas sílabas tiene "${cur.word}"? 🤔`);
            this.sound.speakFriendly(thinkPhrase);
          }
        }
      }, 15000);
    }

    loadWord(shouldPronounce = true) {
      if (this.currentIndex >= this.words.length) {
        this.words = this.shuffle(WORDS_BY_AGE[this.selectedAge]);
        this.currentIndex = 0;
      }

      const cur = this.words[this.currentIndex];
      if (!cur) return;

      this.cardIllustration.innerText = cur.icon;
      this.cardTitle.innerText = cur.word;
      if (this.cardSyllableReveal) {
        this.cardSyllableReveal.innerHTML = '';
        this.cardSyllableReveal.style.display = 'none';
      }

      // Limpiar brillos de ayuda de las piedras
      document.querySelectorAll('.jelly-stone-btn').forEach(btn => btn.classList.remove('stone-hint-glow'));

      if (this.cardFactText) {
        this.cardFactText.innerText = `💡 ${cur.fact}`;
      }

      this.characterEl.classList.remove('character-dance');
      if (this.characterSvg) {
        this.characterSvg.classList.remove('mouse-thinking');
      }

      if (window.gsap) {
        window.gsap.fromTo('.target-word-frame-card', 
          { scale: 0.85, rotation: -3 },
          { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.8)" }
        );
      }

      if (shouldPronounce) {
        setTimeout(() => {
          if (!this.isLevelChanging) {
            if (cur.soundType) this.sound.playSpecialSfx(cur.soundType);
            this.sound.speakFriendly(`Palabra: ${cur.word}`);
          }
        }, 550);
      }
    }

    handleAnswer(countChosen, btnElement) {
      const cur = this.words[this.currentIndex];
      if (!cur) return;

      const isCorrect = countChosen === cur.count;

      if (isCorrect) {
        this.sound.playWin();

        // Mostrar fichas interactivas de sílabas
        this.renderSyllableChips(cur.syllables, true);

        this.streakCount += 1;
        this.updateStreakUI();

        this.characterEl.classList.add('character-hop');
        setTimeout(() => this.characterEl.classList.remove('character-hop'), 650);

        const cheerPhrase = this.pickRandom(DIALOGUES.correct);
        this.showCloud(`✨ ${cheerPhrase}`);

        if (typeof confetti === 'function') {
          confetti({
            particleCount: 65,
            spread: 75,
            origin: { y: 0.7 },
            colors: ['#FF9800', '#26A69A', '#AB47BC', '#4CAF50']
          });
        }

        this.scoreProgress += 1;
        this.updateProgressUI();

        const syllableWordText = cur.count === 1 ? 'sílaba' : 'sílabas';
        const fullPhrase = `${cheerPhrase}. ${cur.word} tiene ${cur.count} ${syllableWordText}: ${cur.syllables.join(', ')}`;

        let hasAdvanced = false;
        const advanceSafely = () => {
          if (hasAdvanced) return;
          hasAdvanced = true;

          // PAUSA CÓMODA Y TRANQUILA DE 2 SEGUNDOS DESPUÉS DE QUE TERMINE DE HABLAR COMPLETAMENTE
          setTimeout(() => {
            if (this.scoreProgress >= this.totalSegments) {
              this.triggerStageVictory();
            } else {
              this.currentIndex += 1;
              if (this.currentIndex >= this.words.length) {
                this.words = this.shuffle(WORDS_BY_AGE[this.selectedAge]);
                this.currentIndex = 0;
              }
              this.loadWord(true);
              this.resetThinkingTimer();
            }
          }, 2000);
        };

        // advanceSafely solo se dispara cuando el audio termina verdaderamente
        this.sound.speakFriendly(fullPhrase, advanceSafely);

        // Respaldo de seguridad holgado para nunca cortar la voz
        const maxWaitMs = Math.max(9000, Math.ceil(fullPhrase.length * 125) + 4000);
        setTimeout(advanceSafely, maxWaitMs);

      } else {
        this.sound.playFail();
        this.streakCount = 0;
        this.updateStreakUI();

        btnElement.classList.add('stone-wrong-shake');
        setTimeout(() => btnElement.classList.remove('stone-wrong-shake'), 450);

        const failPhrase = this.pickRandom(DIALOGUES.incorrect);
        this.showCloud(`¡Casi! Prueba otra vez 😊`);
        this.sound.speakFriendly(failPhrase);
      }
    }

    updateStreakUI() {
      if (this.streakBadgeEl) {
        this.streakBadgeEl.innerText = `⭐ ${this.streakCount}`;
        if (this.streakCount >= 3) {
          this.streakBadgeEl.classList.add('streak-active');
        } else {
          this.streakBadgeEl.classList.remove('streak-active');
        }
      }
    }

    showCloud(message) {
      if (!this.cloudFeedback) return;
      this.cloudFeedback.innerText = message;
      this.cloudFeedback.style.display = 'block';
      setTimeout(() => {
        this.cloudFeedback.style.display = 'none';
      }, 2400);
    }

    updateProgressUI() {
      this.progressSegments.forEach((seg, i) => {
        seg.classList.toggle('filled', i < this.scoreProgress);
      });
    }

    triggerStageVictory() {
      this.sound.playWin();
      this.characterEl.classList.add('character-dance');

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 180,
          spread: 100,
          origin: { y: 0.5 }
        });
      }

      this.sound.speakFriendly("¡Fantástico! ¡Has completado todo el camino y ganado tu diploma!", () => {
        setTimeout(() => {
          if (this.victoryModal) {
            this.victoryModal.classList.add('active');
          }
        }, 600);
      });
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    window.enchantedApp = new EnchantedGame();

    // Desbloqueo universal de audio con la primera interacción en pantalla
    const unlockAudio = () => {
      if (window.enchantedApp && window.enchantedApp.sound) {
        window.enchantedApp.sound.resume();
      }
      document.removeEventListener('pointerdown', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
    };
    document.addEventListener('pointerdown', unlockAudio, { once: true });
    document.addEventListener('keydown', unlockAudio, { once: true });
  });
})();
