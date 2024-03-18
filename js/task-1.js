let itemList = document.querySelectorAll(".item")
console.log(`Number of categories: ${itemList.length}`);
itemList.forEach(element => {
    categoryInfo(element)
    element.style.backgroundColor = "#f6f6fe";
    element.style.borderRadius = "8px";
    element.style.padding = "16px";
    element.style.width = "392px";
    element.style.height = "264px";
    element.style.marginBottom = "10px";
        
});


const itemSelect = document.querySelectorAll(".item li")

itemSelect.forEach(option => {
    option.style.margin = "8px"
    option.style.border = "1px solid #808080"
    option.style.fontFamily = "Montserrat", "sans-serif";
option.style.fontWeight = "400";
option.style.fontSize = "16px";
option.style.lineHeight = "1.5";
option.style.letterSpacing = "0.04em";
option.style.color = "#2e2f42";
option.style.paddingLeft = "5px"

})
function categoryInfo(categories) {
    let categoryTitle = categories.querySelector("h2").textContent;
    let elements = categories.querySelectorAll("li").length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elements}`);
}
