/* eslint-disable indent */
window.addEventListener('DOMContentLoaded', () => {

  //таймер
  const countTimer = deadline => {
    const timerHours = document.getElementById('timer-hours'),
          timerMinutes = document.getElementById('timer-minutes'),
          timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
      const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,

        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 3600);

      if (timeRemaining > 0) {
        return { timeRemaining, hours, minutes, seconds };
      } else {
        return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    const updateClock = () => {

      const { hours, minutes, seconds, timeRemaining } = getTimeRemaining();

      const checkZero = itemTime => {
        if (itemTime < 10) {
          return `0${itemTime}`;
        } else {
          return itemTime;
        }
      };

      timerSeconds.textContent = checkZero(seconds);
      timerMinutes.textContent = checkZero(minutes);
      timerHours.textContent = checkZero(hours);

      const idInterval = setInterval(updateClock, 1000);

      if (timeRemaining < 0) {
        clearInterval(idInterval);
      }

    };
    updateClock();
  };

  countTimer('23 August  2021');

  //меню
  const toggleMenu = () => {
    const menuBtn = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    menuItem = menu.querySelectorAll('ul>li'),
    closeBtn = document.querySelector('.close-btn');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItem.forEach(item => item.addEventListener('click', handlerMenu));
  };

  toggleMenu();

  //Модальное окно

  const popUp = () => {
    const popupBtn = document.querySelectorAll('.popup-btn'),
    popupCloseBtn = document.querySelector('.popup-close'),
    popup = document.querySelector('.popup'),
    popupContent = document.querySelector('.popup-content');

    // popupBtn.forEach(item => item.addEventListener('click', () => popup.style.display = 'block'));

    const animationPopup = () => {

      if (document.documentElement.clientWidth <= 768) {
        popup.style.display = 'block';

      } else {

        let start = null;

        const step = timestamp => {

          console.log(timestamp);

          if (!start) start = timestamp;
          const progress = timestamp - start;

          popup.style.display = 'block';
          popupContent.style.left = progress / 6 + '%';
          if (progress < 240) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);







          // const start = Date.now();

          // const timer = setInterval(() => {
          //   const timePassed = Date.now() - start;

          //   popup.style.display = 'block';
          //   popupContent.style.left = progress / 6 + '%';

          //   if (timePassed > 300) clearInterval(timer);

          // }, 20);
        }
      };

    popupBtn.forEach(item => {
      item.addEventListener('click', animationPopup);
    });

    popupCloseBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      popupContent.style.left = '0';
    });
  };

  popUp();

});
