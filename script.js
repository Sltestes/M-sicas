const audioBoxes = document.querySelectorAll(".audio-box");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function stopAllAudios() {
  audioBoxes.forEach((box) => {
    const audio = box.querySelector("audio");
    audio.pause();
    audio.currentTime = 0;
  });
}

function showAudio(index) {
  stopAllAudios();

  audioBoxes.forEach((box) => box.classList.remove("active"));
  audioBoxes[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + audioBoxes.length) % audioBoxes.length;
  showAudio(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % audioBoxes.length;
  showAudio(currentIndex);
});

// Parar outras músicas se clicar em outra manualmente
audioBoxes.forEach((box) => {
  const audio = box.querySelector("audio");
  audio.addEventListener("play", () => {
    stopAllAudios();
    audio.play(); // recomeça a que foi clicada
  });
});
