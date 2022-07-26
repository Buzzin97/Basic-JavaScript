const images = [
    "이미지1.jpeg",
    "이미지2.jpeg",
    "이미지3.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
   