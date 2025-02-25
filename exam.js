import { updateQuestionUI, showResultsUI, updateTimerUI } from "./ui.js";
import questions from "./questions.js";

class Exam {
    constructor(questions) {
        this.questions = this.shuffleArray(questions);
        this.currentIndex = 0;
        this.score = 0;
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5); 
    }

    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }

    nextQuestion(selectedAnswer) {
        if (this.getCurrentQuestion().isCorrect(selectedAnswer)) {
            this.score++;
        }
        this.currentIndex++;
    }

    isFinished() {
        return this.currentIndex >= this.questions.length;
    }
}

const exam = new Exam(questions);
const nextButton = document.getElementById("next-button");
const startButton = document.getElementById("start-button");
const studentNameInput = document.getElementById("student-name");
let timer;

studentNameInput.addEventListener("input", () => {
    startButton.disabled = studentNameInput.value.trim() === "";
});


function loadQuestion() {
    if (exam.isFinished()) {
        showResultsUI(exam.score, questions.length);
        return;
    }
    updateQuestionUI(exam.getCurrentQuestion());
}


nextButton.onclick = () => {
    const selectedButton = document.querySelector("#answers .selected");
    if (selectedButton) {
        exam.nextQuestion(selectedButton.innerText);
        loadQuestion();
    }
};


function startTimer(duration) {
    let timeRemaining = duration;
    timer = setInterval(() => {
        updateTimerUI(timeRemaining);
        if (timeRemaining-- <= 0) {
            clearInterval(timer);
            showResultsUI(exam.score, questions.length);
        }
    }, 1000);
}


startButton.onclick = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("exam-container").style.display = "block";
    loadQuestion();
    startTimer(60); 
};
