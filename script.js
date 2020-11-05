
//set variables//
var start = document.querySelector(".start")
var register = document.querySelector("#register")
var platter = document.querySelector(".question-platter")
var questionBoxH1 = document.querySelector(".question-box")
var highscoreBox = document.querySelector(".highscore-box")
var highscoreBtn = document.querySelector(".show-highscore")
var choiceA = document.querySelector("#choice-a")
var choiceB = document.querySelector("#choice-b")
var choiceC = document.querySelector("#choice-c")
var choiceD = document.querySelector("#choice-d")
const timerDisplay = document.querySelector("#time-shown")
var myScore = document.querySelector("#score")
var clickAnswer = document.querySelector(".button-choice")
var modal =document.querySelector(".modal")
var init = document.querySelector("#playerInitials");
var timeRemaining = 60
var startingScore = 33
startingScore.innerHTML=myScore
var answers = [];
var finalScore = "";

//create EventListener for Start button//
start.addEventListener("click", function () {
    timeRemaining--;
    countDownText();
    start.style.display = 'none'
    platter.style.display = 'block'
    next(0);
});

//Have timer start and end at 0//
function countDownText() {
    var myCounter = setInterval(function () {
        timerDisplay.textContent = timeRemaining
        timeRemaining--;
        if (timeRemaining == 0) {
            clearInterval(myCounter)
            alert("Your Time is UP!");
            return;
        };
    }, 1000)
}

//create Q & A in object array//
var questions = [
    {
        q: "What is a dog?",
        pickOne: [
            "a shoe",
            "your BFF",
            "a chemical",
            "a vacation"],
        answers: "your BFF"
    },
    {
        q: "what is a cat?",
        pickOne: [
            " an amphibian",
            "a feline",
            "a reptile",
            "a piece of clothing"],
        answers: "a feline"

    },
    {
        q: "What is a fish?",
        pickOne: [
            "a whale",
            "a mackerel",
            "a kind of rock",
            "an arachnid"],
        answers: "a mackerel"
    },
    {
        q: "What is a human?",
        pickOne: [
            "a robot",
            "an animal",
            "a battery",
            "an idea"],
        answers: "an animal"
    }
]
//create a function to populate Q&A//

var currentQuestion = 0
function next(i) {
    currentQuestion = i
    questionBoxH1.textContent = questions[i].q
    choiceA.textContent = questions[i].pickOne[0]
    choiceB.textContent = questions[i].pickOne[1]
    choiceC.textContent = questions[i].pickOne[2]
    choiceD.textContent = questions[i].pickOne[3]
    currentQuestion = i + 1
    if (i == questions.length - 1) {
        platter.style.display = 'none'
        return;
    }
};

var thisQ = questions[currentQuestion];

choiceA.addEventListener("click", function () {
    if (thisQ.pickOne[0] === thisQ.answers) {
        startingScore +=10;
        alert("CORRECT!")

    }
    else {
        timeRemaining -=10;
        alert("INCORRECT ANSWER")
    };
    next(currentQuestion);
    myScore.innerHTML=startingScore
   
})

choiceB.addEventListener("click", function () { 
    
    if (thisQ.pickOne[1] === thisQ.answers) {
    
        startingScore +=10;
        alert("CORRECT!")
        next(currentQuestion);
        myScore.innerHTML=startingScore;
    }
    else {
        timeRemaining -=10;
        alert("INCORRECT ANSWER")
    };
    next(currentQuestion);
    myScore.innerHTML=startingScore
    
})


choiceC.addEventListener("click", function () {
    if (questions[currentQuestion].pickOne[2] === questions[currentQuestion].answers ){
        startingScore +=10;
        alert("CORRECT!")
        next(currentQuestion);
        myScore.innerHTML=startingScore;
    }
    else {
        timeRemaining -=10;
        alert("INCORRECT ANSWER")
    };
    next(currentQuestion);
    myScore.innerHTML=startingScore;
})
choiceD.addEventListener("click", function () {
    if (questions[currentQuestion].pickOne[3] === questions[currentQuestion].answers){
        myScore.textContent = startingScore;
        startingScore +=10;
        alert("CORRECT!")
        next(currentQuestion);
        myScore.innerHTML=startingScore;
    }
    else {
        timeRemaining -=10;
        alert("INCORRECT ANSWER")
    };
    next(currentQuestion);
    myScore.innerHTML=startingScore;
})

console.log(questions[currentQuestion].pickOne[0])
console.log(questions[0].answers)

var arr = [];
    register.addEventListener("click", function (event) {
        event.preventDefault();
        arr.push(init);
        arr.push(startingScore);
    });
        localStorage.setItem("initials", JSON.stringify(init));
        localStorage.setItem("final score", myScore),        
  
    
highscoreBtn.addEventListener("click", function () {
    modal.style.display = 'block'
});



