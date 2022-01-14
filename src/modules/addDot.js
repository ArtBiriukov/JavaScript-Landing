const addDot = () => {
  const sliders = document.querySelectorAll('.portfolio-item'),
    dotContainer = document.querySelector('.portfolio-dots');

  dotContainer.insertAdjacentHTML('beforeend', '<li class="dot dot-active"></li>');

  for (let i = 0; i < sliders.length - 1; i++) {
    dotContainer.insertAdjacentHTML('beforeend', '<li class="dot"></li>');
  }

};

export default addDot;