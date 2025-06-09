const audioBoxes = document.querySelectorAll(".audio-box");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function showAudio(index) {
  // Esconde todos
  audioBoxes.forEach((box, i) => {
    box.classList.remove("active");
    const audio = box.querySelector("audio");
    audio.pause();           // Pausa o áudio atual
    audio.currentTime = 0;   // Reseta o tempo
  });

  // Mostra o novo
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
