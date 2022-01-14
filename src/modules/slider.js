const slider = () => {
  const sliders = document.querySelectorAll('.portfolio-item'),
    dot = document.querySelectorAll('.dot'),
    sliderContent = document.querySelector('.portfolio-content');

  let currentSlide = 0,
    interval;

  const prevSlide = (item, ind, strClass) => {
    item[ind].classList.remove(strClass);
  };

  const nextSlide = (item, ind, strClass) => {
    item[ind].classList.add(strClass);
  };

  const autoPlay = () => {

    prevSlide(sliders, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= sliders.length) {
      currentSlide = 0;
    }

    nextSlide(sliders, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 1500) => {
    interval = setInterval(autoPlay, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderContent.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;

    if (!target.matches('.portfolio-btn, .dot')) {
      return;
    }

    prevSlide(sliders, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('#arrow-left')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dot.forEach((item, ind) => {
        if (item === target) {
          currentSlide = ind;
        }
      });
    }

    if (currentSlide >= sliders.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = sliders.length - 1;
    }

    nextSlide(sliders, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');

  });

  sliderContent.addEventListener('mouseover', event => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      stopSlide();
    }
  });

  sliderContent.addEventListener('mouseout', event => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide(3000);

};

export default slider;