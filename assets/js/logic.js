var timerEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var answer = document.querySelector("#answer");
var i = 0;
var timer = 30;
var endScreen = document.querySelector("#end-screen");
var score = document.querySelector("#final-score");

function addQuestion(q){
    // console.log(questionTitle.textContent);
    
    questionTitle.textContent= q.question;
    console.log(questionTitle.textContent);
    choices.innerHTML = `
        <button id="answer">${q.option1}</button>
        <button>${q.option2}</button>
        <button>${q.option3}</button>
    `;
}

function time() {
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timer > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timer;
          // Decrement `timeLeft` by 1
            timer--;
        } else if (timer === 1) {
          // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timer;
            timer--;
        } else {
          // Once `timeLeft` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = 0;
            endGame();
        }
        }, 1000);
    }

function endGame() {
    questions.classList.add("hide");
    endScreen.classList.remove("hide")
}

function nextQuestion() {
    answer = document.querySelector("#answer");
    console.log(answer.textContent);
    // if answer.textContent != quiz[i].answer
    if (answer.textContent != quiz[i].correctAnswer) {
        // reduce time
        timer -= 10;
    }
      // else if (answer.textContent = quiz[i].correctAnswer)
      //   score = 0;
      //   score++;
    if (i < quiz.length-1) {
        i++;
        addQuestion(quiz[i]);
    } else {
        // else show end screen
        endGame();
    }

    // on submit add results to local storage
}


function onButtonClick() {
    startScreen.innerHTML = "";
    questions.classList.remove("hide");
    addQuestion(quiz[i]);
    time();
}

startButton.addEventListener("click", onButtonClick)
// NOTE! need to add timer when the button is clicked



choices.addEventListener("click", nextQuestion)


// on highscores, show highscore page
