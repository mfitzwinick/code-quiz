
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
var timer = document.querySelector(".timer")

start.addEventListener("click", begin)

function begin(){
    console.log("Let's Begin!")
}


var myVar = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  timer.innerHTML = d.toLocaleTimeString();
}

var questions= 
    {a:"", a1:""}
    {b:""}
    {c:""}

    </body>
</html>