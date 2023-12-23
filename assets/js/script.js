// Questions
var questions = [
    {
        question: "What is the first step in wound care?",
        answers: [
            { text: "Assess the patient & wound", correct: true, explanation: "Assessing the patient's wound is considered the first step in wound care because it helps determine the appropriate treatment course. A thorough assessment can help identify the type of wound, its severity, and any underlying conditions that may affect the healing process This information is critical in developing a treatment plan tailored to the specific needs of the patient. Additionally, wound assessment can help identify any potential complications that may arise during the healing process, such as infection or delayed healing." },
            { text: "Develop plan of care", correct: false },
            { text: "Appropriate dressing for management", correct: false },
        ]
    },
    {
        question: "What is the purpose of debridement?",
        answers: [
            { text: "To return the wound to the proliferation phase and establish a viable wound bed", correct: false },
            { text: "To minimize trauma", correct: false },
            {
                text: "To remove infections or dead tissue", correct: true, explanation: "Removing dead tissue is important because it can delay the healing process and increase the risk of infection. Dead tissue can also provide a breeding ground for bacteria, which can lead to further complications.Infections can cause the wound to become red, swollen, and painful, and can even lead to sepsis if left untreated." },
        ]
    },
    {
        question: "What is the colour assessment of wound exudate focused on?",
        answers: [
            { text: "Colour, consistency, odour, amount", correct: true, explanation: "By assessing the color, odour and amount of wound exudate, healthcare professionals can identify any potential complications that may arise during the healing process, such as infection or delayed healing." },
            { text: "Colour, consistency, odour", correct: false },
            { text: "Colour, consistency", correct: false },
        ]
    },
    {
        question: "What is the most common type of wound?",
        answers: [
            { text: "Arterial", correct: false },
            { text: "Venous", correct: true, explanation: "Venous ulcers are the most common type of leg ulcer, accounting for more than 60% of all cases." },
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
            { text: "Arterial insufficiency", correct: true, explanation: "Risk factors for arterial insufficiency include smoking, high blood pressure, high cholesterol, diabetes, and obesity." },
        ]
    },
    {
        question: "What is the most common cause of diabetic ulcers?",
        answers: [
            { text: "Uncontrolled blood-sugar levels", correct: false },
            { text: "Diabetic neuropathy", correct: true, explanation: "Diabetic neuropathy is a type of nerve damage that can occur if you have diabetes. High blood glucose can injure nerves throughout the body, most often damaging nerves in the legs and feet. This nerve damage can cause a loss of sensation in the feet, making it difficult to feel cuts, blisters, or other injuries. If left untreated, these injuries can develop into diabetic ulcers." },
            { text: "Venous/Arterial insufficiency", correct: false },
        ]
    },
    {
        question: "What is the most common dressing used to treat venous ulcers?",
        answers: [
            { text: "Alginate-based dressings", correct: false },
            { text: "Compression", correct: true, explanation: "Compression dressings aid in improving poor circulation, which is one of the main culprits of venous ulcers." },
            { text: "Hydrocolloid", correct: false },
        ]
    },
    {
        question: "What is the most common dressing used to treat pressure ulcers?",
        answers: [
            { text: "Foam dressing", correct: true, explanation: " Foam dressings are highly absorbent and can help to manage exudate, whilst also providing a layer of cushioning." },
            { text: "Charcoal dressing", correct: false },
            { text: "Hydrocolloid", correct: false },
        ]
    },
    {
        question: "What is the best way to prevent pressure ulcers from forming?",
        answers: [
            { text: "Change position frequently", correct: true, explanation: "Changing position is one of the best ways of preventing pressure ulcers as this alleviates pressure from bony prominent areas" },
            { text: "Use a pressure-relieving mattress/cushion", correct: false },
            { text: "Apply barrier cream", correct: false },
        ]
    },
    {
        question: "What is the best way to manage a wound with heavy exudate?",
        answers: [
            { text: "Use a hydrofiber dressing", correct: true, explanation: "Hydrofiber dressings are a type of absorptive dressing that contain sodium carboxymethylcellulose. They are highly absorbent and can absorb a large amount of wound exudate, transforming it into a soft gel that creates a moist wound environment. This gel helps to promote autolytic debridement, which is the process of removing dead tissue from a wound. Hydrofiber dressings are also able to maintain their integrity even when they are wet, which makes them ideal for managing heavy exudate." },
            { text: "Use a foam dressing", correct: false },
            { text: "Use a transparent film dressing", correct: false },
        ]
    },
    {
        question: "What is the most important factor in wound healing?",
        answers: [
            { text: "Rest", correct: false },
            { text: "Exercise", correct: false },
            { text: "Optimal nutrition", correct: true, explanation: "Nutrition is a critical factor in wound healing because it plays a vital role in the body’s ability to repair and regenerate tissue. Proper nutrition is essential for optimal wound healing, as it provides the body with the necessary nutrients to support the healing process. A balanced diet that includes adequate amounts of protein, carbohydrates, fats, vitamins, and minerals is essential for wound healing. Protein is particularly important, as it is necessary for the production of new tissue. Vitamins such as vitamin C and vitamin A are also important, as they play a role in collagen synthesis and immune function, respectively. Additionally, adequate hydration is essential for wound healing, as it helps to maintain the skin elasticity and promotes the flow of nutrients to the wound site." },
        ]
    },
    {
        question: "What is the best way to manage a wound with minimal exudate?",
        answers: [
            { text: "Use a hydrocolloid dressing", correct: true, explanation: "Hydrocolloid dressings are ideal for minimally exudating wounds because they are absorptive dressings that can help to maintain a moist wound environment. They are composed of a combination of gel-forming substances that in the presence of wound exudate, cross-react to form a gel. This gel helps to promote autolytic debridement, which is the process of removing dead tissue from a wound." },
            { text: "Use a hydrogel dressing", correct: false },
            { text: "Use a silicone gel sheet", correct: false },
        ]
    },
    {
        question: "What is the  best way to manage a wound with exposed bone or tendon?",
        answers: [
            { text: "Use a hydrocolloid dressing", correct: false },
            { text: "Use a collagen dressing", correct: true, explanation: "In addition to promoting tissue regeneration, collagen dressings can also help to maintain a moist wound environment, which is essential for optimal wound healing. They can also help to absorb excess exudate and provide a protective barrier against bacteria and other contaminants." },
            { text: "Use a silver dressing", correct: false },
        ]
    },
    {
        question: "What is the best way to manage a wound with a foul odour?",
        answers: [
            { text: "Use a charcoal dressing", correct: true, explanation: "The charcoal layer of the wound dressing absorbs the bacteria and localized wound toxins, as well as other odour causing matter found in the wound bed." },
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

