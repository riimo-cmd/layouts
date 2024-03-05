let largeBanner = Math.floor(Math.random() * 3);
let smallBanner = 0;

let neo1 = "./images/likeyaknow.png";
let neo2 = "./images/neocities.png";
let neo3 = "./images/look-at-my-cat.png";

let small1 = "./images/mdn.png";
let link1 = "https://developer.mozilla.org/en-US/docs/Web"
let small2 = "./images/w3schools.png";
let link2 = "https://www.w3schools.com"
let small3 = "./images/ia.png";
let link3 = "https://archive.org"
let small4 = "./images/gifcities.png";
let link4 = "https://gifcities.org"
let neocities = "https://neocities.org";



// code for large banners
let img1 = document.createElement("img");
if(largeBanner === 0){
    img1.src = neo1;
    let src = document.getElementById("neocities");
    img1.onclick = function() {
        window.location.href = neocities;
    };
    src.appendChild(img1);
}
else if(largeBanner === 1){
    img1.src = neo2;
    let src = document.getElementById("neocities");
    img1.onclick = function() {
        window.location.href = neocities;
    };
    src.appendChild(img1);
    
}
else {
    img1.src = neo3;
    let src = document.getElementById("neocities");
    img1.onclick = function() {
        window.location.href = neocities;
    };
    src.appendChild(img1);
}

// code for the first small banner
smallBanner = Math.floor(Math.random() * 4);
let img2 = document.createElement("img");

if(smallBanner === 0){
    img2.src = small1;
    let src = document.getElementById("small1");
    img2.onclick = function() {
        window.location.href = link1;
    };
    src.appendChild(img2);
}
else if(smallBanner === 1){
    img2.src = small2;
    let src = document.getElementById("small1");
    img2.onclick = function() {
        window.location.href = link2;
    };
    src.appendChild(img2);
}
else if(smallBanner === 2){
    img2.src = small3;
    let src = document.getElementById("small1");
    img2.onclick = function() {
        window.location.href = link3;
    };
    src.appendChild(img2);
}
else {
    img2.src = small4;
    let src = document.getElementById("small1");
    img2.onclick = function() {
        window.location.href = link4;
    };
    src.appendChild(img2);
}

// code for the second small banner
smallBanner = Math.floor(Math.random() * 4);
let img3 = document.createElement("img");

if(smallBanner === 0){
    img3.src = small1;
    let src = document.getElementById("small2");
    img3.onclick = function() {
        window.location.href = link1;
    };
    src.appendChild(img3);
}
else if(smallBanner === 1){
    img3.src = small2;
    let src = document.getElementById("small2");
    img3.onclick = function() {
        window.location.href = link2;
    };
    src.appendChild(img3);
}
else if(smallBanner === 2){
    img3.src = small3;
    let src = document.getElementById("small2");
    img3.onclick = function() {
        window.location.href = link3;
    };
    src.appendChild(img3);
}
else {
    img3.src = small4;
    let src = document.getElementById("small2");
    img3.onclick = function() {
        window.location.href = link4;
    };
    src.appendChild(img3);
}

// code for the third small banner
smallBanner = Math.floor(Math.random() * 4);
let img4 = document.createElement("img");

if(smallBanner === 0){
    img4.src = small1;
    let src = document.getElementById("small3");
    img4.onclick = function() {
        window.location.href = link1;
    };
    src.appendChild(img4);
}
else if(smallBanner === 1){
    img4.src = small2;
    let src = document.getElementById("small3");
    img4.onclick = function() {
        window.location.href = link2;
    };
    src.appendChild(img4);
}
else if(smallBanner === 2){
    img4.src = small3;
    let src = document.getElementById("small3");
    img4.onclick = function() {
        window.location.href = link3;
    };
    src.appendChild(img4);
}
else {
    img4.src = small4;
    let src = document.getElementById("small3");
    img4.onclick = function() {
        window.location.href = link4;
    };
    src.appendChild(img4);
}
