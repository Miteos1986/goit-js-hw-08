const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  


const galleryList = document.querySelector(".gallery");
// images.forEach(element => {
//     const listEl = document.createElement("li");
//     listEl.classList.add("itemTask2")
//     const imgEl = document.createElement("img");
//     imgEl.classList.add("itemTask2-img");

//     imgEl.src = element.url;
//     imgEl.alt = element.alt;

//     listEl.append(imgEl);
//     galleryList.append(listEl);
// });
// console.log(galleryList);

//                Метод - 2

 function createGallery(arr) {
  return arr
  .map(({url, alt}) => `
  <li class="item-gall">
  <img src="${url}" alt="${alt}" class = "itemTask2-img">
  </li>
  `)
  .join("");
 }
 galleryList.style.display = "flex";
 galleryList.style.flexWrap = "wrap";
 galleryList.style.gap = "15px";

 galleryList.insertAdjacentHTML("beforeend", createGallery(images));
