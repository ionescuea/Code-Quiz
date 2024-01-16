var clearButton = document.querySelector("#clear");
var highscores = document.getElementById("highscores");

// populate with data from local storage
for (var i = 0; i < localStorage.length; i++) {
  var initials = localStorage.key(i);
  var score = localStorage.getItem(initials);
  var li = document.createElement("li");
  highscores.appendChild(li);
  li.textContent = `${initials} - ${score}`;
}

// clear highscores from local storage and HTML
function clearHighscores() {
  localStorage.clear();
  highscores.innerHTML = "";

}

clearButton.addEventListener("click", clearHighscores);
