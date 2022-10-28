const quizData = [
    {
        question: 'What is your favorite food?',
        a: 'Briyani',
        b: 'Rice with sumbar',
        c: 'Pongal',
        d: 'Fried rice',
        correct: 'c'
    }, {
        question: 'What is your choice in sunday?',
        a: 'Watching movie',
        b: 'sleeping',
        c: 'Shopping',
        d: 'Playing games',
        correct: 'b'
    }, {
        question: 'What is your favorite area?',
        a: 'Chennai',
        b: 'Hyderabad',
        c: 'Mumbai',
        d: 'Bengalore',
        correct: 'd'
    }, {
        question: 'What will you choose to go for Travel?',
        a: 'Car',
        b: 'Train',
        c: 'Bike',
        d: 'Bus',
        correct: 'a'
    }, {
        question: 'What will you think about work?',
        a: 'for money',
        b: 'for hobbis',
        c: 'for timepass',
        d: 'for future',
        correct: 'd'
    },
];

const quizEl = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const qusEl = document.getElementById('question');
const a_El = document.getElementById('a_text');
const b_El = document.getElementById('b_text');
const c_El = document.getElementById('c_text');
const d_El = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');

let current_qus = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const current_quiz = quizData[current_qus];

    qusEl.innerHTML = current_quiz.question;
    a_El.innerHTML = current_quiz.a;
    b_El.innerHTML = current_quiz.b;
    c_El.innerHTML = current_quiz.c;
    d_El.innerHTML = current_quiz.d;
}

function getSelected() {

    let answer = undefined;

    answerEl.forEach((answers) => {

        if (answers.checked) {
            answer = answers.id;
        }
    });

    return answer;
}

function deselectAnswers() {

    answerEl.forEach((answers) => {
        answers.checked = flase;
    });
}

submitbtn.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[current_qus].correct) {
            score++;
        }

        current_qus++;

        if (current_qus < quizData.length) {
            loadQuiz();
        }
        else {
            quizEl.innerHTML = hi;
        }
    }
});