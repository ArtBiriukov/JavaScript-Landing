const popUp = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content');

  const animationPopup = () => {
    if (document.documentElement.clientWidth <= 768) {
      popup.style.display = 'block';
    } else {

      let start = null;

      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        popup.style.display = 'block';
        popupContent.style.left = progress / 6 + '%';
        if (progress < 240) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  popupBtn.forEach(item => {
    item.addEventListener('click', animationPopup);
  });

  popup.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
      popupContent.style.left = '0';
    } else {

      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
        popupContent.style.left = '0';
      }
    }
  });
};

export default popUp;
