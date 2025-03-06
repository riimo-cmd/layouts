

let pic = document.getElementById("player");

pic.addEventListener("click", function() {
    let audio = new Audio("../11kirby/music/stasia-birthday.mp3");
    audio.play();
    console.log("test");
});
