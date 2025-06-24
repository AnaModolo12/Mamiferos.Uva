// Game data and configuration
const levels = [
    {
        id: 'easy',
        title: 'Nível Fácil',
        icon: '🐿️',
        questionCount: 10,
        difficulty: 'Fácil'
    },
    {
        id: 'medium',
        title: 'Nível Médio',
        icon: '🦊',
        questionCount: 10,
        difficulty: 'Médio'
    },
    {
        id: 'hard',
        title: 'Nível Difícil',
        icon: '🦁',
        questionCount: 10,
        difficulty: 'Difícil'
    }
];

// Initialize game state
let currentScreen = 'welcomeScreen';
let currentLevel = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let questionsForLevel = [];

// DOM elements - Welcome & Navigation
const welcomeScreen = document.getElementById('welcomeScreen');
const howToPlayScreen = document.getElementById('howToPlayScreen');
const creditsScreen = document.getElementById('creditsScreen');
const levelSelectionScreen = document.getElementById('levelSelection');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

// Navigation buttons
const startGameBtn = document.getElementById('startGameBtn');
const howToPlayBtn = document.getElementById('howToPlayBtn');
const creditsBtn = document.getElementById('creditsBtn');
const howToPlayBackBtn = document.getElementById('howToPlayBackBtn');
const creditsBackBtn = document.getElementById('creditsBackBtn');
const goToGameBtn = document.getElementById('goToGameBtn');
const levelSelectionBackBtn = document.getElementById('levelSelectionBackBtn');

// Quiz elements
const levelTitle = document.getElementById('levelTitle');
const backButton = document.getElementById('backButton');
const progressCounter = document.getElementById('progressCounter');
const progressBar = document.getElementById('progressBar');
const progressDots = document.getElementById('progressDots');
const questionText = document.getElementById('questionText');
const options = document.getElementById('options');
const explanation = document.getElementById('explanation');

// Results elements
const scoreElement = document.getElementById('score');
const scoreTextElement = document.getElementById('scoreText');
const messageElement = document.getElementById('message');
const restartButton = document.getElementById('restartButton');
const homeButton = document.getElementById('homeButton');
const shareButton = document.getElementById('shareButton');

// Initialize the game
function initGame() {
    // Initialize welcome screen navigation
    setupNavigation();
    
    // Create level cards
    setupLevelSelection();
}

// Set up navigation between screens
function setupNavigation() {
    // Welcome screen buttons
    startGameBtn.addEventListener('click', () => showScreen('levelSelection'));
    
    howToPlayBtn.addEventListener('click', () => showScreen('howToPlayScreen'));
    
    creditsBtn.addEventListener('click', () => showScreen('creditsScreen'));
    
    // How to play screen navigation
    howToPlayBackBtn.addEventListener('click', () => showScreen('welcomeScreen'));
    
    goToGameBtn.addEventListener('click', () => showScreen('levelSelection'));
    
    // Credits screen navigation
    creditsBackBtn.addEventListener('click', () => showScreen('welcomeScreen'));
    
    // Level selection back button
    levelSelectionBackBtn.addEventListener('click', () => showScreen('welcomeScreen'));
    
    // Back button on quiz screen
    backButton.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja voltar? Seu progresso será perdido.')) {
            showScreen('levelSelection');
        }
    });
    
    // Result screen buttons
    restartButton.addEventListener('click', () => {
        startQuiz(currentLevel);
    });
    
    homeButton.addEventListener('click', () => {
        showScreen('levelSelection');
    });
    
    shareButton.addEventListener('click', () => {
        shareResults();
    });
}

// Create level selection cards
function setupLevelSelection() {
    const levelsGrid = document.querySelector('.levels-grid');
    
    levelsGrid.innerHTML = '';
    
    levels.forEach(level => {
        const levelCard = document.createElement('div');
        levelCard.className = 'level-card';
        levelCard.dataset.level = level.id;
        
        levelCard.innerHTML = `
            <div class="level-card-header">
                <span class="level-icon">${level.icon}</span>
                <h3 class="level-title">${level.title}</h3>
            </div>
            <div class="level-info">
                <span class="question-count">${level.questionCount} perguntas</span>
                <span class="difficulty-badge">${level.difficulty}</span>
            </div>
        `;
        
        levelCard.addEventListener('click', () => {
            startQuiz(level);
        });
        
        levelsGrid.appendChild(levelCard);
    });
}

// Switch between different screens
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show the requested screen
    document.getElementById(screenId).classList.add('active');
    
    currentScreen = screenId;
}

// Start the quiz for a selected level
function startQuiz(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    
    // Filter questions for this level
    questionsForLevel = questions.filter(q => q.level === level.id);
    
    // Set the level title
    levelTitle.textContent = level.title;
    
    // Setup progress indicators
    setupProgressIndicators();
    
    // Load the first question
    loadQuestion();
    
    // Switch to quiz screen
    showScreen('quizScreen');
}

// Set up progress bar and dots
function setupProgressIndicators() {
    progressDots.innerHTML = '';
    
    // Create progress dots
    for (let i = 0; i < questionsForLevel.length; i++) {
        const dot = document.createElement('div');
        dot.className = i === 0 ? 'progress-dot current' : 'progress-dot';
        progressDots.appendChild(dot);
    }
    
    updateProgress();
}

// Update progress indicators
function updateProgress() {
    // Update text counter
    progressCounter.textContent = `${currentQuestionIndex + 1}/${questionsForLevel.length}`;
    
    // Update progress bar
    const progressPercentage = ((currentQuestionIndex + 1) / questionsForLevel.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    
    // Update dots
    const dots = progressDots.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('completed', 'current');
        
        if (index < currentQuestionIndex) {
            dot.classList.add('completed');
        } else if (index === currentQuestionIndex) {
            dot.classList.add('current');
        }
    });
}

// Load the current question
function loadQuestion() {
    const question = questionsForLevel[currentQuestionIndex];
    
    // Set question text
    questionText.textContent = question.question;
    
    // Reset selected answer
    selectedAnswer = null;
    
    // Hide explanation
    explanation.classList.add('hidden');
    
    // Create options
    createOptions(question);
    
    // Update progress
    updateProgress();
}

// Create answer options for the current question
function createOptions(question) {
    options.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.index = index;
        
        optionElement.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span>${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectOption(optionElement, index, question));
        
        options.appendChild(optionElement);
    });
}

// Handle option selection
function selectOption(optionElement, index, question) {
    // Ignore if an answer is already selected
    if (selectedAnswer !== null) return;
    
    selectedAnswer = index;
    
    // Mark as selected
    const allOptions = options.querySelectorAll('.option');
    allOptions.forEach(option => {
        option.classList.add('disabled');
    });
    
    optionElement.classList.add('selected');
    
    // Check if correct
    const correct = index === question.correctAnswer;
    
    // After a short delay, show the result
    setTimeout(() => {
        // Apply correct/incorrect styles
        optionElement.classList.remove('selected');
        optionElement.classList.add(correct ? 'correct' : 'incorrect');
        
        // Mark the correct answer if the selected one was wrong
        if (!correct) {
            allOptions[question.correctAnswer].classList.add('correct');
        }
        
        // Update score
        if (correct) {
            score++;
        }
        
        // Show explanation
        explanation.innerHTML = `
            <h4>${correct ? '✓ Correto!' : '✗ Incorreto!'}</h4>
            <p>${question.explanation}</p>
        `;
        explanation.classList.remove('hidden');
        
        // After showing the answer, proceed to next question
        setTimeout(() => {
            if (currentQuestionIndex < questionsForLevel.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                showResults();
            }
        }, 7000);
    }, 500);
}

// Show quiz results
function showResults() {
    // Calculate score percentage
    const scorePercent = Math.round((score / questionsForLevel.length) * 100);
    
    // Display score
    scoreElement.textContent = `${scorePercent}%`;
    scoreTextElement.textContent = `${score} de ${questionsForLevel.length} respostas corretas`;
    
    // Determine message based on score
    let messageClass = '';
    let message = '';
    
    if (scorePercent >= 90) {
        messageClass = 'excellent';
        message = 'Excelente! Você é um especialista em mamíferos!';
    } else if (scorePercent >= 70) {
        messageClass = 'good';
        message = 'Muito bom! Você conhece bastante sobre mamíferos!';
    } else if (scorePercent >= 50) {
        messageClass = 'average';
        message = 'Bom trabalho! Continue aprendendo sobre os mamíferos.';
    } else {
        messageClass = 'needs-improvement';
        message = 'Continue praticando! Os mamíferos têm muito mais a ensinar.';
    }
    
    messageElement.className = `message ${messageClass}`;
    messageElement.textContent = message;
    
    // Show results screen
    showScreen('resultsScreen');
}

// Share results function
function shareResults() {
    const scorePercent = Math.round((score / questionsForLevel.length) * 100);
    const text = `Eu completei o ${currentLevel.title} do Mammalia Quiz com ${scorePercent}% de acertos! Teste seus conhecimentos sobre mamíferos também!`;
    
    // Try to use the Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'Meu Resultado no Mammalia Quiz',
            text: text,
            // You could add a URL here if the quiz is hosted online
        }).catch(err => {
            // Fallback to copying to clipboard
            copyToClipboard(text);
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        copyToClipboard(text);
    }
}

// Helper function to copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Resultado copiado para a área de transferência!');
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);