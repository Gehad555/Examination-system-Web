class Question {
    constructor(title, image, answers, correctAnswer) {
        this.title = title;
        this.image = image;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    isCorrect(answer) {
        return answer === this.correctAnswer;
    }
}

const questions = [
    new Question("What is the name of this landmark?", "images/pyramids.jpg", ["Taj Mahal", "Eiffel Tower", "Pyramids"], "Pyramids"),
    new Question("What is the name of this animal?", "images/panda.jpg", ["Tiger", "Panda", "Polar Bear"], "Panda"),
    new Question("What is the name of this fruit?", "images/kiwi.jpg", ["Apple", "Kiwi", "Banana"], "Kiwi"),
    new Question("Which country's flag is this?", "images/japan-flag.jpg", ["China", "South Korea", "Japan"], "Japan"),
    new Question("Who is this scientist?", "images/einstein.jpg", ["Newton", "Einstein", "Galileo"], "Einstein"),
    new Question("Which planet is this?", "images/saturn.jpg", ["Mars", "Venus", "Saturn"], "Saturn"),
    new Question("What is the name of this famous bridge?", "images/golden-gate.jpg", ["Tower Bridge", "Golden Gate Bridge", "Brooklyn Bridge"], "Golden Gate Bridge"),
    new Question("What is the name of this game?", "images/chess.jpg", ["Chess", "Domino", "Backgammon"], "Chess"),
    new Question("Which city is this?", "images/eiffel-tower.jpg", ["London", "Paris", "Rome"], "Paris"),
    new Question("What is the name of this food?", "images/pizza.jpg", ["Margherita Pizza", "Burger", "Pasta"], "Margherita Pizza")
];

export default questions;
