console.log("welcome to online quiz")
//let a=document.getElementsByClassName(btn);
const questions = [
    {
        question: "which one is frontend technology ? ",
        answers: [
            { text: "C", correct: false },
            { text: "C++", correct: false },
            { text: "Javascript", correct: true },
            { text: "Python", correct: false }
        ]
    },

    {
        question: "which one is backend technology ? ",
        answers: [
            { text: "Css", correct: false },
            { text: "html", correct: false },
            { text: "Javascript", correct: false },
            { text: "Python", correct: true }
        ]
    },

    {
        question: "which one is html tag ? ",
        answers: [
            { text: "class", correct: false },
            { text: "object", correct: false },
            { text: "table", correct: true },
            { text: "color", correct: false }
        ]
    },

    {
        question: "who is the founder of Oracle ? ",
        answers: [
            { text: "christ lamb", correct: false },
            { text: "herry smith", correct: false },
            { text: "larry smith", correct: false },
            { text: "lerry ellison", correct: true }
        ]
    },

    {
        question: "who is the founder of apple ? ",
        answers: [
            { text: "steve job", correct: true },
            { text: "henry", correct: false },
            { text: "phil hughes", correct: false },
            { text: "slimpson", correct: false }
        ]
    }

];

const QuestionElement = document.getElementById("question");
const AnswerButton = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-btn");

let currentQuesIndex = 0;
let score = 0;


function startQuiz() {
    currentQuesIndex = 0;
    score = 0;
    NextButton.innerHTML = "Next";
    showQuestion();
}

function showScore(){
resetState();
questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
NextButton.innerHTML="play again";
NextButton.style.display="block";
}
function handleNextButton(){
    currentQuesIndex++;
    if(currentQuesIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuesIndex];
    let questionNo = currentQuesIndex + 1;
    QuestionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add ("btn");
        AnswerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    NextButton.style.display = "none";
    while (AnswerButton.firstChild) {
        AnswerButton.removeChild(AnswerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(AnswerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    NextButton.style.display="block";
}
NextButton.addEventListener("click",()=>{
if(currentQuesIndex<questions.length){
    handleNextButton();
}
else{
    startQuiz();
}
})
startQuiz();