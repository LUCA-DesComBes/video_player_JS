const video = document.querySelector('video');
const playBtn = document.getElementById('play');
const rangeInput = document.getElementById('range');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');

function mettreAJour () {
  rangeInput.value = (video.currentTime / video.duration) * 100 || 0;
}

function positionRange () {
    const time = (rangeInput.value / 100) * video.duration;
    video.currentTime = time;
}
playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playBtn.textContent = '⏸️'; // Change le bouton en pause
  } else {
    video.pause();
    playBtn.textContent = '▶️'; // Change le bouton en play
  }
});

plusBtn.addEventListener('click', () => {
  video.currentTime += 5;
});

minusBtn.addEventListener('click', () => {
  video.currentTime -= 5;
});

video.addEventListener('timeupdate', mettreAJour);

rangeInput.addEventListener('input', positionRange);

video.addEventListener('loadedmetadata', () => {
  rangeInput.value = 0;
  rangeInput.max = 100;
});
