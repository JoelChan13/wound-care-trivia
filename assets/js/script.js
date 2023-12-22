// Questions
var questions = [
    {
        question: "What is the first step in wound care?",
        answers: [
            {text: "Assess the patient & wound", correct:true},
            {text: "Develop plan of care", correct: false},
            {text: "Appropriate dressing for management", correct: false},
        ]
    },
    {
        question: "What is the purpose of debridement?",
        answers: [
            {text: "To return the wound to the proliferation phase and establish a viable wound bed", correct: false},
            {text: "To minimize trauma", correct: false},
            {text: "To remove infections or dead tissue", correct: true},
        ]
    },
    {
        question: "What is the colour assessment of wound exudate focused on?",
        answers: [
            { text: "Colour, consistency, odour, amount", correct: true },
            { text: "Colour, consistency, odour", correct: false },
            { text: "Colour, consistency", correct: false },
        ]
    },
    {
        question: "What is the most common type of wound?",
        answers: [
            { text: "Arterial", correct: false },
            { text: "Venous", correct: true },
            { text: "Diabetic", correct: false },
        ]
    },
    {
        question: "What is the most common cause of venous ulcers?",
        answers: [
            { text: "Trauma", correct: false },
            { text: "Infection", correct: false },
            { text: "Venous insufficiency", correct: true },
        ]
    },
    {
        question: "What is the most common cause of arterial ulcers? ",
        answers: [
            { text: "Trauma", correct: false },
            { text: "Infection", correct: false },
            { text: "Arterial insufficiency", correct: true },
        ]
    },
    {
        question: "What is the most common cause of diabetic ulcers?",
        answers: [
            { text: "Uncontrolled blood-sugar levels", correct: false },
            { text: "Diabetic neuropathy", correct: true },
            { text: "Venous/Arterial insufficiency", correct: false },
        ]
    },
    {
        question: "What is the most common dressing used to treat venous ulcers?",
        answers: [
            {text: "Alginate-based dressings", correct: false},
            {text: "Compression", correct: true},
            {text: "Hydrocolloid", correct: false},
        ]
    },
    {
        question: "What is the most common dressing used to treat pressure ulcers?",
        answers: [
            {text: "Foam dressing", correct: true},
            {text: "Charcoal dressing", correct: false},
            {text: "Hydrocolloid", correct: false},
        ]
    },
    {
        question: "What is the best way to prevent pressure ulcers from forming?",
        answers: [
            { text: "Change position frequently", correct: true },
            { text: "Use a pressure-relieving mattress/cushion", correct: false },
            { text: "Apply barrier cream", correct: false },
        ]
    },
    {
        question: "What is the best way to manage a wound with heavy exudate?",
        answers: [
            { text: "Use a hydrofiber dressing", correct: true },
            { text: "Use a foam dressing", correct: false },
            { text: "Use a transparent film dressing", correct: false },
        ]
    },
    {
        question: "What is the most important factor in wound healing?",
        answers: [
            { text: "Rest", correct: false },
            { text: "Exercise", correct: false },
            { text: "Optimal nutrition", correct: true },
        ]
    },
    {
        question: "What is the best way to manage a wound with minimal exudate?",
        answers: [
            {text: "Use a hydrocolloid dressing", correct: true},
            {text: "Use a hydrogel dressing", correct: false},
            {text: "Use a silicone gel sheet", correct: false},
        ]
    },
    {
        question: "What is the  best way to manage a wound with exposed bone or tendon?",
        answers: [
            {text: "Use a hydrocolloid dressing", correct: false},
            {text: "Use a collagen dressing", correct: true},
            {text: "Use a silver dressing", correct: false},
        ]
    },
    {
        question: "What is the best way to manage a wound with a foul odor?",
        answers: [
            {text: "Use a charcoal dressing", correct: true},
            {text: "Use a silver dressing", correct: false},
            {text: "Use an alginate dressing", correct: false},
        ]
    }
];

// Score & Username
let currentQuestionIndex = 0;
let score = 0;
let username = "";

// Variables

// Shuffle questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Replace questions in HTML file with questions from linked Javascript file 
const questionElement = document.getElementById("question");

// Shuffle answers
function shuffleAnswers() {
    questions.forEach(question => {
        for (let i = question.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
        }
    });
}

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-bttn");

// Start Quiz - Reset Questions & Show Next Question
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    username = "";

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

// Function which resets the previous question and answer including HTML in index file
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Prompts a color change in buttons, highlighting correct and incorrect answers accordingly 
function selectAnswer(e) {
    const selectedBttn = e.target;
    const isCorrect = selectedBttn.dataset.correct === "true";
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

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
        promptForUsername();
    }
}

// Function prompted when user clicks next button to proceed with next question
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Function to handle the return home button
function returnToHome() {
    resetState();
}

// Function to prompt the user for a username
function promptForUsername() {
    const enteredUsername = prompt("Enter your username:");
    if (enteredUsername !== null && enteredUsername !== "") {
        username = enteredUsername;
        saveScore();
        startQuiz();
    } else {
        // If the user cancels or enters an empty username, show the score again
        showScore();
    }
}

// Function to save the username and score in local storage
function saveScore() {
    const userScore = {
        username: username,
        score: score
    };
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    scores.push(userScore);
    localStorage.setItem("quizScores", JSON.stringify(scores));

    // Log to console
    console.log(`Username: ${username}, Score: ${score}`);
}

// Function to display high scores in the highscores.html table
function displayHighScores() {
    const highScoresTable = document.getElementById("highScoresTable");
    const highScores = getHighScoresFromLocalStorage();

    // Clear the existing table content
    highScoresTable.querySelector("tbody").innerHTML = "";

    // Populate the table with high scores
    highScores.forEach(score => {
        const row = highScoresTable.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = score.username;
        cell2.textContent = score.score;
    });
}

// Function to get high scores from local storage
function getHighScoresFromLocalStorage() {
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    return scores.sort((a, b) => b.score - a.score).slice(0, 10); // Get the top 10 scores
}

// Presents the final score and options to retry or return home
function showScore() {
    resetState();
    const finalScore = `Well done ${username}! You scored ${score} out of ${questions.length}`;
    questionElement.innerHTML = finalScore;

    // Buttons for retry and return home
    nextButton.innerHTML = "Retry";
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Return to Home";
    homeButton.classList.add("bttn");
    homeButton.addEventListener("click", returnToHome);
    answerButtons.appendChild(homeButton);

    nextButton.style.display = "block";
}

// Function which will initiate quiz & show the questions and their answers
startQuiz();
