/**
 * SÍLABAS ENCANTADAS - MOTOR INTERACTIVO ROBUSTO
 * - Botones inferiores siempre activos con respuesta instantánea
 * - Animación visual de palmadas en pantalla
 * - Efectos de sonido y voz desbloqueados
 */

(function () {
  'use strict';

  // Banco de palabras colosal con más de 300 palabras educativas (más de 100 por nivel de edad)
  const WORDS_BY_AGE = {
    // -----------------------------------------------------------------------
    // NIVEL 1: 5 - 6 AÑOS (Más de 100 Palabras iniciales: Monosílabas y Bisílabas)
    // -----------------------------------------------------------------------
    "5-6": [
      // Monosílabas (1 sílaba)
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
      { word: "Voz", icon: "🗣️", syllables: ["Voz"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bell", fact: "El sonido mágico con el que hablamos y cantamos" },
      { word: "Gol", icon: "⚽", syllables: ["Gol"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bounce", fact: "La gran anotación que celebramos en el fútbol" },
      { word: "Gris", icon: "🐘", syllables: ["Gris"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "step", fact: "El bonito color de los elefantes y los delfines" },
      { word: "Cruz", icon: "✝️", syllables: ["Cruz"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bell", fact: "Figura geométrica formada por dos líneas cruzadas" },
      { word: "Luz", icon: "💡", syllables: ["Luz"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "sparkle", fact: "Alumbra nuestro cuarto para no tener miedo de noche" },
      { word: "Gas", icon: "🎈", syllables: ["Gas"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "magic", fact: "Hace que los globos de fiesta floten hasta el techo" },
      { word: "Cal", icon: "🏛️", syllables: ["Cal"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "step", fact: "Piedra blanca que se usa para pintar casitas" },
      { word: "Miel", icon: "🍯", syllables: ["Miel"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "crunch", fact: "Dulce tesoro dorado elaborado por las abejitas" },
      { word: "Red", icon: "🥅", syllables: ["Red"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bounce", fact: "Atrapa balones en la portería y peces en el mar" },
      { word: "Sur", icon: "🧭", syllables: ["Sur"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "sparkle", fact: "Punto cardinal opuesto al norte en el mapa" },
      { word: "Sed", icon: "🥤", syllables: ["Sed"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "water", fact: "La sensación de querer beber agua fresquita" },
      { word: "Paz", icon: "🕊️", syllables: ["Paz"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "magic", fact: "Amor, tranquilidad y amistad entre todos los niños" },
      { word: "Té", icon: "🍵", syllables: ["Té"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bell", fact: "Rica bebida caliente hecha con hojitas aromáticas" },
      { word: "Buey", icon: "🐂", syllables: ["Buey"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "roar", fact: "Fuerte animal de granja que ayuda en el campo" },
      { word: "Mes", icon: "📅", syllables: ["Mes"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "tictac", fact: "Treinta días llenos de nuevas aventuras" },
      { word: "Flan", icon: "🍮", syllables: ["Flan"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "crunch", fact: "Postre suave, dulce y con caramelo dorado" },
      { word: "Clan", icon: "🏕️", syllables: ["Clan"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "step", fact: "Grupo muy unido como una gran familia exploradora" },
      { word: "Mil", icon: "🔢", syllables: ["Mil"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bell", fact: "Un número grande con tres ceros alegres" },
      { word: "Plus", icon: "➕", syllables: ["Plus"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "sparkle", fact: "Un regalo o sorpresa adicional que suma alegría" },
      { word: "Dan", icon: "🥋", syllables: ["Dan"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bounce", fact: "Grado de honor y disciplina en las artes marciales" },
      { word: "Can", icon: "🐕", syllables: ["Can"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "dog", fact: "Forma cariñosa y poética de llamar al perrito fiel" },
      { word: "Hoy", icon: "⏰", syllables: ["Hoy"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "tictac", fact: "El día presente para jugar y disfrutar al máximo" },
      { word: "Ley", icon: "📜", syllables: ["Ley"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bell", fact: "Norma justa para convivir con respeto y amor" },
      { word: "Muy", icon: "🌟", syllables: ["Muy"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "sparkle", fact: "Palabra que usamos cuando algo es súper especial" },
      { word: "Voy", icon: "🚶", syllables: ["Voy"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "step", fact: "Avanzar con paso firme hacia una nueva meta" },
      { word: "Doy", icon: "🎁", syllables: ["Doy"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "magic", fact: "Compartir de corazón juguetes y sonrisas" },
      { word: "Faz", icon: "😊", syllables: ["Faz"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "sparkle", fact: "El rostro alegre y sonriente de una buena persona" },
      { word: "Rol", icon: "🎭", syllables: ["Rol"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "bell", fact: "El personaje genial que interpretamos en un juego" },
      { word: "Tos", icon: "🧣", syllables: ["Tos"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "crunch", fact: "Sonido protector con el que el cuerpo limpia el pecho" },
      { word: "Van", icon: "🚐", syllables: ["Van"], type: "monosilaba", label: "Monosílaba (1)", count: 1, soundType: "train", fact: "Vehículo espacioso para viajar toda la familia junta" },

      // Bisílabas (2 sílabas)
      { word: "Gato", icon: "🐱", syllables: ["Ga", "to"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "cat", fact: "Dice miau y ronronea cuando está feliz" },
      { word: "Casa", icon: "🏠", syllables: ["Ca", "sa"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "El dulce hogar donde vive la familia" },
      { word: "Luna", icon: "🌙", syllables: ["Lu", "na"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Brilla suave y redondita en la noche" },
      { word: "Taza", icon: "☕", syllables: ["Ta", "za"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Sirve para tomar leche o chocolate calientito" },
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
      { word: "Bebé", icon: "👶", syllables: ["Be", "bé"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Aprende sus primeras palabras con alegría" },
      { word: "Lobo", icon: "🐺", syllables: ["Lo", "bo"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Aúlla a la Luna llena en las noches del bosque" },
      { word: "Zorro", icon: "🦊", syllables: ["Zo", "rro"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Animalito astuto y juguetón de cola esponjosa" },
      { word: "Búho", icon: "🦉", syllables: ["Bú", "ho"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Ave sabia y nocturna de grandes ojos redondos" },
      { word: "Foca", icon: "🦭", syllables: ["Fo", "ca"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Nada feliz y aplaude con sus aletas en el mar" },
      { word: "Toro", icon: "🐂", syllables: ["To", "ro"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Tiene cuernos fuertes y corre muy rápido" },
      { word: "Rana", icon: "🐸", syllables: ["Ra", "na"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Salta de nenúfar en nenúfar por la laguna" },
      { word: "Rosa", icon: "🌹", syllables: ["Ro", "sa"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Flor hermosa con pétalos aterciopelados" },
      { word: "Nube", icon: "☁️", syllables: ["Nu", "be"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Algodón gigante flotando por el cielo azul" },
      { word: "Vela", icon: "🕯️", syllables: ["Ve", "la"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Brilla en las tartas de cumpleaños para pedir deseos" },
      { word: "Silla", icon: "🪑", syllables: ["Si", "lla"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Mueble de cuatro patas para sentarse a almorzar" },
      { word: "Piña", icon: "🍍", syllables: ["Pi", "ña"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Fruta tropical con piel rugosa y penacho verde" },
      { word: "Uva", icon: "🍇", syllables: ["U", "va"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Bolitas dulces moradas y verdes en racimos" },
      { word: "Bota", icon: "🥾", syllables: ["Bo", "ta"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Calzado protector para pisar charcos de agua" },
      { word: "Gorro", icon: "🧢", syllables: ["Go", "rro"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bounce", fact: "Protege nuestra cabeza del frío y del sol" },
      { word: "Joya", icon: "💎", syllables: ["Jo", "ya"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Piedra brillante y resplandeciente como diamante" },
      { word: "Caja", icon: "📦", syllables: ["Ca", "ja"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Guarda juguetes, muñecos y regalos sorpresa" },
      { word: "Rueda", icon: "🛞", syllables: ["Rue", "da"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bounce", fact: "Gira y gira para que los autos y bicicletas avancen" },
      { word: "Pipa", icon: "🫧", syllables: ["Pi", "pa"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Hace pompas de jabón brillantes que vuelan al aire" },
      { word: "Kiwi", icon: "🥝", syllables: ["Ki", "wi"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Fruta verde por dentro con motitas negras sabrosas" },
      { word: "Faro", icon: "🗼", syllables: ["Fa", "ro"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Torre alta con luz que guía barcos en la noche" },
      { word: "Maíz", icon: "🌽", syllables: ["Ma", "íz"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Mazorca dorada con granos ricos para hacer palomitas" },
      { word: "Pera", icon: "🍐", syllables: ["Pe", "ra"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Fruta jugosa y dulce con forma acampanada" },
      { word: "Mango", icon: "🥭", syllables: ["Man", "go"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Fruta tropical con pulpa dorada y dulce sabor" },
      { word: "Fresa", icon: "🍓", syllables: ["Fre", "sa"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Fruta roja con pequeñas semillas por fuera" },
      { word: "Coco", icon: "🥥", syllables: ["Co", "co"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Fruto de palmera con agua refrescante por dentro" },
      { word: "Lima", icon: "🍋", syllables: ["Li", "ma"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Cítrico aromático y fresco ideal para refrescos" },
      { word: "Nido", icon: "🪺", syllables: ["Ni", "do"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Cunita de ramas donde las aves cuidan sus pichones" },
      { word: "Cuna", icon: "👶", syllables: ["Cu", "na"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Camita suave y segura donde duerme el bebé" },
      { word: "Bola", icon: "🎾", syllables: ["Bo", "la"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bounce", fact: "Esfera de colores que rebota alegre por el suelo" },
      { word: "Cubo", icon: "🧊", syllables: ["Cu", "bo"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Bloque geométrico de seis caras iguales" },
      { word: "Vaso", icon: "🥛", syllables: ["Va", "so"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Recipiente para tomar agua fresca y jugos sabrosos" },
      { word: "Sopa", icon: "🥣", syllables: ["So", "pa"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Caldo tibio y nutritivo preparado con verduras" },
      { word: "Jugo", icon: "🧃", syllables: ["Ju", "go"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Bebida dulce extraída de ricas frutas maduras" },
      { word: "Leche", icon: "🥛", syllables: ["Le", "che"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Bebida blanca rica en calcio para crecer fuertes" },
      { word: "Queso", icon: "🧀", syllables: ["Que", "so"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Delicioso derivado lácteo favorito de los ratoncitos" },
      { word: "Huevo", icon: "🥚", syllables: ["Hue", "vo"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "crunch", fact: "Alimento nutritivo de cáscara lisa y yema amarilla" },
      { word: "Pollo", icon: "🐥", syllables: ["Po", "llo"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Pajarito amarillito y suave de la granja" },
      { word: "Burro", icon: "🫏", syllables: ["Bu", "rro"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Amigo noble de orejas largas muy trabajador" },
      { word: "Cerdo", icon: "🐷", syllables: ["Cer", "do"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bounce", fact: "Animalito rosado y simpático de cola en espiral" },
      { word: "Cabra", icon: "🐐", syllables: ["Ca", "bra"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Trepadora ágil de montañas con cuernos curvados" },
      { word: "Pulpo", icon: "🐙", syllables: ["Pul", "po"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Criatura marina con ocho brazos y tres corazones" },
      { word: "Cisne", icon: "🦢", syllables: ["Cis", "ne"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Ave hermosa que nada grácil sobre lagos tranquilos" },
      { word: "Lápiz", icon: "✏️", syllables: ["Lá", "piz"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Herramienta con punta de grafito para hacer bocetos" },
      { word: "Coche", icon: "🚗", syllables: ["Co", "che"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "train", fact: "Medio de transporte con volante para ir de paseo" },
      { word: "Moto", icon: "🏍️", syllables: ["Mo", "to"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "train", fact: "Vehículo veloz de dos ruedas con motor potente" },
      { word: "Dedo", icon: "☝️", syllables: ["De", "do"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Parte de la mano que usamos para pulsar y tocar" },
      { word: "Boca", icon: "👄", syllables: ["Bo", "ca"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Con ella reímos a carcajadas y decimos palabras" },
      { word: "Mano", icon: "🖐️", syllables: ["Ma", "no"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Con cinco dedos listos para aplaudir y dibujar" },
      { word: "Ojo", icon: "👁️", syllables: ["O", "jo"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Órgano de la vista para contemplar todos los colores" },
      { word: "Pelo", icon: "💇", syllables: ["Pe", "lo"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Hebras suaves que coronan y protegen la cabeza" },
      { word: "Cara", icon: "😊", syllables: ["Ca", "ra"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Nuestra expresión donde brillan ojos y sonrisa" },
      { word: "Brazo", icon: "💪", syllables: ["Bra", "zo"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Extremidad fuerte para abrazar a quienes queremos" },
      { word: "Bici", icon: "🚲", syllables: ["Bi", "ci"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Vehículo divertido que anda con el impulso de pedales" },
      { word: "Foto", icon: "📸", syllables: ["Fo", "to"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Imagen capturada que guarda un recuerdo feliz" },
      { word: "Rata", icon: "🐁", syllables: ["Ra", "ta"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Prima curiosa y veloz de Silabín el ratón" }
    ],

    // -----------------------------------------------------------------------
    // NIVEL 2: 7 - 8 AÑOS (Más de 105 Palabras intermedias: 2, 3 y 4 sílabas)
    // -----------------------------------------------------------------------
    "7-8": [
      // Bisílabas intermedias (2 sílabas)
      { word: "Reloj", icon: "⏰", syllables: ["Re", "loj"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "tictac", fact: "Marca el paso del tiempo con su tic-tac" },
      { word: "Perro", icon: "🐶", syllables: ["Pe", "rro"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "dog", fact: "El mejor amigo fiel que mueve la cola" },
      { word: "Delfín", icon: "🐬", syllables: ["Del", "fín"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Mamífero marino muy inteligente y alegre" },
      { word: "Dragón", icon: "🐉", syllables: ["Dra", "gón"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Criatura de leyenda que vuela por los cielos" },
      { word: "Pincel", icon: "🖌️", syllables: ["Pin", "cel"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Herramienta mágica para pintar obras de arte" },
      { word: "Barco", icon: "⛵", syllables: ["Bar", "co"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Navega con sus velas sobre el ancho mar" },
      { word: "Tigre", icon: "🐯", syllables: ["Ti", "gre"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Gran felino de pelaje rayado y garras afiladas" },
      { word: "Puma", icon: "🐆", syllables: ["Pu", "ma"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Gran saltador de las cordilleras y montañas" },
      { word: "Cebra", icon: "🦓", syllables: ["Ce", "bra"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Animal africano con rayas blancas y negras únicas" },
      { word: "Loro", icon: "🦜", syllables: ["Lo", "ro"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Ave colorida y simpática que puede repetir palabras" },
      { word: "Hongo", icon: "🍄", syllables: ["Hon", "go"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Crece con sombrerito en la tierra húmeda del bosque" },
      { word: "Puente", icon: "🌉", syllables: ["Puen", "te"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Conecta dos ciudades o cruza un caudaloso río" },
      { word: "Selva", icon: "🌴", syllables: ["Sel", "va"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Bosque tropical denso y lleno de vida salvaje" },
      { word: "Globo", icon: "🎈", syllables: ["Glo", "bo"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bounce", fact: "Flota en el aire y alegra todas las fiestas" },
      { word: "Llave", icon: "🔑", syllables: ["Lla", "ve"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Abre puertas seguras y cofres con secretos" },
      { word: "Playa", icon: "🏖️", syllables: ["Pla", "ya"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Orilla de arena dorada junto a las olas del mar" },
      { word: "Campo", icon: "🌾", syllables: ["Cam", "po"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Terreno fértil y verde con sembríos y aire puro" },
      { word: "Bosque", icon: "🌲", syllables: ["Bos", "que"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Extensión de altos árboles donde cantan pájaros" },
      { word: "Circo", icon: "🎪", syllables: ["Cir", "co"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bounce", fact: "Gran carpa de acróbatas, risas y malabares" },
      { word: "Flauta", icon: "🪈", syllables: ["Flau", "ta"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "strum", fact: "Instrumento musical de viento con notas cristalinas" },
      { word: "Tambor", icon: "🥁", syllables: ["Tam", "bor"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bounce", fact: "Se toca marcando el ritmo enérgico de las marchas" },
      { word: "Flecha", icon: "🏹", syllables: ["Fle", "cha"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "laser", fact: "Vuela veloz por el aire impulsada por el arco" },
      { word: "Casco", icon: "⛑️", syllables: ["Cas", "co"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Protección resistente para la cabeza de ciclistas" },
      { word: "Traje", icon: "👔", syllables: ["Tra", "je"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "bell", fact: "Vestimenta elegante para fiestas especiales" },
      { word: "Cofre", icon: "🪙", syllables: ["Co", "fre"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "sparkle", fact: "Caja de madera con herrajes para guardar tesoros" },

      // Trisílabas (3 sílabas)
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
      { word: "Paraguas", icon: "☂️", syllables: ["Pa", "ra", "guas"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Nos protege de mojarnos en los días de lluvia" },
      { word: "Cuchara", icon: "🥄", syllables: ["Cu", "cha", "ra"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bell", fact: "Cubierto hondo para saborear rica sopa" },
      { word: "Caballo", icon: "🐴", syllables: ["Ca", "ba", "llo"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Galopa con fuerza por praderas abiertas" },
      { word: "Conejo", icon: "🐰", syllables: ["Co", "ne", "jo"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bounce", fact: "Salta con orejas largas y come zanahorias" },
      { word: "Jirafa", icon: "🦒", syllables: ["Ji", "ra", "fa"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "El mamífero de cuello más largo del mundo" },
      { word: "Pájaro", icon: "🐦", syllables: ["Pá", "ja", "ro"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Vuela y canta al amanecer en las ramas" },
      { word: "Gallina", icon: "🐔", syllables: ["Ga", "lli", "na"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bell", fact: "Pone huevos nutritivos en el gallinero" },
      { word: "Tiburón", icon: "🦈", syllables: ["Ti", "bu", "rón"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Navega con aleta dorsal por mares profundos" },
      { word: "Pandero", icon: "🪘", syllables: ["Pan", "de", "ro"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "strum", fact: "Instrumento musical con sonajas que alegran fiestas" },
      { word: "Trompeta", icon: "🎺", syllables: ["Trom", "pe", "ta"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "strum", fact: "Instrumento de viento con brillante sonido metálico" },
      { word: "Soldado", icon: "💂", syllables: ["Sol", "da", "do"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Marcha con honor, uniforme y disciplina" },
      { word: "Corona", icon: "👑", syllables: ["Co", "ro", "na"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "sparkle", fact: "Adorno real reluciente con gemas finas" },
      { word: "Cometa", icon: "🪁", syllables: ["Co", "me", "ta"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Vuela con el viento atada a un hilo largo" },
      { word: "Canguro", icon: "🦘", syllables: ["Can", "gu", "ro"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bounce", fact: "Lleva a su cría en una bolsa mientras da grandes saltos" },
      { word: "Medusa", icon: "🪼", syllables: ["Me", "du", "sa"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Criatura marina translúcida que flota suavemente" },
      { word: "Sirena", icon: "🧜‍♀️", syllables: ["Si", "re", "na"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Ser fantástico de los cuentos submarinos y leyendas" },
      { word: "Espada", icon: "⚔️", syllables: ["Es", "pa", "da"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bell", fact: "Arma histórica de caballeros medievales valientes" },
      { word: "Escudo", icon: "🛡️", syllables: ["Es", "cu", "do"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bell", fact: "Protección resistente para defender el reino" },
      { word: "Botella", icon: "🍾", syllables: ["Bo", "te", "lla"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Envase para guardar agua fresca o jugos de fruta" },
      { word: "Tijeras", icon: "✂️", syllables: ["Ti", "je", "ras"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Herramienta con filo para recortar papel y cartón" },
      { word: "Lápices", icon: "✏️", syllables: ["Lá", "pi", "ces"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Pintan mundos imaginarios de mil colores vivos" },
      { word: "Cuaderno", icon: "📓", syllables: ["Cua", "der", "no"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Páginas blancas para escribir y aprender lecciones" },
      { word: "Banana", icon: "🍌", syllables: ["Ba", "na", "na"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Fruta dulce y amarilla rica en potasio saludable" },
      { word: "Naranja", icon: "🍊", syllables: ["Na", "ran", "ja"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Fruto redondo y jugoso con mucha vitamina C" },
      { word: "Tomate", icon: "🍅", syllables: ["To", "ma", "te"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Fruta roja y sabrosa indispensable en ensaladas" },
      { word: "Pepino", icon: "🥒", syllables: ["Pe", "pi", "no"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Hortaliza fresca y crujiente de piel verde" },
      { word: "Cebolla", icon: "🧅", syllables: ["Ce", "bo", "lla"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Bulbo con capas que da gran aroma a los guisados" },
      { word: "Cereza", icon: "🍒", syllables: ["Ce", "re", "za"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Pequeña fruta roja y dulce que cuelga en pares" },
      { word: "Canario", icon: "🐤", syllables: ["Ca", "na", "rio"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bell", fact: "Pajarito cantor de plumas amarillas como el sol" },
      { word: "Ballena", icon: "🐋", syllables: ["Ba", "lle", "na"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Gigante amable de los mares que canta melodías" },
      { word: "Pingüino", icon: "🐧", syllables: ["Pin", "güi", "no"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Excelente nadador del frío polar vestido de frac" },
      { word: "Pantera", icon: "🐆", syllables: ["Pan", "te", "ra"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "roar", fact: "Gran felino ágil y sigiloso en la espesura" },
      { word: "Caracol", icon: "🐌", syllables: ["Ca", "ra", "col"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Camina sin prisa llevando su concha en espiral" },
      { word: "Gusano", icon: "🐛", syllables: ["Gu", "sa", "no"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Ayuda a airear la tierra fértil de las plantitas" },
      { word: "Cangrejo", icon: "🦀", syllables: ["Can", "gre", "jo"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Camina de costado en la arena con sus fuertes pinzas" },
      { word: "Pirata", icon: "🏴‍☠️", syllables: ["Pi", "ra", "ta"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Navegante de leyendas en busca de islas con tesoros" },
      { word: "Princesa", icon: "👸", syllables: ["Prin", "ce", "sa"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "sparkle", fact: "Valiente heroína de castillos y cuentos de hadas" },
      { word: "Mágico", icon: "🪄", syllables: ["Má", "gi", "co"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Poder asombroso que transforma lo común en ilusión" },
      { word: "Pintura", icon: "🎨", syllables: ["Pin", "tu", "ra"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "sparkle", fact: "Colores mágicos plasmados con amor en el lienzo" },
      { word: "Laguna", icon: "🏞️", syllables: ["La", "gu", "na"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Cuerpo de agua tranquila rodeado de totoras verdes" },
      { word: "Cascada", icon: "🌊", syllables: ["Cas", "ca", "da"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Caída espectacular de agua entre rocas gigantes" },
      { word: "Sendero", icon: "🥾", syllables: ["Sen", "de", "ro"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Camino de tierra que nos guía por la montaña" },
      { word: "Tormenta", icon: "⛈️", syllables: ["Tor", "men", "ta"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "laser", fact: "Fuerza del clima con nubes oscuras, lluvia y truenos" },
      { word: "Granizo", icon: "🧊", syllables: ["Gra", "ni", "zo"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Gotas de lluvia que caen congeladas como bolitas" },
      { word: "Verano", icon: "☀️", syllables: ["Ve", "ra", "no"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "sparkle", fact: "Estación de sol radiante perfecta para ir a nadar" },
      { word: "Invierno", icon: "☃️", syllables: ["In", "vier", "no"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "sparkle", fact: "Época fresca para abrigarse y tomar chocolate caliente" },
      { word: "Oveja", icon: "🐑", syllables: ["O", "ve", "ja"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Animalito dulce que nos abriga con su suave lana" },
      { word: "Canasta", icon: "🧺", syllables: ["Ca", "nas", "ta"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "crunch", fact: "Cesta tejida para llevar frutas y bocadillos de picnic" },
      { word: "Botiquín", icon: "🩹", syllables: ["Bo", "ti", "quín"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bell", fact: "Cajita de auxilio con curitas y desinfectante seguro" },

      // Polisílabas (4 o más sílabas)
      { word: "Arcoíris", icon: "🌈", syllables: ["Ar", "co", "í", "ris"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "magic", fact: "Siete hermosos colores tras la lluvia" },
      { word: "Elefante", icon: "🐘", syllables: ["E", "le", "fan", "te"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "roar", fact: "El animal terrestre más grande del mundo" },
      { word: "Calabaza", icon: "🎃", syllables: ["Ca", "la", "ba", "za"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "crunch", fact: "Fruto grande y redondo de color anaranjado" },
      { word: "Mariposa", icon: "🦋", syllables: ["Ma", "ri", "po", "sa"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "sparkle", fact: "Vuela de flor en flor con alas multicolores" },
      { word: "Bolígrafo", icon: "🖊️", syllables: ["Bo", "lí", "gra", "fo"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "step", fact: "Escribe con tinta indeleble y suave en el papel" },
      { word: "Telefonía", icon: "📱", syllables: ["Te", "le", "fo", "ní", "a"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "Nos comunica al instante con amigos lejanos" },
      { word: "Chocolatina", icon: "🍫", syllables: ["Cho", "co", "la", "ti", "na"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "crunch", fact: "Golosina deliciosa hecha con manteca de cacao" },
      { word: "Marinero", icon: "🧑‍✈️", syllables: ["Ma", "ri", "ne", "ro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "water", fact: "Experto en gobernar navíos y cruzar océanos" },
      { word: "Cenicienta", icon: "👸", syllables: ["Ce", "ni", "cien", "ta"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "magic", fact: "Protagonista del cuento mágico con zapatito de cristal" },
      { word: "Heladería", icon: "🍦", syllables: ["He", "la", "de", "rí", "a"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "crunch", fact: "Tienda dulce donde sirven conos de muchos sabores" },
      { word: "Carpintero", icon: "🪚", syllables: ["Car", "pin", "te", "ro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "step", fact: "Artesano que construye mesas y muebles con madera" },
      { word: "Panadero", icon: "🥖", syllables: ["Pa", "na", "de", "ro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "crunch", fact: "Hornea panes dorados y calientitos cada mañana" },
      { word: "Jardinero", icon: "🌻", syllables: ["Jar", "di", "ne", "ro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "magic", fact: "Cuida con cariño los rosales y árboles floridos" },
      { word: "Cocinero", icon: "🧑‍🍳", syllables: ["Co", "ci", "ne", "ro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "bell", fact: "Crea platillos sabrosos con recetas e ingredientes frescos" },
      { word: "Bombero", icon: "🚒", syllables: ["Bom", "be", "ro"], type: "polisilaba", label: "Polisílaba (3)", count: 3, soundType: "bell", fact: "Héroe con manguera que apaga fuegos y rescata animales" },
      { word: "Futbolista", icon: "⚽", syllables: ["Fut", "bo", "lis", "ta"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "bounce", fact: "Atleta que corre en la cancha dominando el balón" },
      { word: "Cartuchera", icon: "👝", syllables: ["Car", "tu", "che", "ra"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "sparkle", fact: "Estuche escolar para guardar lápices y borradores" },
      { word: "Sacapuntas", icon: "✏️", syllables: ["Sa", "ca", "pun", "tas"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "step", fact: "Afila la mina de los lápices para trazar fino" },
      { word: "Peluquero", icon: "✂️", syllables: ["Pe", "lu", "que", "ro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "step", fact: "Estilista profesional que corta y peina el cabello" },
      { word: "Carretera", icon: "🛣️", syllables: ["Ca", "rre", "te", "ra"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "train", fact: "Vía de asfalto que une ciudades a lo largo del país" }
    ],

    // -----------------------------------------------------------------------
    // NIVEL 3: 9 - 10 AÑOS (Más de 102 Palabras avanzadas: Ciencia, Naturaleza y Polisílabas)
    // -----------------------------------------------------------------------
    "9-10": [
      // Palabras cortas con complejidad científica (2 y 3 sílabas)
      { word: "Volcán", icon: "🌋", syllables: ["Vol", "cán"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Montaña que puede expulsar lava, cenizas y gases" },
      { word: "Cráter", icon: "🌕", syllables: ["Crá", "ter"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "roar", fact: "Depresión circular causada por impacto de meteoritos" },
      { word: "Fósil", icon: "🦴", syllables: ["Fó", "sil"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "step", fact: "Resto mineralizado de seres vivos de eras remotas" },
      { word: "Glaciar", icon: "🧊", syllables: ["Gla", "ciar"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "water", fact: "Enorme río de hielo que desciende lentamente de las cumbres" },
      { word: "Selva", icon: "🌴", syllables: ["Sel", "va"], type: "bisilaba", label: "Bisílaba (2)", count: 2, soundType: "magic", fact: "Ecosistema tropical con la mayor densidad de biodiversidad" },
      { word: "Galaxia", icon: "🌌", syllables: ["Ga", "la", "xia"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Conjunto inmenso de miles de millones de estrellas" },
      { word: "Brújula", icon: "🧭", syllables: ["Brú", "ju", "la"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "sparkle", fact: "Instrumento con aguja imantada que señala el norte" },
      { word: "Átomo", icon: "⚛️", syllables: ["Á", "to", "mo"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "laser", fact: "Unidad fundamental de toda la materia del universo" },
      { word: "Desierto", icon: "🏜️", syllables: ["De", "sier", "to"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "step", fact: "Bioma con dunas, escasa lluvia y gran amplitud térmica" },
      { word: "Gravedad", icon: "🍏", syllables: ["Gra", "ve", "dad"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "bounce", fact: "Fuerza invisible de atracción mutua entre masas cósmicas" },
      { word: "Tsunami", icon: "🌊", syllables: ["Tsu", "na", "mi"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "water", fact: "Ola gigantesca impulsada por una falla sísmica marina" },
      { word: "Huracán", icon: "🌀", syllables: ["Hu", "ra", "cán"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "laser", fact: "Ciclón tropical giratorio con vientos de alta velocidad" },
      { word: "Eclipse", icon: "🌑", syllables: ["E", "clip", "se"], type: "trisilaba", label: "Trisílaba (3)", count: 3, soundType: "magic", fact: "Ocultación transitoria de un astro por interposición de otro" },

      // Polisílabas de 4 sílabas (4)
      { word: "Satélite", icon: "🛰️", syllables: ["Sa", "té", "li", "te"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "laser", fact: "Cuerpo o nave tecnológica en órbita alrededor de un planeta" },
      { word: "Océano", icon: "🌊", syllables: ["O", "cé", "a", "no"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "water", fact: "Inmensa masa de agua salada que cubre el 70% de la Tierra" },
      { word: "Energía", icon: "⚡", syllables: ["E", "ner", "gí", "a"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "laser", fact: "Capacidad para realizar trabajo, generar calor y luz" },
      { word: "Oxígeno", icon: "🫁", syllables: ["O", "xí", "ge", "no"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "sparkle", fact: "Elemento químico vital presente en el aire que respiramos" },
      { word: "Atmósfera", icon: "🌍", syllables: ["At", "mós", "fe", "ra"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "sparkle", fact: "Capa gaseosa que protege al planeta de la radiación solar" },
      { word: "Terremoto", icon: "🌋", syllables: ["Te", "rre", "mo", "to"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "roar", fact: "Vibración de la corteza por deslizamiento de placas tectónicas" },
      { word: "Astronauta", icon: "👨‍🚀", syllables: ["As", "tro", "nau", "ta"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "laser", fact: "Piloto audaz que explora galaxias lejanas" },
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
      { word: "Kilómetro", icon: "🛣️", syllables: ["Ki", "ló", "me", "tro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "step", fact: "Medida métrica que equivale a mil metros de distancia" },
      { word: "Navegante", icon: "🧭", syllables: ["Na", "ve", "gan", "te"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "water", fact: "Persona diestra en guiar naves por los mares" },
      { word: "Pirámide", icon: "🏛️", syllables: ["Pi", "rá", "mi", "de"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "step", fact: "Monumento colosal triangular de civilizaciones milenarias" },
      { word: "Barómetro", icon: "⏱️", syllables: ["Ba", "ró", "me", "tro"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "tictac", fact: "Aparato meteorológico para medir la presión del aire" },
      { word: "Cordillera", icon: "⛰️", syllables: ["Cor", "di", "lle", "ra"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "step", fact: "Cadena majestuosa de picos y montañas unidas" },
      { word: "Geografía", icon: "🗺️", syllables: ["Ge", "o", "gra", "fí", "a"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Ciencia que describe la superficie de la Tierra" },
      { word: "Astronomía", icon: "🔭", syllables: ["As", "tro", "no", "mí", "a"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "El estudio de los cuerpos celestes y el cosmos" },
      { word: "Arqueólogo", icon: "🏺", syllables: ["Ar", "que", "ó", "lo", "go"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "step", fact: "Científico que descubre templos y civilizaciones antiguas" },
      { word: "Calcomanía", icon: "🏷️", syllables: ["Cal", "co", "ma", "ní", "a"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Sticker decorativo para pegar en cuadernos y juguetes" },
      { word: "Laboratorio", icon: "🧪", syllables: ["La", "bo", "ra", "to", "rio"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "laser", fact: "Espacio especializado para realizar descubrimientos científicos" },
      { word: "Caleidoscopio", icon: "🌀", syllables: ["Ca", "lei", "dos", "co", "pio"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Tubo con prismas que genera infinitas figuras simétricas" },
      { word: "Meteorito", icon: "☄️", syllables: ["Me", "te", "o", "ri", "to"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "laser", fact: "Cuerpo rocoso espacial que entra brillando a la atmósfera" },
      { word: "Transformación", icon: "🦋", syllables: ["Trans", "for", "ma", "ción"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "magic", fact: "El cambio maravilloso de oruga a mariposa con alas" },
      { word: "Extraordinario", icon: "⭐", syllables: ["Ex", "traor", "di", "na", "rio"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Algo tan asombroso y genial que supera lo común" },
      { word: "Cartografía", icon: "🗺️", syllables: ["Car", "to", "gra", "fí", "a"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "step", fact: "Ciencia y arte milenario de trazar cartas geográficas" },
      { word: "Estratósfera", icon: "✈️", syllables: ["Es", "tra", "tós", "fe", "ra"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Estrato de la atmósfera donde surcan aviones supersónicos" },
      { word: "Bioquímica", icon: "🧪", syllables: ["Bio", "quí", "mi", "ca"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "laser", fact: "Química molecular de los procesos vitales celulares" },

      // Polisílabas de 5 o más sílabas (5, 6, 7+)
      { word: "Computadora", icon: "💻", syllables: ["Com", "pu", "ta", "do", "ra"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "Máquina electrónica para aprender, investigar y programar" },
      { word: "Helicóptero", icon: "🚁", syllables: ["He", "li", "cóp", "te", "ro"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "train", fact: "Aeronave que despega y vuela con grandes hélices" },
      { word: "Hipopótamo", icon: "🦛", syllables: ["Hi", "po", "pó", "ta", "mo"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "water", fact: "Pasa el día sumergido en lagos africanos" },
      { word: "Fotografía", icon: "📷", syllables: ["Fo", "to", "gra", "fí", "a"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Arte de inmortalizar instantes inolvidables" },
      { word: "Matemáticas", icon: "📐", syllables: ["Ma", "te", "má", "ti", "cas"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "Ciencia que estudia los números, formas y patrones" },
      { word: "Electricidad", icon: "💡", syllables: ["E", "lec", "tri", "ci", "dad"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Fuerza energética que enciende bombillos y motores" },
      { word: "Enciclopedia", icon: "📚", syllables: ["En", "ci", "clo", "pe", "dia"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Obra monumental que reúne el saber humano" },
      { word: "Rinoceronte", icon: "🦏", syllables: ["Ri", "no", "ce", "ron", "te"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "roar", fact: "Imponente herbívoro con un cuerno protector" },
      { word: "Arquitectura", icon: "🏛️", syllables: ["Ar", "qui", "tec", "tu", "ra"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "El arte de proyectar monumentos y bellos edificios" },
      { word: "Biodiversidad", icon: "🌿", syllables: ["Bio", "di", "ver", "si", "dad"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "La maravillosa variedad de especies vivas en la Tierra" },
      { word: "Civilización", icon: "🏛️", syllables: ["Ci", "vi", "li", "za", "ción"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "Conjunto de costumbres, artes y saberes de un pueblo" },
      { word: "Aeropuerto", icon: "🛫", syllables: ["A", "e", "ro", "puer", "to"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "train", fact: "Pista internacional donde despegan y aterrizan aviones" },
      { word: "Comunicación", icon: "📡", syllables: ["Co", "mu", "ni", "ca", "ción"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "El poder de compartir mensajes, ideas y emociones" },
      { word: "Supermercado", icon: "🛒", syllables: ["Su", "per", "mer", "ca", "do"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "crunch", fact: "Gran mercado con pasillos llenos de ricas provisiones" },
      { word: "Oceanografía", icon: "🌊", syllables: ["O", "ce", "a", "no", "gra", "fí", "a"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "water", fact: "Ciencia marina que explora profundidades del fondo oceánico" },
      { word: "Paleontología", icon: "🦴", syllables: ["Pa", "le", "on", "to", "lo", "gí", "a"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "roar", fact: "Estudio de fósiles y huellas de seres que vivieron antes" },
      { word: "Experimentación", icon: "🔬", syllables: ["Ex", "pe", "ri", "men", "ta", "ción"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "laser", fact: "Método de probar hipótesis para descubrir verdades" },
      { word: "Universalmente", icon: "🌍", syllables: ["U", "ni", "ver", "sal", "men", "te"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "magic", fact: "Algo comprendido y aceptado en todos los rincones del mundo" },
      { word: "Ecosistema", icon: "🌲", syllables: ["E", "co", "sis", "te", "ma"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Red viva donde plantas y animales comparten agua y suelo" },
      { word: "Fotosíntesis", icon: "🌱", syllables: ["Fo", "to", "sín", "te", "sis"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Milagro vegetal que convierte la luz solar en oxígeno limpio" },
      { word: "Metamorfosis", icon: "🐸", syllables: ["Me", "ta", "mor", "fo", "sis"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "water", fact: "Evolución asombrosa de oruga a mariposa y renacuajo a rana" },
      { word: "Cristalización", icon: "💎", syllables: ["Cris", "ta", "li", "za", "ción"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Proceso geológico donde los minerales forman gemas relucientes" },
      { word: "Arqueología", icon: "🏺", syllables: ["Ar", "que", "o", "lo", "gí", "a"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "step", fact: "Exploración de reliquias y tesoros de civilizaciones remotas" },
      { word: "Paleontólogo", icon: "🦖", syllables: ["Pa", "le", "on", "tó", "lo", "go"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "roar", fact: "Investigador paciente que rescata huesos petrificados" },
      { word: "Mediterráneo", icon: "🌊", syllables: ["Me", "di", "te", "rrá", "ne", "o"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "water", fact: "Mar histórico que baña tres continentes con aguas calmas" },
      { word: "Transatlántico", icon: "🚢", syllables: ["Tran", "sa", "tlán", "ti", "co"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "water", fact: "Colosal crucero que surca de un océano a otro continente" },
      { word: "Cinematografía", icon: "🎬", syllables: ["Ci", "ne", "ma", "to", "gra", "fí", "a"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "sparkle", fact: "El arte de capturar historias en pantalla grande con magia" },
      { word: "Internacional", icon: "🌐", syllables: ["In", "ter", "na", "cio", "nal"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Alianzas y amistad que cruzan todas las fronteras mundiales" },
      { word: "Telecomunicación", icon: "🛰️", syllables: ["Te", "le", "co", "mu", "ni", "ca", "ción"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "laser", fact: "Transmisión satelital de señales, voz y datos sin cables" },
      { word: "Microorganismo", icon: "🦠", syllables: ["Mi", "croor", "ga", "nis", "mo"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "laser", fact: "Ser viviente invisible al ojo humano sin un microscopio" },
      { word: "Biodegradable", icon: "♻️", syllables: ["Bio", "de", "gra", "da", "ble"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Elemento amigable que la tierra reabsorbe sin contaminar" },
      { word: "Termodinámica", icon: "🔥", syllables: ["Ter", "mo", "di", "ná", "mi", "ca"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "laser", fact: "Rama de la física que analiza el calor, trabajo y energía" },
      { word: "Heliocéntrico", icon: "☀️", syllables: ["He", "lio", "cén", "tri", "co"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Teoría astronómica que ubica al Sol en el centro orbital" },
      { word: "Responsabilidad", icon: "🤝", syllables: ["Res", "pon", "sa", "bi", "li", "dad"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "bell", fact: "El valor de cumplir nuestros compromisos con dedicación" },
      { word: "Sostenibilidad", icon: "🌍", syllables: ["Sos", "te", "ni", "bi", "li", "dad"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "magic", fact: "Conservar la naturaleza para que el futuro sea brillante" },
      { word: "Confraternidad", icon: "🕊️", syllables: ["Con", "fra", "ter", "ni", "dad"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Hermandad sincera y cordial entre todos los seres humanos" },
      { word: "Refrigerador", icon: "🧊", syllables: ["Re", "fri", "ge", "ra", "dor"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "bell", fact: "Guarda frescos los alimentos con frío continuo y limpio" },
      { word: "Electroimán", icon: "🧲", syllables: ["E", "lec", "troi", "mán"], type: "polisilaba", label: "Polisílaba (4)", count: 4, soundType: "laser", fact: "Imán potente cuya fuerza magnética se activa con corriente" },
      { word: "Desoxirribonucleico", icon: "🧬", syllables: ["Des", "o", "xi", "rri", "bo", "nu", "clei", "co"], type: "polisilaba", label: "Polisílaba (8)", count: 4, soundType: "magic", fact: "La gran molécula ADN que contiene las instrucciones de la vida" },
      { word: "Espectacular", icon: "🎆", syllables: ["Es", "pec", "ta", "cu", "lar"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Algo tan hermoso y deslumbrante que causa admiración" },
      { word: "Incomparable", icon: "🏆", syllables: ["In", "com", "pa", "ra", "ble"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "sparkle", fact: "Tan extraordinario y singular que no existe nada igual" },
      { word: "Multidisciplinario", icon: "🎓", syllables: ["Mul", "ti", "dis", "ci", "pli", "na", "rio"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "magic", fact: "Proyecto que reúne científicos y sabios de diversas áreas" },
      { word: "Anticonstitucional", icon: "⚖️", syllables: ["An", "ti", "cons", "ti", "tu", "cio", "nal"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "bell", fact: "Acción jurídica contraria a las leyes máximas de una nación" },
      { word: "Extraordinariamente", icon: "🌟", syllables: ["Ex", "traor", "di", "na", "ria", "men", "te"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "sparkle", fact: "Hacer las cosas de un modo excepcional y admirable" },
      { word: "Desproporcionado", icon: "🐘", syllables: ["Des", "pro", "por", "cio", "na", "do"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "step", fact: "Dimensión gigantesca que sobrepasa el tamaño esperado" },
      { word: "Incomprensible", icon: "🧩", syllables: ["In", "com", "pren", "si", "ble"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "magic", fact: "Misterio fascinante que despierta curiosidad investigadora" },
      { word: "Hidroeléctrica", icon: "🌊", syllables: ["Hi", "droe", "léc", "tri", "ca"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "laser", fact: "Central renovable que produce luz con caudales de agua" },
      { word: "Geotérmico", icon: "🌋", syllables: ["Ge", "o", "tér", "mi", "co"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "crunch", fact: "Energía calorífica limpia proveniente del manto terrestre" },
      { word: "Meteorológico", icon: "🌦️", syllables: ["Me", "te", "o", "ro", "ló", "gi", "co"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "water", fact: "Estudio minucioso de la atmósfera, nubes y pronósticos" },
      { word: "Nanotecnología", icon: "🔬", syllables: ["Na", "no", "tec", "no", "lo", "gí", "a"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "sparkle", fact: "Ingeniería de vanguardia a escala de átomos y moléculas" },
      { word: "Circunnavegación", icon: "⛵", syllables: ["Cir", "cun", "na", "ve", "ga", "ción"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "water", fact: "Navegar la vuelta al globo terráqueo como Magallanes y Elcano" },
      { word: "Aerodinámica", icon: "🚀", syllables: ["A", "e", "ro", "di", "ná", "mi", "ca"], type: "polisilaba", label: "Polisílaba (7)", count: 4, soundType: "laser", fact: "Física que optimiza el vuelo suave de naves y bólidos" },
      { word: "Pluviométrico", icon: "🌧️", syllables: ["Plu", "vio", "mé", "tri", "co"], type: "polisilaba", label: "Polisílaba (5)", count: 4, soundType: "water", fact: "Instrumento y registro preciso del agua de lluvia caída" },
      { word: "Biotecnología", icon: "🧬", syllables: ["Bio", "tec", "no", "lo", "gí", "a"], type: "polisilaba", label: "Polisílaba (6)", count: 4, soundType: "sparkle", fact: "Ciencia que aplica procesos biológicos para la medicina y salud" }
    ]
  };

  const DIALOGUES = {
    // Frases de bienvenida cálidas y espontáneas
    welcome: [
      "¡Hola amiguito! Soy Silabín el ratón explorador. ¡Vamos a descubrir la música de las palabras juntos!",
      "¡Bienvenido a nuestro bosque encantado! Abre bien las orejitas, que cada palabra tiene su propio ritmo.",
      "¡Qué alegría tan grande verte por aquí! Hoy vamos a jugar, aplaudir y aprender un montón.",
      "¡Hola, hola! Ya me puse mi gorrita de explorador. ¿Listo para atrapar sílabas conmigo?",
      "¡Aquí está mi compañero favorito! Vamos a contar cuántos saltitos da cada palabra.",
      "¡Hola campeón! Mis bigotes me dicen que hoy vas a resolverlo todo de maravilla.",
      "¡Qué gran día para una aventura! Escucha con atención y déjate llevar por el ritmo.",
      "¡Hola amiguito! ¿Sabías que las palabras se pueden partir como un rico pastel? ¡Ven a probar!",
      "¡Yupi, ya llegaste! Estaba mordisqueando un pedacito de queso esperándote. ¡A jugar!",
      "¡Bienvenido! Prepara esas manitas para dar palmadas mágicas.",
      "¡Hola, qué emoción! Cada palabra que descubras encenderá una estrella en nuestro camino.",
      "¡Bienvenido de vuelta, pequeño explorador! Hoy tenemos palabras fascinantes por descubrir.",
      "¡Hola amiguito! Ponte cómodo, escucha mi voz y divirtámonos juntos.",
      "¡Qué felicidad! Soy Silabín y seré tu guía en este viaje por los sonidos de las palabras.",
      "¡Hola, hola! ¿Oyes eso? ¡Es la aventura que nos está llamando! ¡Empecemos ya!",
      "¡Bienvenido al juego! Da un brinco de alegría, que hoy aprenderemos jugando."
    ],

    // Frases de acierto variadas, alegres y de orgullo genuino
    correct: [
      "¡Bravo, diste justo en el clavo! ¡Tienes oído de detective!",
      "¡Eso es, genial! ¡Lo hiciste parecer facilísimo!",
      "¡Guau, qué puntería! Acertaste a la primera.",
      "¡Choca esos cinco! ¡Excelente respuesta, amiguito!",
      "¡Siii! Mis bigotes tiemblan de pura emoción cuando aciertas así.",
      "¡Oído de lince! Contaste cada sílaba a la perfección.",
      "¡Magnífico! Cada vez nos acercamos más al gran diploma.",
      "¡Eso estuvo brillante! ¡Qué buen ritmo tienes!",
      "¡Yujuuu! ¡Respuesta perfecta! Me encanta jugar contigo.",
      "¡Impresionante! ¡Eres todo un experto en sílabas!",
      "¡Bien hecho! Tu esfuerzo valió la pena, ¡sigue con esa energía!",
      "¡Qué alegría! Esa palabra no tenía secretos para ti.",
      "¡Eso, campeón! Avanzamos a paso firme por el sendero mágico.",
      "¡Extraordinario! Diste exactamente con el número de golpes de voz.",
      "¡Toma castaña! ¡Esa respuesta fue de diez sobre diez!",
      "¡Lo lograste! Hasta los pajaritos del bosque están aplaudiendo.",
      "¡De maravilla! Tienes un talento especial para escuchar las palabras.",
      "¡Qué crack! Me dejas con la boquita abierta de lo rápido que lo hiciste.",
      "¡Súper bien! Sigamos así, que vas imparable.",
      "¡Pum, acertaste! ¡Las sílabas salieron bailando de contentas!"
    ],

    // Elogios especiales cuando el niño acumula aciertos seguidos (racha)
    streak: [
      "¡Madre mía, llevas una racha encendida! ¡Vas como un cohete!",
      "¡Acierto tras acierto! ¡Nadie te puede detener hoy!",
      "¡Guau, estrella tras estrella! ¡Eres una máquina de acertar!",
      "¡Imparable! Mis orejitas no dan crédito de lo bien que lo estás haciendo.",
      "¡Qué racha tan fabulosa! El bosque entero brilla con tus aciertos.",
      "¡Fuego en las piedras! ¡Estás en tu mejor momento, amiguito!",
      "¡Qué maestría! Llevas varias seguidas perfectas.",
      "¡Sigue la racha dorada! Eres el rey de los golpes de voz.",
      "¡Vaya puntería! Acierto tras acierto sin dudar ni un segundo.",
      "¡Una racha espectacular! ¡Choca esas patitas conmigo!",
      "¡Esto es una fiesta de estrellas! ¡Qué orgullo ser tu amigo ratón!",
      "¡Impresionante seguidilla! Tienes una concentración de campeón."
    ],

    // Frases gentiles, cariñosas y motivadoras ante una equivocación
    incorrect: [
      "¡Casi, casi! Estuviste a un pelito de acertar. ¡Probemos de nuevo!",
      "¡No te preocupes! Las palabras a veces son juguetonas, escucha conmigo y contemos juntos.",
      "¡Buen intento, amiguito! Hasta los ratones sabios nos equivocamos a veces.",
      "¡Tranquilo! Da palmadas despacito con tus manos, verás cómo sale.",
      "¡No pasa nada! Respira hondo, escucha bien el sonido y verás que tú puedes.",
      "¡Cerca, muy cerca! Escúchala una vez más y siente cada pedacito de la palabra.",
      "¡Ánimo, campeón! Los grandes exploradores aprenden practicando una y otra vez.",
      "¡Uy, se nos escapó por poquito! Pero la próxima seguro que es tuya.",
      "¡Tranquilito, corazón! No hay prisa, tómate tu tiempo y vuelve a intentarlo.",
      "¡Buen esfuerzo! Recuerda que cada trocito de voz cuenta. ¡Vamos de nuevo!",
      "¡No te rindas! Yo creo en ti y sé que la próxima la vas a clavar.",
      "¡Así se aprende! Los tropiezos nos ayudan a escuchar mejor. ¡Tú puedes!",
      "¡Por un pelito de ratón! Pulsa el botón de palmadas para que lo hagamos juntos.",
      "¡No pasa nada, amiguito! Sonríe y vamos a intentarlo otra vez con ganas.",
      "¡Casi lo atrapas! Escucha el eco de la palabra y cuéntala conmigo.",
      "¡Buen intento! Cada intento te hace más listo y más veloz."
    ],

    // Frases de espera paciente y reflexiva cuando el niño se queda pensando
    thinking: [
      "Mmm... ¿quieres una ayudita? Puedes pulsar el botón de palmadas para escucharla despacito.",
      "Tómate todo el tiempo que necesites, amiguito. Pensar con calma es de exploradores sabios.",
      "¿Sientes el ritmo en tu cabeza? Pronuncia la palabra en voz alta y da un aplauso por cada golpe.",
      "Aquí estoy acompañándote, amiguito. No hay ningún apuro, diviértete buscando la respuesta.",
      "Mmm, déjame pensar a mí también... ¿será cortita o tendrá varias sílabas?",
      "¿Quieres que la repita? Toca la tarjeta o el botón de escuchar cuando quieras.",
      "Prueba a decirla como si cantaras una cancioncita: cada pedacito es una sílaba.",
      "Mis bigotitos me dicen que ya casi tienes la respuesta en la punta de la lengua.",
      "¡Tú puedes descubrirlo! Cuenta con los deditos de tu mano mientras la dices.",
      "A veces ayuda cerrar los ojitos y escuchar cómo suena la palabra por dentro.",
      "Si tienes dudas, ¡dale una palmada al aire! Tu cuerpo sabe el ritmo.",
      "Aquí te espero pacientemente, amiguito. ¡Confío plenamente en tu oído!",
      "Mmm... ¿será de uno, dos, tres o cuatro saltos? ¡Tú eliges!",
      "¡Tómate tu tiempo! Pensar las cosas con calma hace que aprendamos mucho mejor.",
      "Recuerda que si necesitas ayuda, el botón de palmadas te muestra el camino.",
      "¡Vamos, pequeño detective! La respuesta está esperando por ti."
    ],

    // Frases cariñosas y juguetonas cuando el niño toca a Silabín
    tickle: [
      "¡Jijijiji, eso me da muchas cosquillas en la pancita!",
      "¡Ay, mis bigotes! ¡Se me erizan de tanta risa, jijiji!",
      "¡Jajaja, para, para, que me caigo de la risa! ¡Eres muy simpático!",
      "¡Choca la patita, amiguito! ¡Me encanta cuando me saludas!",
      "¡Jijiji, me hiciste cosquillitas detrás de las orejas!",
      "¡Uy, qué cosquillas! ¡Casi salto hasta el techo del bosque!",
      "¡Aquí estoy contigo, siempre listo para ayudarte en la aventura!",
      "¡Jajaja, mi colita está dando vueltas de pura felicidad!",
      "¡Jijiji, cuidado con mis patitas que son muy sensibles a las cosquillas!",
      "¡Qué cosquilloso soy! ¡Ven, choquemos esos cinco mágicos!",
      "¡Jajaja, me haces reír tanto que casi se me cae mi pedazo de queso!",
      "¡Eres el mejor compañero de juegos del mundo entero!",
      "¡Jijiji, un abracito de ratón para ti con todo mi cariño!",
      "¡Ay, mis orejitas traviesas! Se mueven cuando estás cerca.",
      "¡Jajaja, qué buen cosquilleo! ¡Vamos a seguir descubriendo palabras!",
      "¡Ji ji ji! ¡Eres genial, me alegra mucho jugar a tu lado!"
    ],

    // Frases de palmadas interactivas
    clapping: [
      "¡Aplaude conmigo! Vamos a sentir el ritmo de cada trocito.",
      "¡Escucha qué claro se oye cuando damos palmadas juntos!",
      "¡Uno, dos, tres! Cada palmada es un paso en el camino.",
      "¡Siente la música de la palabra en tus manitas!",
      "¡Qué bien suena! Las palmadas nunca se equivocan.",
      "¡Eso es! Al aplaudir separamos los golpes de voz fácilmente.",
      "¡Mira cómo aplaudo yo también con mis patitas!",
      "¡Con ritmo y compás, las sílabas contarás!",
      "¡Las palmas mágicas revelan el secreto de la palabra!",
      "¡Qué divertido es aplaudir las palabras! ¿Lo intentamos en voz alta?",
      "¡Palmadas arriba! Así los sonidos se quedan grabados en la memoria.",
      "¡Siente cada golpe en el aire con alegría!"
    ],

    // Frases triunfales de victoria al ganar el diploma
    victory: [
      "¡FANTÁSTICO, LO LOGRASTE! ¡Has completado todo el camino y ganado tu diploma de honor!",
      "¡HURRAAAA! ¡Eres un verdadero maestro de las sílabas! ¡Qué orgullo tan grande siento de ti!",
      "¡Victoria total! Cruzamos todas las piedras mágicas gracias a tu talento y oído de campeón.",
      "¡Aplausos y confeti para ti! Eres oficialmente el Gran Detective de Palabras del reino.",
      "¡Lo conseguiste, amiguito! Tu diploma brilla más que el sol. ¡Felicidades de todo corazón!",
      "¡Qué proeza tan maravillosa! Has demostrado ser todo un genio descubriendo sonidos.",
      "¡Bailando de felicidad! Has completado el mapa completo. ¡Te mereces este gran premio!",
      "¡Misión cumplida! Todo el bosque está de fiesta celebrando tu victoria.",
      "¡Un aplauso gigante para el mejor explorador de todos los tiempos! ¡Felicidades!",
      "¡Qué logro tan asombroso! Eres un ejemplo de alegría, paciencia y sabiduría."
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
      this.currentAudio = null;
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
        // Priorizar voces neuronales naturales de alta calidad humana (Edge Natural, Chrome Google)
        this.friendlyVoice = voices.find(v => v.lang.startsWith('es') && (
          v.name.includes('Natural') || 
          v.name.includes('Neural') ||
          v.name.includes('Google') ||
          v.name.includes('Dalia') ||
          v.name.includes('Salma') ||
          v.name.includes('Elena') || 
          v.name.includes('Lucia') || 
          v.name.includes('Camila') ||
          v.name.includes('Sofia') ||
          v.name.includes('Paloma') || 
          v.name.includes('Paulina') || 
          v.name.includes('Laura') || 
          v.name.includes('Monica') || 
          v.name.includes('Sabina')
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

    sanitizeForSpeech(text) {
      if (!text) return '';
      return text
        .replace(/ - /g, ', ')
        // Prevenir que la sílaba aislada 'na' sea leída como 'sodio' en Windows SAPI
        .replace(/\bNa\b/g, 'Ná')
        .replace(/\bna\b/g, 'ná');
    }

    sanitizeSyllable(syl) {
      if (!syl) return '';
      // Solo 'na' requiere tilde fonética para no disparar expansión química de Sodio
      if (syl.toLowerCase() === 'na') return 'ná';
      return syl;
    }

    speakFriendly(text, onComplete = null, pitch = 1.0, rate = 0.95) {
      if (!this.synth) {
        if (onComplete) onComplete();
        return;
      }

      // 1. Limpiar cualquier temporizador previo
      if (this.safetyTimer) {
        clearTimeout(this.safetyTimer);
        this.safetyTimer = null;
      }

      // 2. Si el sintetizador estaba hablando, cancelarlo de forma limpia
      try {
        if (this.synth.speaking || this.synth.pending) {
          this.synth.cancel();
        }
      } catch (e) {}

      const cleanText = this.sanitizeForSpeech(text);

      const mouth = document.getElementById('raton-mouth');
      const badge = document.getElementById('mouse-speech-badge');
      if (mouth) mouth.classList.add('mouth-talking');
      if (badge) badge.classList.add('active');

      let completed = false;

      const finishSpeaking = () => {
        if (completed) return;
        completed = true;

        if (this.safetyTimer) {
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }

        if (mouth) mouth.classList.remove('mouth-talking');
        if (badge) badge.classList.remove('active');
        this.activeUtterance = null;

        if (typeof onComplete === 'function') {
          const cb = onComplete;
          onComplete = null;
          cb();
        }
      };

      // Respaldo de seguridad holgado
      const estimatedDurationMs = Math.max(6500, Math.ceil(cleanText.length * 120) + 3000);
      this.safetyTimer = setTimeout(finishSpeaking, estimatedDurationMs);

      // Esperar 45ms para que Chromium libere el buffer de voz anterior antes de encolar
      setTimeout(() => {
        try {
          if (this.synth.paused) {
            this.synth.resume();
          }

          const utterance = new SpeechSynthesisUtterance(cleanText);
          utterance.lang = this.friendlyVoice ? this.friendlyVoice.lang : 'es-ES';
          if (this.friendlyVoice) utterance.voice = this.friendlyVoice;
          utterance.pitch = pitch;
          utterance.rate = rate;

          this.activeUtterance = utterance;

          utterance.onend = () => {
            finishSpeaking();
          };

          utterance.onerror = () => {
            finishSpeaking();
          };

          this.synth.speak(utterance);
        } catch (e) {
          finishSpeaking();
        }
      }, 45);
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
      this.isBusy = false;

      this.initDOM();
      this.bindEvents();
      this.loadWord(false);

      // Bloquear tablero durante la bienvenida inicial para que Silabín hable tranquilo
      this.setBoardLocked(true);
      setTimeout(() => {
        const helloPhrase = this.pickRandom(DIALOGUES.welcome);
        this.showCloud("¡Hola amiguito! 🐭✨");
        this.sound.speakFriendly(helloPhrase, () => {
          setTimeout(() => {
            const cur = this.words[this.currentIndex];
            if (cur) {
              if (cur.soundType) this.sound.playSpecialSfx(cur.soundType);
              this.sound.speakFriendly(`Primera palabra: ${cur.word}`, () => {
                this.setBoardLocked(false);
                this.resetThinkingTimer();
              });
            } else {
              this.setBoardLocked(false);
              this.resetThinkingTimer();
            }
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

    // Formatear sílabas fonéticamente para evitar que sintetizadores digan "sodio" o siglas
    formatSyllablesForSpeech(syllables) {
      if (!syllables || !syllables.length) return '';
      return syllables
        .map(s => this.sound.sanitizeSyllable(s))
        .join(', ');
    }

    setBoardLocked(locked) {
      this.isBusy = !!locked;
      this.stoneBtns?.forEach(btn => btn.classList.toggle('locked', locked));
      this.agePills?.forEach(pill => pill.classList.toggle('locked', locked));
      if (this.btnSpeak) this.btnSpeak.classList.toggle('locked', locked);
      if (this.btnSyllables) this.btnSyllables.classList.toggle('locked', locked);
      if (this.btnReset) this.btnReset.classList.toggle('locked', locked);
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

      // SELECTOR DE EDAD CON ANUNCIO COMPLETO Y TIEMPO PROTEGIDO
      this.agePills.forEach(pill => {
        pill.addEventListener('click', () => {
          const age = pill.getAttribute('data-age');
          if (age === this.selectedAge || this.isBusy || this.isLevelChanging) return;

          this.sound.playPop();
          this.selectedAge = age;
          this.agePills.forEach(p => p.classList.toggle('active', p === pill));

          this.isLevelChanging = true;
          this.setBoardLocked(true);
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
                  this.setBoardLocked(false);
                  this.resetThinkingTimer();
                });
              } else {
                this.isLevelChanging = false;
                this.setBoardLocked(false);
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
          if (this.isBusy) return;
          this.resetThinkingTimer();
          const countChosen = parseInt(btn.getAttribute('data-syllable-count'), 10);
          this.handleAnswer(countChosen, btn);
        });
      });

      // Clic en el ratón
      this.characterEl?.addEventListener('click', () => {
        if (this.isBusy) return;
        this.setBoardLocked(true);
        this.sound.playPop();
        const ticklePhrase = this.pickRandom(DIALOGUES.tickle);
        this.characterEl.classList.add('character-hop');
        setTimeout(() => this.characterEl.classList.remove('character-hop'), 650);
        this.showCloud("¡Jijiji cosquillas! 🐭");
        this.sound.speakFriendly(ticklePhrase, () => {
          setTimeout(() => {
            this.setBoardLocked(false);
            this.resetThinkingTimer();
          }, 400);
        });
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
        if (this.isBusy) return;
        this.setBoardLocked(true);
        this.sound.resume();
        this.resetThinkingTimer();
        const cur = this.words[this.currentIndex];
        if (cur) {
          this.sound.playPop();
          if (cur.soundType) this.sound.playSpecialSfx(cur.soundType);
          this.characterEl.classList.add('character-hop');
          setTimeout(() => this.characterEl.classList.remove('character-hop'), 500);
          this.showCloud(`¡Escucha: ${cur.word}! 🔊`);
          this.sound.speakFriendly(`La palabra es: ${cur.word}. ${cur.fact || ''}`, () => {
            setTimeout(() => {
              this.setBoardLocked(false);
              this.resetThinkingTimer();
            }, 500);
          });
        } else {
          this.setBoardLocked(false);
        }
      };

      // 2. Botón Palmadas (👏)
      const handleClapping = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (this.isBusy) return;
        this.setBoardLocked(true);
        this.sound.resume();
        this.resetThinkingTimer();
        const cur = this.words[this.currentIndex];
        if (cur) {
          this.triggerInteractiveClapping(cur, () => {
            setTimeout(() => {
              this.setBoardLocked(false);
              this.resetThinkingTimer();
            }, 600);
          });
        } else {
          this.setBoardLocked(false);
        }
      };

      // 3. Botón Siguiente (🔄)
      const handleNext = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (this.isBusy) return;
        this.setBoardLocked(true);
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
        this.loadWord(true, () => {
          this.setBoardLocked(false);
          this.resetThinkingTimer();
        });
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
        this.loadWord(true, () => {
          this.setBoardLocked(false);
          this.resetThinkingTimer();
        });
      });

      // Atajos de teclado: 1, 2, 3, 4, Espacio (Escuchar), P (Palmadas), S (Siguiente)
      window.addEventListener('keydown', (e) => {
        if (this.isBusy) return;
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
            if (this.isBusy) return;
            this.sound.playPop();
            chip.classList.add('highlighted');
            setTimeout(() => chip.classList.remove('highlighted'), 380);
            const safeSyl = this.sound.sanitizeSyllable(syl);
            this.sound.speakFriendly(safeSyl, null, 1.0, 0.95);
          });
        }

        this.cardSyllableReveal.appendChild(chip);
      });
    }

    // Efecto de palmadas rítmicas con animación visual en pantalla y conteo paso a paso
    triggerInteractiveClapping(wordObj, onDone = null) {
      this.sound.playPop();
      this.renderSyllableChips(wordObj.syllables, true);
      const clapIntro = this.pickRandom(DIALOGUES.clapping);
      this.showCloud(`👏 ${clapIntro}`);

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
      const syllablesFormatted = this.formatSyllablesForSpeech(wordObj.syllables);
      const phrase = `${clapIntro} La palabra ${wordObj.word} tiene ${countText}: ${syllablesFormatted}.`;
      setTimeout(() => {
        this.sound.speakFriendly(phrase, () => {
          if (onDone) onDone();
        });
      }, totalDuration + 500);
    }

    resetThinkingTimer() {
      clearTimeout(this.thinkingTimer);
      if (this.characterSvg) {
        this.characterSvg.classList.remove('mouse-thinking');
      }

      // Tiempo de espera generoso (18 segundos) para que el niño piense sin interrupciones
      this.thinkingTimer = setTimeout(() => {
        if (this.isLevelChanging || this.isBusy) return;
        if (this.characterSvg) {
          this.characterSvg.classList.add('mouse-thinking');
          const cur = this.words[this.currentIndex];
          if (cur) {
            const thinkPhrase = this.pickRandom(DIALOGUES.thinking);
            this.showCloud(`Mmm... ¿cuántas sílabas tiene "${cur.word}"? 🤔`);
            this.sound.speakFriendly(thinkPhrase);
          }
        }
      }, 18000);
    }

    loadWord(shouldPronounce = true, onComplete = null) {
      if (this.currentIndex >= this.words.length) {
        this.words = this.shuffle(WORDS_BY_AGE[this.selectedAge]);
        this.currentIndex = 0;
      }

      const cur = this.words[this.currentIndex];
      if (!cur) {
        if (onComplete) onComplete();
        return;
      }

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
            this.sound.speakFriendly(`La palabra es: ${cur.word}`, () => {
              if (onComplete) onComplete();
            });
          } else {
            if (onComplete) onComplete();
          }
        }, 500);
      } else {
        if (onComplete) onComplete();
      }
    }

    handleAnswer(countChosen, btnElement) {
      if (this.isBusy) return;
      this.setBoardLocked(true);

      const cur = this.words[this.currentIndex];
      if (!cur) {
        this.setBoardLocked(false);
        return;
      }

      const isCorrect = countChosen === cur.count;

      if (isCorrect) {
        this.sound.playWin();

        // Mostrar fichas interactivas de sílabas
        this.renderSyllableChips(cur.syllables, true);

        this.streakCount += 1;
        this.updateStreakUI();

        this.characterEl.classList.add('character-hop');
        setTimeout(() => this.characterEl.classList.remove('character-hop'), 650);

        let cheerPhrase = this.pickRandom(DIALOGUES.correct);
        if (this.streakCount >= 3 && Math.random() < 0.65) {
          const streakPhrase = this.pickRandom(DIALOGUES.streak);
          cheerPhrase = `${streakPhrase} ${cheerPhrase}`;
        }
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
        const formattedSyllables = this.formatSyllablesForSpeech(cur.syllables);
        const fullPhrase = `${cheerPhrase}. ${cur.word} tiene ${cur.count} ${syllableWordText}: ${formattedSyllables}`;

        let hasAdvanced = false;
        const advanceSafely = () => {
          if (hasAdvanced) return;
          hasAdvanced = true;

          // Pausa cómoda de 1.2s después de que Silabín termine TODO su diálogo
          setTimeout(() => {
            if (this.scoreProgress >= this.totalSegments) {
              this.triggerStageVictory();
            } else {
              this.currentIndex += 1;
              if (this.currentIndex >= this.words.length) {
                this.words = this.shuffle(WORDS_BY_AGE[this.selectedAge]);
                this.currentIndex = 0;
              }
              this.loadWord(true, () => {
                this.setBoardLocked(false);
                this.resetThinkingTimer();
              });
            }
          }, 1200);
        };

        // advanceSafely solo se dispara cuando el audio termina verdaderamente
        this.sound.speakFriendly(fullPhrase, advanceSafely);

      } else {
        this.sound.playFail();
        this.streakCount = 0;
        this.updateStreakUI();

        btnElement.classList.add('stone-wrong-shake');
        setTimeout(() => btnElement.classList.remove('stone-wrong-shake'), 450);

        const failPhrase = this.pickRandom(DIALOGUES.incorrect);
        this.showCloud(`¡Casi! Prueba otra vez 😊`);
        this.sound.speakFriendly(failPhrase, () => {
          setTimeout(() => {
            this.setBoardLocked(false);
            this.resetThinkingTimer();
          }, 600);
        });
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
      }, 2600);
    }

    updateProgressUI() {
      this.progressSegments.forEach((seg, i) => {
        seg.classList.toggle('filled', i < this.scoreProgress);
      });
    }

    triggerStageVictory() {
      this.setBoardLocked(true);
      this.sound.playWin();
      this.characterEl.classList.add('character-dance');

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 180,
          spread: 100,
          origin: { y: 0.5 }
        });
      }

      const victoryPhrase = this.pickRandom(DIALOGUES.victory);
      this.showCloud("🏆 ¡VICTORIA TOTAL! 🌟");

      this.sound.speakFriendly(victoryPhrase, () => {
        setTimeout(() => {
          if (this.victoryModal) {
            this.victoryModal.classList.add('active');
          }
          this.setBoardLocked(false);
        }, 800);
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
