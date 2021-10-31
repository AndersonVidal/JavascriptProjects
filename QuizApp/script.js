const quizData =[
    {
        question: 'Mona lisa, também conhecida como A Gioconda, foi uma obra de qual grande pintor?',
        a: 'Michelangelo',
        b: 'Donatello',
        c: 'Leonardo da Vinci',
        d: 'Rafael Sanzio',
        correct: 'c'
    },
    {
        question: 'Qual a temperatura necessária para a gasolina congelar?',
        a: 'Nunca congela',
        b: '-117,5 ºC',
        c: '-325 ºC',
        d: '-350,4 ºC',
        correct: 'a'
    },
    {
        question: 'Em que parte do corpo humano você encontra uma amostra completa do seu DNA?',
        a: 'Unhas',
        b: 'Ossos',
        c: 'Tecido dos dedos',
        d: 'Cabelos',
        correct: 'd'
    },
    {
        question: 'Qual o animal mais rápido?',
        a: 'Elefante',
        b: 'Gato doméstico',
        c: 'Girafa',
        d: 'Cobra',
        correct: 'c'
    },
];

let currentQuestion = 0;
let score = 0;

questionEl = document.getElementById('question');
a_text = document.getElementById('a_text');
b_text = document.getElementById('b_text');
c_text = document.getElementById('c_text');
d_text = document.getElementById('d_text');

submitBtn = document.getElementById('submitBtn');

answerEls = document.querySelectorAll('.answer');

quizContainerEl = document.getElementById('quizContainer');
congratsEl = document.createElement('p');
congratsEl.innerHTML = "Parabêns!! Você finalizou o quiz"

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.a;
    b_text.innerHTML = currentQuiz.b;
    c_text.innerHTML = currentQuiz.c;
    d_text.innerHTML = currentQuiz.d;
}

function getSelected() {
    let answerSelected = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerSelected = answerEl.id;
        }
    });

    return answerSelected;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion > quizData.length - 1) {
            const message = (quizData.length === score)
                ? '🎉🎊 Parabéns, você acertou todas as questões!! 🎊🎉'
                : `Você acertou ${score} de 4 questões!!`;
            
            quizContainerEl.innerHTML = `
                <h2 class="resultMessage">${message}</h2>
            `;
            submitBtn.disabled = true;
        } else {
            loadQuiz();
        }
    } else {
        alert('selecione uma alternativa!');
    }
});