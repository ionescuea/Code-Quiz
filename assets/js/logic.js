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

// add questions and answers
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

// reduce time every second
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

// show the end screen
function endGame() {
  clearInterval(clock);
  questions.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.textContent = score;
}

// validate answer and go to the next screen
function nextQuestion() {
  if (this.textContent != quiz[i].correctAnswer) {
    timer -= 10;
  }
  else {
    score++;
  }
  if (i < quiz.length - 1) {
    i++;
    addQuestion(quiz[i]);
  } else {
    endGame();
  }
}

// start quiz
function onButtonClick() {
  startScreen.classList.add("hide");
  questions.classList.remove("hide");
  addQuestion(quiz[i]);
  time();
}

// save results to local storage and navigate to highscores
function saveResult(){
  var initials = document.querySelector("#initials");
  localStorage.setItem(initials.value, score);
  i = 0;
  timer = 30;
  score = 0;
  clock = "";
  timerEl.textContent = timer;
  initials.value = "";
  document.links[0].click();
}

// event listeners
startButton.addEventListener("click", onButtonClick);
submit.addEventListener("click", saveResult);
