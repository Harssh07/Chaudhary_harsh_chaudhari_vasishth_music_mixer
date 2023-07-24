const icons = document.querySelectorAll('.icon');
const boxes = document.querySelectorAll('.box');
const audios = document.querySelectorAll('audio');

let activeIcon = null;

icons.forEach((icon) => {
  icon.addEventListener('dragstart', dragStart);
});

boxes.forEach((box) => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('drop', drop);
});

function dragStart(e) {
  activeIcon = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();

  if (!e.target.classList.contains('icon') && e.target.children.length === 0) {
    e.target.appendChild(activeIcon);

    // Play the corresponding audio when dropped
    const audioId = activeIcon.id.replace('icon', 'audio');
    const audio = document.getElementById(audioId);
    audio.currentTime = 0;
    audio.play();
  }
}

// Play all audios when all icons are dropped
document.addEventListener('dragend', () => {
  const iconCount = document.querySelectorAll('.icon').length;
  const boxesWithIcons = document.querySelectorAll('.box .icon').length;

  if (iconCount === boxesWithIcons) {
    audios.forEach((audio) => {
      audio.currentTime = 0;
      audio.play();
    });
  }
});
