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
