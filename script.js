document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Mobile Menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Constitution Quiz
const quizData = [
    { question: "When was the Indian Constitution adopted?", options: ["1947", "1949", "1950", "1952"], answer: 1 },
    { question: "How many fundamental rights are there?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "Who is known as the architect of the Constitution?", options: ["Gandhi", "Nehru", "Ambedkar", "Sardar"], answer: 2 }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(idx);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(idx) {
    if (idx === quizData[currentQuestion].answer) score++;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('result').textContent = `You scored ${score}/${quizData.length}`;
        document.getElementById('result').style.display = 'block';
    }
}

loadQuestion();

// Voting Simulator
document.getElementById('start-sim').addEventListener('click', () => {
    document.getElementById('sim-steps').style.display = 'block';
    document.getElementById('start-sim').style.display = 'none';
});

document.getElementById('verify-btn').addEventListener('click', () => {
    if (document.getElementById('voter-id').value) {
        document.getElementById('vote-options').style.display = 'block';
    }
});

document.querySelectorAll('.candidate').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('confirmation').style.display = 'block';
    });
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! Thank you for your feedback.');
});
