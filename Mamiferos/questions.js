// Quiz questions database
const questions = [
    // Easy level questions
    {
        level: 'easy',
        question: 'Qual é a principal característica que diferencia os mamíferos de outros animais?',
        options: [
            'Presença de pelos',
            'Glândulas mamárias',
            'Sangue quente',
            'Quatro patas'
        ],
        correctAnswer: 1,
        explanation: 'As glândulas mamárias, que produzem leite para alimentar os filhotes, são a característica exclusiva que define os mamíferos.'
    },
    {
        level: 'easy',
        question: 'Qual destes animais NÃO é um mamífero?',
        options: [
            'Baleia',
            'Morcego',
            'Salamandra',
            'Canguru'
        ],
        correctAnswer: 2,
        explanation: 'A salamandra é um anfíbio, não um mamífero. Todos os outros animais listados são mamíferos, incluindo a baleia (mamífero marinho) e o morcego (mamífero voador).'
    },
    {
        level: 'easy',
        question: 'Qual é o maior mamífero terrestre?',
        options: [
            'Elefante africano',
            'Rinoceronte branco',
            'Girafa',
            'Hipopótamo'
        ],
        correctAnswer: 0,
        explanation: 'O elefante africano é o maior mamífero terrestre, podendo pesar até 6 toneladas e medir até 4 metros de altura.'
    },
    {
        level: 'easy',
        question: 'Os mamíferos são os únicos animais que...',
        options: [
            'Respiram ar',
            'Têm coração',
            'Amamentam seus filhotes',
            'Têm olhos'
        ],
        correctAnswer: 2,
        explanation: 'A amamentação é uma característica exclusiva dos mamíferos, possibilitada pela presença de glândulas mamárias.'
    },
    {
        level: 'easy',
        question: 'Qual destes é um mamífero aquático?',
        options: [
            'Tubarão',
            'Golfinho',
            'Peixe-boi',
            'Polvo'
        ],
        correctAnswer: 2,
        explanation: 'O peixe-boi é um mamífero aquático. Apesar de viver na água, ele precisa subir à superfície para respirar ar, como todos os mamíferos.'
    },
    {
        level: 'easy',
        question: 'Qual característica é comum a todos os mamíferos?',
        options: [
            'Viver na terra',
            'Ter quatro patas',
            'Ser coberto de pelos',
            'Ter sangue quente'
        ],
        correctAnswer: 3,
        explanation: 'Todos os mamíferos são endotérmicos (sangue quente), o que significa que podem manter sua temperatura corporal constante independentemente do ambiente.'
    },
    {
        level: 'easy',
        question: 'Qual destes animais é um mamífero voador?',
        options: [
            'Morcego',
            'Águia',
            'Borboleta',
            'Beija-flor'
        ],
        correctAnswer: 0,
        explanation: 'O morcego é o único mamífero capaz de realizar voo verdadeiro, usando suas asas membranosas (membranas de pele esticada).'
    },
    {
        level: 'easy',
        question: 'Os filhotes de mamíferos sempre nascem...',
        options: [
            'Pela boca',
            'De ovos',
            'Do útero',
            'Das árvores'
        ],
        correctAnswer: 2,
        explanation: 'Com raras exceções (como o ornitorrinco), os mamíferos são vivíparos, o que significa que seus filhotes se desenvolvem dentro do útero da mãe.'
    },
    {
        level: 'easy',
        question: 'Qual é o mamífero mais rápido do mundo?',
        options: [
            'Leão',
            'Guepardo',
            'Gazela',
            'Cavalo'
        ],
        correctAnswer: 1,
        explanation: 'O guepardo é o mamífero terrestre mais rápido, podendo atingir velocidades de até 110 km/h em corridas curtas.'
    },
    {
        level: 'easy',
        question: 'Qual destes é o menor mamífero do mundo?',
        options: [
            'Hamster',
            'Musaranho',
            'Morcego-abelha',
            'Rato'
        ],
        correctAnswer: 2,
        explanation: 'O morcego-abelha de Kitti é considerado o menor mamífero do mundo, pesando apenas 2 gramas e tendo o tamanho de uma abelha grande.'
    },

    // Medium level questions
    {
        level: 'medium',
        question: 'Qual destes mamíferos põe ovos?',
        options: [
            'Canguru',
            'Ornitorrinco',
            'Tatu',
            'Coala'
        ],
        correctAnswer: 1,
        explanation: 'O ornitorrinco é um dos poucos mamíferos monotremados que põem ovos. Mesmo assim, após a eclosão, os filhotes são amamentados.'
    },
    {
        level: 'medium',
        question: 'Qual é a ordem de mamíferos mais numerosa?',
        options: [
            'Carnívoros',
            'Primatas',
            'Roedores',
            'Morcegos'
        ],
        correctAnswer: 2,
        explanation: 'Os roedores são a ordem mais numerosa de mamíferos, representando cerca de 40% de todas as espécies de mamíferos conhecidas.'
    },
    {
        level: 'medium',
        question: 'Qual destes animais é um marsupial?',
        options: [
            'Leão',
            'Canguru',
            'Zebra',
            'Gorila'
        ],
        correctAnswer: 1,
        explanation: 'O canguru é um marsupial, um grupo de mamíferos cujas fêmeas possuem uma bolsa (marsúpio) onde carregam e amamentam seus filhotes.'
    },
    {
        level: 'medium',
        question: 'Qual é a principal função dos bigodes (vibrissas) dos mamíferos?',
        options: [
            'Decoração',
            'Sensorial',
            'Proteção',
            'Aquecimento'
        ],
        correctAnswer: 1,
        explanation: 'Os bigodes (vibrissas) são órgãos sensoriais importantes que ajudam os mamíferos a detectar objetos e movimentos próximos, mesmo no escuro.'
    },
    {
        level: 'medium',
        question: 'Qual destes mamíferos hiberna verdadeiramente?',
        options: [
            'Urso-pardo',
            'Esquilo',
            'Lobo',
            'Raposa'
        ],
        correctAnswer: 1,
        explanation: 'Ao contrário da crença popular, ursos não hibernam verdadeiramente, mas entram em um estado de dormência. Os esquilos são verdadeiros hibernadores.'
    },
    {
        level: 'medium',
        question: 'Qual é o único mamífero que não pode pular?',
        options: [
            'Elefante',
            'Preguiça',
            'Hipopótamo',
            'Rinoceronte'
        ],
        correctAnswer: 0,
        explanation: 'O elefante é o único mamífero que não pode pular devido à sua estrutura óssea e peso. Todos os seus pés devem permanecer em contato com o solo para manter o equilíbrio.'
    },
    {
        level: 'medium',
        question: 'Qual destes mamíferos tem o período de gestação mais longo?',
        options: [
            'Leão',
            'Elefante',
            'Girafa',
            'Baleia'
        ],
        correctAnswer: 1,
        explanation: 'O elefante tem o maior período de gestação entre os mamíferos terrestres, durando aproximadamente 22 meses.'
    },
    {
        level: 'medium',
        question: 'Qual é o único mamífero que pode voar para trás?',
        options: [
            'Esquilo-voador',
            'Morcego',
            'Petauro',
            'Nenhum mamífero'
        ],
        correctAnswer: 1,
        explanation: 'O morcego é o único mamífero capaz de voar para trás, graças à sua estrutura alar única e capacidade de manobra excepcional.'
    },
    {
        level: 'medium',
        question: 'Qual destes mamíferos não tem cordas vocais?',
        options: [
            'Girafa',
            'Leão',
            'Elefante',
            'Macaco'
        ],
        correctAnswer: 0,
        explanation: 'As girafas não possuem cordas vocais. Elas se comunicam principalmente através de sons infrassônicos e linguagem corporal.'
    },
    {
        level: 'medium',
        question: 'Qual é o mamífero com o maior cérebro em relação ao corpo?',
        options: [
            'Golfinho',
            'Humano',
            'Elefante',
            'Chimpanzé'
        ],
        correctAnswer: 1,
        explanation: 'Os humanos têm o maior cérebro em relação ao tamanho do corpo entre todos os mamíferos, o que contribui para nossa capacidade cognitiva superior.'
    },

    // Hard level questions
    {
        level: 'hard',
        question: 'Qual destes mamíferos tem sangue verde?',
        options: [
            'Preguiça',
            'Ornitorrinco',
            'Musaranho',
            'Nenhum deles'
        ],
        correctAnswer: 0,
        explanation: 'As preguiças podem ter sangue esverdeado devido à presença de clorofila das algas que crescem em seu pelo, um caso único entre os mamíferos.'
    },
    {
        level: 'hard',
        question: 'Qual mamífero tem a maior concentração de hemoglobina?',
        options: [
            'Baleia',
            'Foca-de-weddell',
            'Golfinho',
            'Leão-marinho'
        ],
        correctAnswer: 1,
        explanation: 'A foca-de-weddell tem a maior concentração de hemoglobina entre os mamíferos, permitindo que ela mergulhe por até 80 minutos.'
    },
    {
        level: 'hard',
        question: 'Qual é o único mamífero conhecido que tem veneno em seus cotovelos?',
        options: [
            'Ornitorrinco',
            'Musaranho',
            'Toupeira-dourada',
            'Morcego-vampiro'
        ],
        correctAnswer: 0,
        explanation: 'O ornitorrinco macho possui esporões venenosos em seus cotovelos traseiros, sendo o único mamífero com esta característica.'
    },
    {
        level: 'hard',
        question: 'Qual mamífero tem o maior número de vértebras cervicais?',
        options: [
            'Girafa',
            'Preguiça',
            'Baleia',
            'Elefante'
        ],
        correctAnswer: 1,
        explanation: 'A preguiça tem até 10 vértebras cervicais, enquanto a maioria dos mamíferos tem 7, permitindo que ela gire sua cabeça em 270 graus.'
    },
    {
        level: 'hard',
        question: 'Qual destes mamíferos não tem estômago?',
        options: [
            'Ornitorrinco',
            'Equidna',
            'Morcego-vampiro',
            'Tatu'
        ],
        correctAnswer: 1,
        explanation: 'O equidna é o único mamífero conhecido que não possui estômago. Seu esôfago conecta-se diretamente ao intestino.'
    },
    {
        level: 'hard',
        question: 'Qual mamífero tem o maior coração em relação ao corpo?',
        options: [
            'Elefante',
            'Musaranho-pigmeu',
            'Baleia-azul',
            'Morcego'
        ],
        correctAnswer: 1,
        explanation: 'O musaranho-pigmeu tem o maior coração em proporção ao corpo, ocupando cerca de 12% de seu volume corporal.'
    },
    {
        level: 'hard',
        question: 'Qual é o único mamífero que não pode mover sua mandíbula para os lados?',
        options: [
            'Vaca',
            'Porco',
            'Coelho',
            'Cavalo'
        ],
        correctAnswer: 3,
        explanation: 'O cavalo é o único mamífero que não pode mover sua mandíbula lateralmente, limitando seus movimentos mastigatórios a para cima e para baixo.'
    },
    {
        level: 'hard',
        question: 'Qual mamífero tem o maior número de dentes?',
        options: [
            'Golfinho-do-rio',
            'Tatu-gigante',
            'Elefante',
            'Porco'
        ],
        correctAnswer: 0,
        explanation: 'O golfinho-do-rio pode ter até 250 dentes, o maior número entre todos os mamíferos.'
    },
    {
        level: 'hard',
        question: 'Qual destes mamíferos tem proteína fluorescente em seu pelo?',
        options: [
            'Esquilo-voador',
            'Coelho',
            'Gambá',
            'Toupeira'
        ],
        correctAnswer: 0,
        explanation: 'O esquilo-voador possui uma proteína que faz seu pelo brilhar com uma cor rosa fluorescente sob luz ultravioleta.'
    },
    {
        level: 'hard',
        question: 'Qual mamífero tem a maior taxa metabólica?',
        options: [
            'Musaranho-etrusco',
            'Morcego-abelha',
            'Camundongo',
            'Toupeira-dourada'
        ],
        correctAnswer: 0,
        explanation: 'O musaranho-etrusco tem a maior taxa metabólica entre os mamíferos, precisando comer constantemente para manter sua energia.'
    }
];