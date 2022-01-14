import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import popUp from './modules/popUp';
import tabs from './modules/tabs';
import addDot from './modules/addDot';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import scroll from './modules/scroll';
import photoAt from './modules/photoAt';
import calcValid from './modules/calcValid';

//таймер
countTimer('23 September  2022');
//меню
toggleMenu();
//Модальное окно
popUp();
//скрол
scroll();
//табы
tabs();
//Script DOT
addDot();
//слайдер
slider();
//Атрибуты у фото
photoAt();
//Валидация калькулятора
calcValid();
//Калькулятор
calc(100);
//ajax работа с сервером
sendForm();