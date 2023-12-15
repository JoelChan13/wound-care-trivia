// Questions
const questions = [
    {
        question: "What is the first step in wound care?",
        answers: [
            { text: "Assess the patient & wound", correct:true},
            { text: "Develop plan of care", correct: false},
            { text: "Appropriate dressing for management", correct: false},
        ]
    }
    {
        question: "What is the purpose of debridement?",
        answers: [
            { text: "To return the wound to the proliferation phase and establish a viable wound bed", correct: false},
            { text: "To minimize trauma", correct: false},
            { text: "To remove infections or dead tissue", correct: true},
        ]: 
    }
];

// Variables
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-bttn");

// Score
let currentQuestionIndex = 0;
let score = 0;

// Start Quiz - Reset Questions & Show Next Question
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Answers
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("bttn");
        answerButtons.appendChild(button);
    });
}

// Function which will initiate quiz & show the questions and their answers
startQuiz();

