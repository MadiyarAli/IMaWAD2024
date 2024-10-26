
const keys = document.querySelectorAll('.key');

function playNote(note) {
  const audio = new Audio(`sounds/${note}.wav`);
  audio.play();
}

function activateKey(key) {
  key.classList.add('active');
  setTimeout(() => key.classList.remove('active'), 200);
}

keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    playNote(note);
    activateKey(key);
  });
});

document.addEventListener('keydown', (e) => {
  const keyMap = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const index = parseInt(e.key) - 1;
  
  if (index >= 0 && index < keyMap.length) {
    const note = keyMap[index];
    const keyElement = document.getElementById(note);
    playNote(note);
    activateKey(keyElement);
  }
});
