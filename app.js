var quizQuestions = [
    {
        question: "Q1: The basic medium of optical fiber is a fiber that is mostly made of",
        right_answer: "(A) glass",
        Options: [
            "(A) glass",
            "(B) wood",
            "(C) copper",
            "(D) lead"
        ]
    },
    {
        question: "Q2: Web pages are interlinked by using",
        right_answer: "(C) hyperlinks",
        Options: [
            "(A) HTTP",
            "(B) marquee",
            "(C) hyperlinks",
            "(D) slider"
        ]
    },
    {
        question: "Q3: “Google Language Translator” is an example of the application of",
        right_answer: "(D) machine learning",
        Options: [
            "(A) internet",
            "(B) debugging",
            "(C) computer simulations",
            "(D) machine learning"
        ]
    },
    {
        question: "Q4: The study of algorithms that improve automatically through experience is known as",
        right_answer: "(B) Machine learning",
        Options: [
            "(A) Computer program",
            "(B) Machine learning",
            "(C) Computer language",
            "(D) Artificial intelligence"
        ]
    },
    {
        question: "Q5: HTML is an abbreviation for?",
        right_answer: "(D) HyperText Markup Language",
        Options: [
            "(A) HiTech Meaningful Language",
            "(B) HyperText Meaningful Language",
            "(C) HiTech Markup Language",
            "(D) HyperText Markup Language"
        ]
    },
]

function displayQuestion(e) {
    // question
    var questions = document.getElementById("questions");
    questions.innerHTML = quizQuestions[e].question;

    // options
    var optionAnswer = document.getElementsByClassName("options");
    for(var i = 0; i < optionAnswer.length; i++){
        optionAnswer[i].innerHTML = quizQuestions[e].Options[i];
    }
}

var questionCount = 0;
var score = 0;

function nextQuestion() {
    questionCount++;
    validate(questionCount);
    displayQuestion(questionCount);
    removeActiveClass();
}

function addActiveClass(e) {
    removeActiveClass();
    e.classList.add("active");
}

function removeActiveClass() {
    var active = document.getElementsByClassName("active");
    for(var i = 0; i < active.length; i++){
        active[i].classList.remove("active");
    }
}

function validate(e) {
    var active = document.getElementsByClassName("active");
    if (active[0].innerHTML == quizQuestions[e].right_answer) {
        score += 10;
        alert("Your score is " + score);
    }
}