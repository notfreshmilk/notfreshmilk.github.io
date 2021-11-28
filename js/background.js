const images = ["0.jpg","1.jpg"];
const body = document.querySelector("body");
const randomImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = 'url("./img/bg/'+randomImage+'")';