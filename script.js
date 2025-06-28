const messages = [
  "We are in long distance right now, but still I am with you, in your room, beside you. Let's celebrate together, with this cute aesthetic like something.",
  "A special day for my special person...",
  "Let's blow the candle together 🎂✨",
  "Yay! Now let's cut the cake 🔪🍰",
  "A tight hug for you... 🤗🫂",
  "And finally... here's us... because you are that special person to me. 💖"
];

let msgIndex = 0;

const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);


const messageBox = document.getElementById("message");
const messageText = document.getElementById("messageText");
const cake = document.getElementById("cake");
const flame = document.getElementById("flame");
const knife = document.getElementById("knife");
const blowButton = document.getElementById("blowButton");

const birthdayMusic = document.getElementById("birthdayMusic");
const romanticMusic = document.getElementById("romanticMusic");

const photoScene = document.getElementById("photoScene");
const heartContainer = document.getElementById("hearts");
const sparklesContainer = document.getElementById("sparkles");

function nextMessage() {
  msgIndex++;

  if (msgIndex < messages.length) {
    messageText.innerText = messages[msgIndex];

    if (msgIndex === 2) {
      cake.style.display = "block";
      blowButton.style.display = "block";
    }

    if (msgIndex === 3) {
      blowButton.style.display = "none";
      flame.style.display = "none";
      birthdayMusic.play();
      knife.style.display = "block";
      enableKnife();
    }

    if (msgIndex === 4) {
      knife.style.display = "none";
      birthdayMusic.pause();
      romanticMusic.play();
    }

    if (msgIndex === 5) {
      showPhotoScene();
    }

  } else {
    messageBox.style.display = "none";
  }
}

function blowCandle() {
  flame.style.display = "none";
  messageText.innerText = "Candle blown out! 🎉";
  blowButton.style.display = "none";
}

function enableKnife() {
  let isDragging = false;
  knife.style.position = "absolute";

  knife.style.display = "block";
  knife.addEventListener('mousedown', function () {
    isDragging = true;
    knife.style.cursor = "grabbing";
  });

  window.addEventListener('mouseup', function () {
    if (isDragging) {
      isDragging = false;
      knife.style.cursor = "grab";
      messageText.innerText = "Cake cut successfully! 🎂✨";
    }
  });

  window.addEventListener('mousemove', function (e) {
    if (isDragging) {
      knife.style.left = e.pageX - 30 + "px";
      knife.style.top = e.pageY - 10 + "px";
    }
  });
}

function showPhotoScene() {
  photoScene.style.display = "flex";
  createHearts();
  createSparkles();
}

function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heartsContainer.appendChild(heart);
  }
}

function createSparkles() {
  for (let i = 0; i < 50; i++) {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.top = Math.random() * 100 + "vh";
    sparklesContainer.appendChild(spark);
  }
}