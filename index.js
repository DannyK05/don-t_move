const question = document.getElementsByClassName("question")[0];
const man = document.getElementsByClassName("english-man")[0];
const woman = document.getElementsByClassName("spanish-woman")[0];
const eye = document.getElementsByClassName("eyes")[0];
const point = document.getElementsByClassName("point")[0];
const english = document.getElementsByClassName("english")[0];
const spanish = document.getElementsByClassName("spanish")[0];
const englishBtn = document.getElementById("englishBtn");
const spanishBtn = document.getElementById("spanishBtn");

function showEnglish() {
  question.style.animation = "disappear 1s";
  question.style.display = "none";
  english.style.display = "flex";
  spanish.style.display = "none";
  english.style.animation = "appear 1s";
  man.style.display = "none";
  man.style.animation = "disappear 1s";
  woman.style.display = "none";
  woman.style.animation = "disappear 1s";
  eye.style.display = "appear 1s";
  point.style.display = "appear 1s";
  eye.style.display = "block";
  point.style.display = "block";
}

function showSpanish() {
  question.style.display = "none";
  english.style.display = "none";
  spanish.style.display = "flex";
  spanish.style.animation = "appear 1s";
  man.style.display = "none";
  man.style.animation = "disappear 1s";
  woman.style.display = "none";
  woman.style.animation = "disappear 1s";
  eye.style.display = "appear 1s";
  point.style.display = "appear 1s";
  eye.style.display = "block";
  point.style.display = "block";
}

englishBtn.addEventListener("click", showEnglish);
spanishBtn.addEventListener("click", showSpanish);
