
export function updateQuestionUI(question) {
    const questionTitle = document.getElementById("question-title");
    const questionImage = document.getElementById("question-image");
    const answersContainer = document.getElementById("answers");

    questionTitle.innerText = question.title;
    questionImage.src = question.image;
    answersContainer.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => {
            document.querySelectorAll("#answers button").forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
            document.getElementById("next-button").disabled = false;
        };
        answersContainer.appendChild(button);
    });
}

export function showResultsUI(score, totalQuestions) {
    const resultContainer = document.getElementById("result");
    resultContainer.style.display = "block";
    const percentage = (score / totalQuestions) * 100;
    resultContainer.innerHTML = `
        <div class="circular-progress" style="--percentage: ${percentage}">
            <div class="inner-circle">
                <span class="percentage">${Math.round(percentage)}%</span>
            </div>
        </div>
        <h2>Your Score: ${score} / ${totalQuestions}</h2>
    `;
    document.getElementById("exam-container").style.display = "none";
}

export function updateTimerUI(timeRemaining) {
    const timerElement = document.getElementById("timer");
    timerElement.innerText = `Time Remaining: ${timeRemaining}s`;
}
