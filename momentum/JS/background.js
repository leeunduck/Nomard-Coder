const images = [
  "christmasEve.jpg",
  "dudoungLotteworld.jpeg",
  "Lotteworld.jpg",
  "thumb.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
