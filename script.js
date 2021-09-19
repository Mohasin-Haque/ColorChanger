const inputText = document.querySelector("#input");
const redBtn = document.querySelector("#red-btn");
const greenBtn = document.querySelector("#green-btn");
const blueBtn = document.querySelector("#blue-btn");

function changeRed(){
  inputText.style.color = "red";
}

function changeGreen(){
  inputText.style.color = "green";
}

function changeBlue(){
  inputText.style.color = "blue";
}

redBtn.addEventListener("click", changeRed)
greenBtn.addEventListener("click", changeGreen)
blueBtn.addEventListener("click", changeBlue)