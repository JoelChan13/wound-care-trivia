// Questions
const questions = [
    {
        question: "What is the first step in wound care?",
        answers: [
            { text: "Assess the patient & wound", correct:true},
            { text: "Develop plan of care", correct: false},
            { text: "Appropriate dressing for management", correct: false},
        ]
    },
    {
        question: "What is the purpose of debridement?",
        answers: [
            { text: "To return the wound to the proliferation phase and establish a viable wound bed", correct: false},
            { text: "To minimize trauma", correct: false},
            { text: "To remove infections or dead tissue", correct: true},
        ]
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("bttn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function which resets the previous question and answer including HTML in index file
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBttn = e.target;
    const isCorrect = selectedBttn.dataset.correct === "true";
    if(isCorrect){
        selectedBttn.classList.add("correct");
    }else{
        selectedBttn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Function which will initiate quiz & show the questions and their answers
startQuiz();

