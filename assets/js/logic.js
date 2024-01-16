var timerEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var submit = document.querySelector("#submit");
var i = 0;
var timer = 30;
var score = 0;
var clock = "";

function addQuestion(q) {
  questionTitle.textContent = q.question;
  choices.innerHTML = `
      <button>${q.option1}</button>
      <button>${q.option2}</button>
      <button>${q.option3}</button>
  `;
  for (var j = 0; j<choices.children.length; j++) {
    choices.children[j].addEventListener("click", nextQuestion);
  }
}

function time() {
  clock = setInterval(function () {
    timerEl.textContent = timer;
    if (timer >= 1) {
      timer--;
    } else {
      timerEl.textContent = 0;
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(clock);
  questions.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.textContent = score;
}

function nextQuestion() {
  if (this.textContent != quiz[i].correctAnswer) {
    // reduce time if wrong answer
    timer -= 10;
  }
  else {
    score++;
  }
  if (i < quiz.length - 1) {
    i++;
    addQuestion(quiz[i]);
  } else {
    // else show end screen
    endGame();
  }

  // on submit add results to local storage
}


function onButtonClick() {
  startScreen.classList.add("hide");
  questions.classList.remove("hide");
  addQuestion(quiz[i]);
  time();
}

function saveResult(){
  i = 0;
  timer = 30;
  score = 0;
  clock = "";
  timerEl.textContent = timer;
  var initials = document.querySelector("#initials")
  localStorage.setItem(initials.value, score);
  endScreen.classList.add("hide");
  startScreen.classList.remove("hide");
  
}

startButton.addEventListener("click", onButtonClick)
submit.addEventListener("click", saveResult)