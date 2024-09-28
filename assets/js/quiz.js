const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink and Text Markup Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: 0
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            "text-color",
            "font-color",
            "color",
            "text-style"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<head>",
            "<h1>"
        ],
        correctAnswer: 3
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: [
            "bgcolor",
            "background-color",
            "color-background",
            "bg-color"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "<a url='http://www.example.com'>Example</a>",
            "<a href='http://www.example.com'>Example</a>",
            "<hyperlink='http://www.example.com'>Example</hyperlink>",
            "<link='http://www.example.com'>Example</link>"
        ],
        correctAnswer: 1
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const takeQuizBtn = document.getElementById('take-quiz-btn');
    const quizModal = document.getElementById('quiz-modal');
    const closeQuizBtn = document.getElementById('close-quiz');
    const submitQuizBtn = document.getElementById('submit-quiz');
    const quizQuestionsContainer = document.getElementById('quiz-questions');
    const quizResults = document.getElementById('quiz-results');
    const quizScore = document.getElementById('quiz-score');
    const questionFeedback = document.getElementById('question-feedback');

    takeQuizBtn.addEventListener('click', openQuiz);
    closeQuizBtn.addEventListener('click', closeQuiz);
    submitQuizBtn.addEventListener('click', submitQuiz);


function openQuiz() {
    quizModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent body scrolling when modal is open
    generateQuiz();
}

function closeQuiz() {
    quizModal.style.display = 'none';
    document.body.style.overflow = ''; // Restore body scrolling
    quizQuestionsContainer.innerHTML = '';
    quizResults.style.display = 'none';
    submitQuizBtn.style.display = 'block';
}

function generateQuiz() {
    quizQuestionsContainer.innerHTML = '';
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');
        questionDiv.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
            <div class="quiz-options">
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${i}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        quizQuestionsContainer.appendChild(questionDiv);
    });
    
    // Scroll to the top of the quiz content
    quizModal.scrollTop = 0;
}


    function submitQuiz() {
        let score = 0;
        let feedback = '';

        quizQuestions.forEach((q, index) => {
            const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
            if (selectedAnswer) {
                const userAnswer = parseInt(selectedAnswer.value);
                if (userAnswer === q.correctAnswer) {
                    score++;
                    feedback += `<p class="correct">Question ${index + 1}: Correct!</p>`;
                } else {
                    feedback += `<p class="incorrect">Question ${index + 1}: Incorrect. The correct answer was: ${q.options[q.correctAnswer]}</p>`;
                }
            } else {
                feedback += `<p class="incorrect">Question ${index + 1}: Not answered.</p>`;
            }
        });

        quizScore.textContent = `${score} out of ${quizQuestions.length}`;
        questionFeedback.innerHTML = feedback;
        quizResults.style.display = 'block';
        submitQuizBtn.style.display = 'none';
    }
});