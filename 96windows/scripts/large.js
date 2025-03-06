let index = Math.floor(Math.random() * 7);
console.log(index);
let neocities = "https://neocities.org";

let neoList = ["./images/likeyaknow.png","./images/neocities.png","./images/look-at-my-cat.png","./images/miku.jpg","./images/nya.png","./images/GRAPHIC.png","./images/graphicdesign.png"];

// code for large banners
let source = neoList[index];
let img1 = document.createElement("img");
img1.src = source;
let src = document.getElementById("neocities");
console.log(img1.src);
img1.onclick = function() {
    window.location.href = neocities;
};
src.appendChild(img1);

