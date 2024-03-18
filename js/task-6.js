// 2:29
const inputEl = document.querySelector("input")
const btnCreate = document.querySelector("[data-create]")
const btnDestroy = document.querySelector("[data-destroy]")
const box = document.querySelector("#boxes")
const boxUP = document.querySelector("#controls")

const div = document.querySelectorAll("div")
div.forEach(element => {
  element.classList.add("wrapper")
});
inputEl.classList.add("wrapper-input-task6")

btnCreate.style.borderRadius = "8px";
btnCreate.style.padding = "8px 16px";
btnCreate.style.width = "120px";
btnCreate.style.height = "40px";
btnCreate.style.backgroundColor = "#4E75FF"

btnDestroy.style.borderRadius = "8px";
btnDestroy.style.padding = "8px 16px";
btnDestroy.style.width = "120px";
btnDestroy.style.height = "40px";
btnDestroy.style.backgroundColor = "#FF4E4E";

let sizes = 30; 



btnCreate.addEventListener("click", createMarkup);
btnDestroy.addEventListener("click", destroyMarkup);

 function createMarkup(){
  
  const amount = inputEl.value;
  destroyMarkup();
if  (amount < 1 || amount > 100)
{
  return;
  }
createBoxes(amount);
}

function destroyMarkup(){
  box.innerHTML = "";
  inputEl.value = "";
  sizes = 30;
 }


function createBoxes(amount) {
  for (let i = 0; i < amount; i++){
const myBox = document.createElement("div")
myBox.style.width = `${sizes}px`;
myBox.style.height = `${sizes}px`;
myBox.style.backgroundColor = getRandomHexColor();
box.append(myBox);
sizes +=10;

  }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
 