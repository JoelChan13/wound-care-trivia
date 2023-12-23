// Questions
var questions = [
    {
        question: "What is the first step in wound care?",
        answers: [
            { text: "Assess the patient & wound", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Develop plan of care", correct: false },
            { text: "Appropriate dressing for management", correct: false },
        ]
    },
    {
        question: "What is the purpose of debridement?",
        answers: [
            { text: "To return the wound to the proliferation phase and establish a viable wound bed", correct: false },
            { text: "To minimize trauma", correct: false },
            { text: "To remove infections or dead tissue", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
        ]
    },
    {
        question: "What is the colour assessment of wound exudate focused on?",
        answers: [
            { text: "Colour, consistency, odour, amount", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Colour, consistency, odour", correct: false },
            { text: "Colour, consistency", correct: false },
        ]
    },
    {
        question: "What is the most common type of wound?",
        answers: [
            { text: "Arterial", correct: false },
            { text: "Venous", correct: true,  explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Diabetic", correct: false },
        ]
    },
    {
        question: "What is the most common cause of venous ulcers?",
        answers: [
            { text: "Trauma", correct: false },
            { text: "Infection", correct: false },
            { text: "Venous insufficiency", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
        ]
    },
    {
        question: "What is the most common cause of arterial ulcers? ",
        answers: [
            { text: "Trauma", correct: false },
            { text: "Infection", correct: false },
            { text: "Arterial insufficiency", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
        ]
    },
    {
        question: "What is the most common cause of diabetic ulcers?",
        answers: [
            { text: "Uncontrolled blood-sugar levels", correct: false },
            { text: "Diabetic neuropathy", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Venous/Arterial insufficiency", correct: false },
        ]
    },
    {
        question: "What is the most common dressing used to treat venous ulcers?",
        answers: [
            { text: "Alginate-based dressings", correct: false },
            { text: "Compression", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Hydrocolloid", correct: false },
        ]
    },
    {
        question: "What is the most common dressing used to treat pressure ulcers?",
        answers: [
            { text: "Foam dressing", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Charcoal dressing", correct: false },
            { text: "Hydrocolloid", correct: false },
        ]
    },
    {
        question: "What is the best way to prevent pressure ulcers from forming?",
        answers: [
            { text: "Change position frequently", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Use a pressure-relieving mattress/cushion", correct: false },
            { text: "Apply barrier cream", correct: false },
        ]
    },
    {
        question: "What is the best way to manage a wound with heavy exudate?",
        answers: [
            { text: "Use a hydrofiber dressing", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Use a foam dressing", correct: false },
            { text: "Use a transparent film dressing", correct: false },
        ]
    },
    {
        question: "What is the most important factor in wound healing?",
        answers: [
            { text: "Rest", correct: false },
            { text: "Exercise", correct: false },
            { text: "Optimal nutrition", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
        ]
    },
    {
        question: "What is the best way to manage a wound with minimal exudate?",
        answers: [
            { text: "Use a hydrocolloid dressing", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Use a hydrogel dressing", correct: false },
            { text: "Use a silicone gel sheet", correct: false },
        ]
    },
    {
        question: "What is the  best way to manage a wound with exposed bone or tendon?",
        answers: [
            { text: "Use a hydrocolloid dressing", correct: false },
            { text: "Use a collagen dressing", correct: true, explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Use a silver dressing", correct: false },
        ]
    },
    {
        question: "What is the best way to manage a wound with a foul odor?",
        answers: [
            { text: "Use a charcoal dressing", correct: true,  explanation: "Assessing the patient and wound is the first step to understand the condition." },
            { text: "Use a silver dressing", correct: false },
            { text: "Use an alginate dressing", correct: false },
        ]
    }
];

// Retrieve the previous score and username from localStorage
let previousScore = localStorage.getItem("quizScore");
let previousUsername = localStorage.getItem("quizUsername");

// Variables

// Score & Username
let currentQuestionIndex = 0;
let score = 0;
let username = "";

// Retrieve high scores from localStorage
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Function to display high scores in the table
function displayHighScores() {
    const highScoresTable = document.getElementById("highScoresTable");
    if (highScoresTable) {
        const tbody = highScoresTable.querySelector("tbody");

        // Clear previous entries
        tbody.innerHTML = "";

        // Add new entries
        highScores.forEach(entry => {
            const row = document.createElement("tr");
            const usernameCell = document.createElement("td");
            usernameCell.textContent = entry.username;
            const scoreCell = document.createElement("td");
            scoreCell.textContent = entry.score;
            row.appendChild(usernameCell);
            row.appendChild(scoreCell);
            tbody.appendChild(row);
        });
    } else {
        console.error("highScoresTable not found in HTML");
    }
}

// Add the current score to the high scores
highScores.push({ username, score });

// Sort high scores in descending order
highScores.sort((a, b) => b.score - a.score);

// Keep only the top 5 scores
highScores = highScores.slice(0, 5);

// Store high scores in localStorage
localStorage.setItem("highScores", JSON.stringify(highScores));

// Display high scores in the console
console.log("High Scores:", highScores);

// Display high scores in the table
displayHighScores();

// Function which resets the previous question and answer including HTML in index file
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Prompts a colour change in buttons, highlighting correct and incorrect answers accordingly 
function selectAnswer(e) {
    const selectedBttn = e.target;
    const isCorrect = selectedBttn.dataset.correct === "true";

    // Add explanation after selecting an answer
    const explanation = document.createElement("p");
    explanation.classList.add("explanation");
    explanation.innerHTML += "Rationale: " + getExplanation();

    // Display the explanation
    questionElement.appendChild(explanation);


    if (isCorrect) {
        selectedBttn.classList.add("correct");
        score++;
    } else {
        selectedBttn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Function to get the explanation for the current question
function getExplanation() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct);

    return correctAnswer.explanation || "No explanation available.";
}

// Presents the final score and options to retry or return to home
function showScore() {
    resetState();
    const finalScore = `Well done ${username}! You scored ${score} out of ${questions.length}`;
    questionElement.innerHTML = finalScore;

    // Save username and score to local storage
    saveToLocalStorage(username, score);

    // Buttons for retry and return to home
    nextButton.innerHTML = "Retry";
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Return to Home";
    homeButton.classList.add("bttn");
    homeButton.addEventListener("click", returnToHome);
    answerButtons.appendChild(homeButton);

    nextButton.style.display = "block";
}

// Function to save username and score to local storage
function saveToLocalStorage(username, score) {
    // Check if local storage is supported
    if (typeof Storage !== "undefined") {
        // Retrieve existing high scores from local storage
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

        // Add current score to high scores
        highScores.push({ username, score });

        // Sort high scores in descending order
        highScores.sort((a, b) => b.score - a.score);

        // Keep only the top 5 scores
        const top5Scores = highScores.slice(0, 5);

        // Save high scores back to local storage
        localStorage.setItem("highScores", JSON.stringify(top5Scores));
    } else {
        console.error("Local storage is not supported");
    }
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();

        // Display high scores in the table
        displayHighScores();
    }
}

// Shuffle questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

//Replace questions in HTML file with questions from linked Javascript file 
const questionElement = document.getElementById("question");

// Shuffle answers
function shuffleAnswers() {
    questions.forEach(question => {
        for (let i = question.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
        }
    });
};

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-bttn");

// Start Quiz - Reset Questions & Show Next Question
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    username = "";

    
    // Prompt user for username
    username = prompt("Enter your username:", username);

    nextButton.innerHTML = "Next";
    shuffleQuestions();
    shuffleAnswers();
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
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

// Function prompted when user clicks next button to proceed with next question
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Function to handle the return to home button
function returnToHome() {
    window.location.href = "/index.html";
}

// Function which will initiate quiz & show the questions and their answers
startQuiz();

