/* eslint-disable indent */
window.addEventListener('DOMContentLoaded', () => {

  //Глобальные элементы
  const menu = document.querySelector('menu');

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

  countTimer('23 September  2021');

  //меню
  const toggleMenu = () => {
    const menuBtn = document.querySelector('.menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handlerMenu);

    menu.addEventListener('click', event => {
      if (event.target.matches('ul>li>a')) {
        handlerMenu();
      } else if (event.target.matches('.close-btn')) {
        handlerMenu();
      }
    });

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

    popupCloseBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      popupContent.style.left = '0';
    });
  };

  popUp();

  //скрол
  const menuLinks = menu.querySelectorAll('ul>li>a'),
        btnScroll = document.querySelector('a[href="#service-block"]');

  const scrollEvent = event => {
    event.preventDefault();
    const itemHash = event.currentTarget.getAttribute('href');
    document.querySelector('' + itemHash).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  };

  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', scrollEvent);
  });

  btnScroll.addEventListener('click', scrollEvent);

  //табы

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = index => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', e => {
      let target = e.target;
      while (target !== tabHeader) {

        if (target.classList.contains('service-header-tab')) {

          tab.forEach((item, ind) => {

            if (item === target) {
              toggleTabContent(ind);
            }

          });
          return;
        }
        target = target.parentNode;
      }
    });
  };

  tabs();

});
