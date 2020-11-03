
//#Pseudo Code//

//1. Create a button to click -event listener- to start quiz
//hide start button
//have timer appear
//have question div appear
//2. At click, first question appears (prompt?)
//3. After input, next question appears
// 4. Wrong answers deduct 10 seconds from the clock
// 5. Quiz ends when all questions are answered OR when time runs out.
// 6. Quiz over - input score into High Score storage

var start = document.querySelector(".start")
var timeRemaining = 60
const timerDisplay = document.querySelector("#time-shown")

start.addEventListener("click", function(){
    timeRemaining --;
    countdownText();
});

function countDownText() {
    setInterval (function(){
        timerDisplay.textContent = timeRemaining
        timeRemaining --
    }, 1000)
}
    if (timerDisplay<=0) {
        clearInterval(timeRemaining=0)
        alert ("Times Up!"+"Your score is ???");
    };



// var questions =
//     { a: "", a1: "" }
// { b: "" }
// { c: "" }
