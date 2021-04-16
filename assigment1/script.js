const imgageContainer = document.querySelector('#imgs');
const btns = document.querySelectorAll('.btn');
const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 5000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 5000);
}

function run() {
  idx++;

  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  let currentImg = img[idx];
  currentImg.classList.add('active');

  for (let i = 0; i < img.length; i++) {
    if (i !== idx) {
      img[i].classList.remove('active');
      btns.forEach((button, index) => {
        button.classList.remove('active');
      });
    }
  }
  btns[idx].classList.add('active');
}

function btnRemoveActive() {}
btns.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    idx = index;
    changeImage();
    btns.forEach((b) => {
      b.classList.remove('active');
    });
    evt.target.classList.add('active');
    resetInterval();
  });
});
