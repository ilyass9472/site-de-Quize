const questions = [
    { question: "Qui a peint La Nuit étoilée ?", answers: [ { text: "Claude Monet", correct: false }, { text: "Pablo Picasso", correct: false }, { text: "Vincent van Gogh", correct: true }, { text: "Léonard de Vinci", correct: false } ] },
    { question: "Dans quelle ville se trouve le Colisée ?", answers: [ { text: "Athènes", correct: false }, { text: "Istanbul", correct: false }, { text: "Rome", correct: true }, { text: "Alexandrie", correct: false } ] },
    { question: "Quel est le symbole chimique du mercure ?", answers: [ { text: "Mg", correct: false }, { text: "Me", correct: false }, { text: "Hg", correct: true }, { text: "Mc", correct: false } ] },
    { question: "Qui est l’auteur du roman Les Misérables ?", answers: [ { text: "Victor Hugo", correct: true }, { text: "Alexandre Dumas", correct: false }, { text: "Gustave Flaubert", correct: false }, { text: "Émile Zola", correct: false } ] },
    { question: "Quel pays a inventé le papier ?", answers: [ { text: "Japon", correct: false }, { text: "Inde", correct: false }, { text: "Égypte", correct: false }, { text: "Chine", correct: true } ] },
    { question: "Combien de temps dure une année sur Mars ?", answers: [ { text: "Environ 686 jours", correct: false }, { text: "Environ 687 jours", correct: true }, { text: "Environ 688 jours", correct: false }, { text: "Environ 689 jours", correct: false } ] },
    { question: "Quel mathématicien est connu pour le théorème de l’hypoténuse ?", answers: [ { text: "Euclide", correct: false }, { text: "Thalès", correct: false }, { text: "Pythagore", correct: true }, { text: "Archimède", correct: false } ] },
    { question: "Quelle est la capitale de l’Australie ?", answers: [ { text: "Sydney", correct: false }, { text: "Melbourne", correct: false }, { text: "Canberra", correct: true }, { text: "Perth", correct: false } ] },
    { question: "Qu’est-ce qu’une API ?", answers: [ { text: "Un langage de programmation", correct: false }, { text: "Un type de base de données", correct: false }, { text: "Un ensemble de fonctions pour la communication entre applications", correct: true }, { text: "Un type d’algorithme", correct: false } ] },
    { question: "Quel écrivain a créé le personnage de Sherlock Holmes ?", answers: [ { text: "Agatha Christie", correct: false }, { text: "Arthur Conan Doyle", correct: true }, { text: "Charles Dickens", correct: false }, { text: "J.K. Rowling", correct: false } ] }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

function startQuiz() {
    document.getElementById("quiz-section").style.display = "block";
    document.getElementById("result-section").style.display = "none";
    showQuestion();
}

function showQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    startTimer();

    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("option1").innerText = question.answers[0].text;
    document.getElementById("option2").innerText = question.answers[1].text;
    document.getElementById("option3").innerText = question.answers[2].text;
    document.getElementById("option4").innerText = question.answers[3].text;
    document.getElementById("suivant-btn").style.display = "none";
}

document.getElementById("option1").onclick = () => selectAnswer(0);
document.getElementById("option2").onclick = () => selectAnswer(1);
document.getElementById("option3").onclick = () => selectAnswer(2);
document.getElementById("option4").onclick = () => selectAnswer(3);

function selectAnswer(index) {
    if (index !== -1) {
        const correct = questions[currentQuestionIndex].answers[index].correct;
        if (correct) score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById("suivant-btn").style.display = "block";
    } else {
        showResult();
    }
}

document.getElementById("suivant-btn").onclick = () => {
    showQuestion();
};

function showResult() {
    clearInterval(timerInterval);
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("result-section").style.display = "block";
    document.getElementById("score").innerText = score;
}

function startTimer() {
    document.getElementById("time").innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            selectAnswer(-1);
        }
    }, 1000);
}

startQuiz();
