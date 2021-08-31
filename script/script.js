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
        return {
          timeRemaining,
          hours,
          minutes,
          seconds
        };
      } else {
        return {
          timeRemaining: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
    };

    const updateClock = () => {

      const {
        hours,
        minutes,
        seconds,
        timeRemaining
      } = getTimeRemaining();

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

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', event => {
      let target = event.target;

      if (target.matches('ul>li>a, .close-btn') || target.closest('.menu')) {
        handlerMenu();
      } else {

        target = target.closest('menu');
        if (!target && menu.classList.contains('active-menu')) {
          handlerMenu();
        }
      }
    });
  };

  toggleMenu();

  //Модальное окно
  const popUp = () => {
    const popupBtn = document.querySelectorAll('.popup-btn'),
      popup = document.querySelector('.popup'),
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
      target = target.closest('.service-header-tab');

      if (target) {
        tab.forEach((item, ind) => {
          if (item === target) {
            toggleTabContent(ind);
          }
        });
      }
    });
  };

  tabs();

  //Слайдеры
  const sliders = document.querySelectorAll('.portfolio-item');
  //Script DOT
  const addDot = () => {
    const dotContainer = document.querySelector('.portfolio-dots');

    dotContainer.insertAdjacentHTML('beforeend', '<li class="dot dot-active"></li>');

    for (let i = 0; i < sliders.length - 1; i++) {
      dotContainer.insertAdjacentHTML('beforeend', '<li class="dot"></li>');
    }

  };

  addDot();

  //слайдер
  const slider = () => {
    const dot = document.querySelectorAll('.dot'),
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

    startSlide(1500);

  };

  slider();

  //Атрибуты у фото
  const commandPhoto = document.querySelectorAll('.command__photo');

  commandPhoto.forEach((photo, ind) => {

    photo.addEventListener('mouseenter', event => {
      if (event.target === commandPhoto[ind]) {
        event.target.dataset.firstImg = commandPhoto[ind].src;
        commandPhoto[ind].src = event.target.dataset.img;
      }
    });

    photo.addEventListener('mouseout', event => {
      if (event.target === commandPhoto[ind]) {
        commandPhoto[ind].src = event.target.dataset.firstImg;
      }
    });

  });

  //Регулярки
  const calcBlock = document.querySelector('.calc-block'),
        inputCalc = calcBlock.querySelectorAll('input'),
        form2footer = document.getElementById('form2'),
        inputFooter = form2footer.querySelectorAll('input');

  inputCalc.forEach(item => {
    const checkValue = () => {
      item.value = item.value.replace(/[^\d]/g, '');
    };
    item.addEventListener('input', checkValue);
  });

  inputFooter.forEach(item => {

    const checkFilds = () => {
      const regExpText = /[^А-Яа-яёЁ -]/g,
            regExpEmail = /[^\w@\-\.`\*'!]/g,
            regExpPhone = /[^\d\(\)\-+]/g;

      if (item.id === 'form2-name' || item.id === 'form2-message') {
        item.value = item.value.replace(regExpText, '');
      } else if (item.id === 'form2-email') {
        item.value = item.value.replace(regExpEmail, '');
      } else if (item.id === 'form2-phone') {
        item.value = item.value.replace(regExpPhone, '');
      }
    };

    const rebildFilds = () => {
      const regExpTextUp = /( |^)[а-яёa-z]/g,
            regExpDelSpaceForword = /^(\s*\-*)*/g,
            regExpDelSpaceBack = /[\s*\-*]*$/g;

      if (item.id === 'form2-name') {
        item.value = item.value.replace(regExpDelSpaceForword, '');
        item.value = item.value.replace(regExpDelSpaceBack, '');
        item.value = item.value.replace(regExpTextUp, x => x.toUpperCase());
      } else if (item.id === 'form2-message') {
          item.value = item.value.replace(regExpDelSpaceForword, '');
          item.value = item.value.replace(regExpDelSpaceBack, '');
          item.value = item.value.replace(/\s+/g, ' ');
          item.value = item.value.replace(/\-+/g, '-');
      } else if (item.id === 'form2-email') {
        item.value = item.value.replace(/@+/g, '@');
        item.value = item.value.replace(/\-+/g, '-');
        item.value = item.value.replace(/\.+/g, '.');
      } else if (item.id === 'form2-phone') {
        item.value = item.value.replace(/\++/g, '+');
        item.value = item.value.replace(/\-+/g, '-');
        item.value = item.value.replace(/\(+/g, '(');
        item.value = item.value.replace(/\)+/g, ')');
      }
    };

    item.addEventListener('input', checkFilds);
    item.addEventListener('blur', rebildFilds);

  });

  //Калькулятор
  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcDay = document.querySelector('.calc-day'),
          calcCoutn = document.querySelector('.calc-count'),
          totalValue = document.getElementById('total');

    calcBlock.addEventListener('change', event => {
      const target = event.target;

      const countSum = () => {
        let total = 0,
        countValue = 1,
        dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = calcSquare.value;

        if (!typeValue) {
          calcCoutn.value = '';
          calcSquare.value = '';
          calcDay.value = '';
          total = 0;
        }

        //Количество комнат
        if (calcCoutn.value > 1) {
          countValue += (calcCoutn.value - 1) / 10;
        }

        //за какое количество дней
        if (calcDay.value && calcDay.value < 5) {
          dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
          dayValue *= 1.5;
        }

        //самая главная формула
        if (typeValue && squareValue) {
          total = parseInt(price * typeValue * squareValue * countValue * dayValue);
        }

        const animateValue = (start, end, duration) => {

          let startTimestamp = null;
          const step = timestamp => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            totalValue.textContent = Math.floor(progress * (end + start) + start);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        };

        animateValue(0, total, 1000);
      };

      if (target === calcType || target === calcSquare || target === calcDay || target === calcCoutn) {
        countSum();
      }
    });
  };

  calc(100);

  //ajax работа с сервером
  const sendForm = () => {
    const errorMessage = 'Что то не то',
    loadMessage = 'Загрузка ...',
    successMessage = 'Ваши данные у нас ))';

    const formOne = document.getElementById('form1'),
          formTwo = document.getElementById('form2'),
          modalForm = document.getElementById('form3');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `
    font-size: 2rem;
    `;

    //обработка запроса
    formOne.addEventListener('submit', (event) => {
      event.preventDefault();
      formOne.appendChild(statusMessage);

      statusMessage.textContent = loadMessage;

      const formData = new FormData(formOne);
      let body = {};

      formData.forEach((item, key) => {
        body[key] = item;
      });

      postData(body,
        () => {
        statusMessage.textContent = successMessage;
        },
        (error) => {
          successMessage.textContent = errorMessage;
          console.error(error);
      });

    });
    //форма 2
    formTwo.addEventListener('submit', (event) => {
      event.preventDefault();
      formTwo.appendChild(statusMessage);

      statusMessage.textContent = loadMessage;

      const formData = new FormData(formOne);
      let body = {};

      formData.forEach((item, key) => {
        body[key] = item;
      });

      postData(body,
        () => {
        statusMessage.textContent = successMessage;
        },
        (error) => {
          successMessage.textContent = errorMessage;
          console.error(error);
      });

    });

    //форма 3 модалка
    modalForm.addEventListener('submit', (event) => {
      event.preventDefault();
      modalForm.appendChild(statusMessage);

      statusMessage.textContent = loadMessage;

      const formData = new FormData(formOne);
      let body = {};

      formData.forEach((item, key) => {
        body[key] = item;
      });

      postData(body,
        () => {
        statusMessage.textContent = successMessage;
        },
        (error) => {
          successMessage.textContent = errorMessage;
          console.error(error);
      });

    });

    //запрос на сервер
    const postData = (body, outputData, errorData) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {

        if (request.readyState !== 4) {
          return;
        }

        if (request.status === 200) {
          outputData();
        } else {
          errorData(request.status);
        }

      });

      request.open('POST', './server.php');
      request.setRequestHeader('contant-Type', 'application/json');
      request.send(JSON.stringify(body));
    };
  };

  sendForm();

});
