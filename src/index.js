
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import popUp from './modules/popUp';
import tabs from './modules/tabs';
import addDot from './modules/addDot';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//таймер
// countTimer('23 September  2021');

//меню
toggleMenu();

//Модальное окно
popUp();

//скрол
const menu = document.querySelector('menu'),
  menuLinks = menu.querySelectorAll('ul>li>a'),
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
tabs();

//Script DOT
addDot();

//слайдер
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
  inputCalc = calcBlock.querySelectorAll('input');

inputCalc.forEach(item => {
  const checkValue = () => {
    item.value = item.value.replace(/[^\d]/g, '');
  };
  item.addEventListener('input', checkValue);
});

//Калькулятор
calc(100);

//ajax работа с сервером
sendForm();
