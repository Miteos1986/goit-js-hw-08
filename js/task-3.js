const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", sendName);
function sendName(event) {
const name = event.currentTarget.value.trim();


if (name === "" ) {outputEl.textContent = "Anonymous"} else {
outputEl.textContent = name;}
   
}
inputEl.style.width = "360px";
inputEl.style.height = "40px";