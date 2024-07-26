const question = document.getElementsByClassName("question")[0];
const english = document.getElementsByClassName("english")[0];
const spanish = document.getElementsByClassName("spanish")[0];
const englishBtn = document.getElementById("englishBtn");
const spanishBtn = document.getElementById("spanishBtn");

function showEnglish (){
    question.style.display = "none"
    english.style.display = "flex"
    spanish.style.display = "none"
}

function showSpanish (){
    question.style.display = "none"
    english.style.display = "none"
    spanish.style.display = "flex"
}

englishBtn.addEventListener("click", showEnglish);
spanishBtn.addEventListener("click", showSpanish );