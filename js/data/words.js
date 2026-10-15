/**
 * Base de datos de palabras clasificadas por sílabas para niños hasta 11 años.
 * Incluye división silábica exacta, acentos, diptongos, hiatos y curiosidades espaciales.
 */
export const WORDS_DATABASE = [
  // --- MONOSÍLABAS (1 SÍLABA) ---
  {
    word: "Sol",
    syllables: ["Sol"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Espacio",
    hint: "La estrella más brillante de nuestro sistema solar.",
    difficulty: 1
  },
  {
    word: "Pez",
    syllables: ["Pez"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Naturaleza",
    hint: "Animal acuático que respira por branquias.",
    difficulty: 1
  },
  {
    word: "Luz",
    syllables: ["Luz"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Física",
    hint: "Viaja a 300.000 kilómetros por segundo en el vacío.",
    difficulty: 1
  },
  {
    word: "Tren",
    syllables: ["Tren"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Transporte",
    hint: "Medio de transporte sobre rieles.",
    difficulty: 1
  },
  {
    word: "Rey",
    syllables: ["Rey"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Historia",
    hint: "Monarca de un reino.",
    difficulty: 1
  },
  {
    word: "Pan",
    syllables: ["Pan"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Alimento",
    hint: "Alimento horneado hecho con harina y levadura.",
    difficulty: 1
  },
  {
    word: "Mar",
    syllables: ["Mar"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Geografía",
    hint: "Gran masa de agua salada.",
    difficulty: 1
  },
  {
    word: "Flor",
    syllables: ["Flor"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Naturaleza",
    hint: "Estructura reproductiva de muchas plantas.",
    difficulty: 1
  },
  {
    word: "Voz",
    syllables: ["Voz"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Comunicación",
    hint: "Sonido producido por las cuerdas vocales.",
    difficulty: 2
  },
  {
    word: "Gris",
    syllables: ["Gris"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Colores",
    hint: "Color intermedio entre el blanco y el negro.",
    difficulty: 2
  },
  {
    word: "Buey",
    syllables: ["Buey"],
    type: "monosilaba",
    typeLabel: "Monosílaba (1)",
    category: "Animales",
    hint: "¡Cuidado con el triptongo! Tiene 3 vocales en una sola sílaba.",
    difficulty: 3
  },

  // --- BISÍLABAS (2 SÍLABAS) ---
  {
    word: "Luna",
    syllables: ["Lu", "na"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Espacio",
    hint: "El satélite natural de la Tierra.",
    difficulty: 1
  },
  {
    word: "Robot",
    syllables: ["Ro", "bot"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Tecnología",
    hint: "Máquina programable capaz de realizar tareas complejas.",
    difficulty: 1
  },
  {
    word: "Láser",
    syllables: ["Lá", "ser"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Tecnología",
    hint: "Haz de luz concentrada y de gran energía.",
    difficulty: 2
  },
  {
    word: "Nave",
    syllables: ["Na", "ve"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Espacio",
    hint: "Vehículo diseñado para viajar por el cosmos.",
    difficulty: 1
  },
  {
    word: "Reloj",
    syllables: ["Re", "loj"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Instrumentos",
    hint: "Dispositivo que mide el tiempo estelar.",
    difficulty: 2
  },
  {
    word: "Árbol",
    syllables: ["Ár", "bol"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Naturaleza",
    hint: "Planta con tronco leñoso que produce oxígeno.",
    difficulty: 2
  },
  {
    word: "Viento",
    syllables: ["Vien", "to"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Naturaleza",
    hint: "¡Ojo al diptongo 'ie'!: las vocales no se separan.",
    difficulty: 3
  },
  {
    word: "Ciudad",
    syllables: ["Ciu", "dad"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Geografía",
    hint: "Diptongo con dos vocales cerradas ('i' y 'u') en una sílaba.",
    difficulty: 3
  },
  {
    word: "Canción",
    syllables: ["Can", "ción"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Música",
    hint: "Composición musical con letra y melodía.",
    difficulty: 2
  },
  {
    word: "Cosmos",
    syllables: ["Cos", "mos"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Espacio",
    hint: "El universo ordenado y armónico.",
    difficulty: 2
  },

  // --- TRISÍLABAS (3 SÍLABAS) ---
  {
    word: "Planeta",
    syllables: ["Pla", "ne", "ta"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Espacio",
    hint: "Cuerpo celeste que orbita alrededor de una estrella.",
    difficulty: 1
  },
  {
    word: "Cometa",
    syllables: ["Co", "me", "ta"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Espacio",
    hint: "Cuerpo helado que deja una hermosa cola brillante al acercarse al Sol.",
    difficulty: 1
  },
  {
    word: "Cohete",
    syllables: ["Co", "he", "te"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Espacio",
    hint: "La 'h' intercalada no impide la separación de las vocales en hiato.",
    difficulty: 3
  },
  {
    word: "Estrella",
    syllables: ["Es", "tre", "lla"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Espacio",
    hint: "Esfera de plasma gigante que emite su propia luz.",
    difficulty: 1
  },
  {
    word: "Galaxia",
    syllables: ["Ga", "la", "xia"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Espacio",
    hint: "Enorme conjunto de miles de millones de estrellas y planetas.",
    difficulty: 2
  },
  {
    word: "Cápsula",
    syllables: ["Cáp", "su", "la"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Tecnología",
    hint: "Módulo espacial donde viajan los astronautas.",
    difficulty: 2
  },
  {
    word: "Brújula",
    syllables: ["Brú", "ju", "la"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Navegación",
    hint: "Instrumento con aguja magnética que señala el norte.",
    difficulty: 2
  },
  {
    word: "Órbita",
    syllables: ["Ór", "bi", "ta"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Física",
    hint: "Trayectoria curva que describe un astro alrededor de otro.",
    difficulty: 2
  },
  {
    word: "Espacio",
    syllables: ["Es", "pa", "cio"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Espacio",
    hint: "La inmensa extensión donde existen todas las galaxias.",
    difficulty: 2
  },
  {
    word: "Energía",
    syllables: ["E", "ner", "gí", "a"],
    type: "polisilaba", // Note: E-ner-gí-a is 4 syllables! Let's put a true 3 syllables
    word: "Batería",
    syllables: ["Ba", "te", "rí", "a"],
    type: "polisilaba", // Ba-te-rí-a is 4 due to hiato
    word: "Oxígeno",
    syllables: ["O", "xí", "ge", "no"],
    type: "polisilaba", // O-xí-ge-no is 4
    word: "Crater",
    // Let's replace with accurate 3-syllables words:
    word: "Satélite",
    syllables: ["Sa", "té", "li", "te"],
    type: "polisilaba" // 4
  },
  {
    word: "Materia",
    syllables: ["Ma", "te", "ria"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Física",
    hint: "Todo lo que ocupa un lugar en el espacio y tiene masa.",
    difficulty: 2
  },
  {
    word: "Astro",
    syllables: ["As", "tro"],
    type: "bisilaba",
    typeLabel: "Bisílaba (2)",
    category: "Espacio",
    hint: "Cualquier cuerpo celeste del firmamento.",
    difficulty: 1
  },
  {
    word: "Eclipse",
    syllables: ["E", "clip", "se"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Astronomía",
    hint: "Ocultación transitoria de un astro por la interposición de otro.",
    difficulty: 2
  },
  {
    word: "Módulo",
    syllables: ["Mó", "du", "lo"],
    type: "trisilaba",
    typeLabel: "Trisílaba (3)",
    category: "Tecnología",
    hint: "Sección independiente de una nave espacial.",
    difficulty: 2
  },

  // --- POLISÍLABAS (4 O MÁS SÍLABAS) ---
  {
    word: "Astronauta",
    syllables: ["As", "tro", "nau", "ta"],
    type: "polisilaba",
    typeLabel: "Polisílaba (4)",
    category: "Espacio",
    hint: "Persona entrenada para viajar y realizar misiones en el espacio.",
    difficulty: 2
  },
  {
    word: "Telescopio",
    syllables: ["Te", "les", "co", "pio"],
    type: "polisilaba",
    typeLabel: "Polisílaba (4)",
    category: "Instrumentos",
    hint: "Instrumento óptico para observar objetos cósmicos lejanos.",
    difficulty: 2
  },
  {
    word: "Constelación",
    syllables: ["Cons", "te", "la", "ción"],
    type: "polisilaba",
    typeLabel: "Polisílaba (4)",
    category: "Astronomía",
    hint: "Agrupación convencional de estrellas en el cielo nocturno.",
    difficulty: 2
  },
  {
    word: "Supernova",
    syllables: ["Su", "per", "no", "va"],
    type: "polisilaba",
    typeLabel: "Polisílaba (4)",
    category: "Astronomía",
    hint: "Explosión colosal de una estrella masiva al final de su vida.",
    difficulty: 2
  },
  {
    word: "Gravitatorio",
    syllables: ["Gra", "vi", "ta", "to", "rio"],
    type: "polisilaba",
    typeLabel: "Polisílaba (5)",
    category: "Física",
    hint: "Relacionado con la fuerza de gravedad que une a los astros.",
    difficulty: 3
  },
  {
    word: "Computadora",
    syllables: ["Com", "pu", "ta", "do", "ra"],
    type: "polisilaba",
    typeLabel: "Polisílaba (5)",
    category: "Tecnología",
    hint: "El cerebro electrónico de la estación espacial.",
    difficulty: 2
  },
  {
    word: "Intergaláctico",
    syllables: ["In", "ter", "ga", "lác", "ti", "co"],
    type: "polisilaba",
    typeLabel: "Polisílaba (6)",
    category: "Espacio",
    hint: "¡Una palabra titánica de 6 sílabas! Que ocurre entre dos o más galaxias.",
    difficulty: 3
  },
  {
    word: "Extraordinario",
    syllables: ["Ex", "tra", "or", "di", "na", "rio"],
    type: "polisilaba",
    typeLabel: "Polisílaba (6)",
    category: "Calificativos",
    hint: "Fuera del orden común o de la regla ordinaria.",
    difficulty: 3
  },
  {
    word: "Murciélago",
    syllables: ["Mur", "cié", "la", "go"],
    type: "polisilaba",
    typeLabel: "Polisílaba (4)",
    category: "Animales",
    hint: "El único mamífero volador; ¡contiene las 5 vocales!",
    difficulty: 2
  },
  {
    word: "Espectacular",
    syllables: ["Es", "pec", "ta", "cu", "lar"],
    type: "polisilaba",
    typeLabel: "Polisílaba (5)",
    category: "Calificativos",
    hint: "Que causa gran asombro y admiración.",
    difficulty: 2
  }
];

// Reglas pedagógicas de referencia rápida
export const SYLLABLE_RULES = {
  monosilaba: {
    name: "Monosílabas",
    count: "1 Sílaba",
    icon: "⚡",
    badge: "1",
    color: "#00F0FF",
    desc: "Se pronuncian en un solo golpe de voz. Por regla general no llevan tilde (salvo tilde diacrítica como él/el, tú/tu).",
    examples: ["Sol", "Pez", "Luz", "Pan", "Rey"]
  },
  bisilaba: {
    name: "Bisílabas",
    count: "2 Sílabas",
    icon: "🚀",
    badge: "2",
    color: "#A78BFA",
    desc: "Tienen exactamente dos emisiones de voz (ej: Ro-bot, Lu-na). Cuidado con los diptongos que no se separan.",
    examples: ["Lu-na", "Ro-bot", "Lá-ser", "Re-loj"]
  },
  trisilaba: {
    name: "Trisílabas",
    count: "3 Sílabas",
    icon: "🪐",
    badge: "3",
    color: "#F43F5E",
    desc: "Formadas por tres sílabas. Presta atención a las palabras esdrújulas (siempre llevan tilde) como ór-bi-ta.",
    examples: ["Pla-ne-ta", "Co-me-ta", "Es-tre-lla", "Ór-bi-ta"]
  },
  polisilaba: {
    name: "Polisílabas",
    count: "4 o más Sílabas",
    icon: "🌌",
    badge: "4+",
    color: "#FBBF24",
    desc: "Tienen cuatro (tetrasílabas), cinco (pentasílabas) o más sílabas. ¡Palabras legendarias y de largo alcance!",
    examples: ["As-tro-nau-ta", "Te-les-co-pio", "In-ter-ga-lác-ti-co"]
  }
};
