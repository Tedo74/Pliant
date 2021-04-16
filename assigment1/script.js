const imgageContainer = document.querySelector('#imgs');
const btns = document.querySelectorAll('.btn');
const img = document.querySelectorAll('#imgs img');
const carouselText = document.querySelectorAll('.carousel-text');
const member = document.querySelector('.member-quotation-name h6');

let idx = 0;

let interval = setInterval(run, 5000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 5000);
}

function run() {
  idx++;
  changeContent();
  setMemberName(idx);
}

function changeContent() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  let currentImg = img[idx];
  currentImg.classList.add('active');
  let text = carouselText[idx];
  text.classList.add('active-text');

  for (let i = 0; i < img.length; i++) {
    if (i !== idx) {
      img[i].classList.remove('active');
      carouselText[i].classList.remove('active-text');

      btns.forEach((button, index) => {
        button.classList.remove('active');
      });

      carouselText.forEach((txt, index) => {
        txt.classList.remove('active-text');
      });
    }
  }
  btns[idx].classList.add('active');
  carouselText[idx].classList.add('active-text');
  setMemberName(idx);
}

function btnRemoveActive() {}
btns.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    idx = index;
    changeContent();
    btns.forEach((b) => {
      b.classList.remove('active');
    });
    evt.target.classList.add('active');
    resetInterval();
  });
});

function setMemberName(index) {
  switch (index) {
    case 0:
      member.textContent = 'John Doe';
      break;
    case 1:
      member.textContent = 'Johny Doe';
      break;
    case 2:
      member.textContent = 'Johnathan Doe';
      break;

    default:
      member.textContent = 'John Doe';
      break;
  }
}
