// 2:26:50
const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");
btn.addEventListener("click", ()=>{
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    
}); 

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  } 
  btn.style.backgroundColor = "#4E75FF"; 
  btn.style.color = "#fff";
  btn.style.borderRadius = "8px";
  btn.style.padding = "8px", "16px";
  btn.style.width = "148px";
  btn.style.height = "40px";