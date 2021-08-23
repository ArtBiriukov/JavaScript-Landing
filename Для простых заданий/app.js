'use sctrct';

const week = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
const box = document.querySelector('.box');

const date = new Date();

const dayWeekNow = date.getDay();
const dayNow = date.getDate();
const hourNow = date.getHours();
const timeNow = date.toLocaleTimeString('en');

const dayNowString = date.getTime();
const newYearString = new Date('1 January 2022').getTime();

const itemBox = document.createElement('div'),
      weekDayBox = document.createElement('div'),
      timeBox = document.createElement('div'),
      newYearBox = document.createElement('div');

  if (hourNow >= 4 && hourNow <= 11) {
    itemBox.innerText = `Доброе утро`;
  } else if(hourNow >= 12 && hourNow <= 15) {
    itemBox.innerText = `Добрый день`;
  } else if(hourNow >= 16 && hourNow <= 23) {
    itemBox.innerText = `Добрый вечер`;
  } else if(hourNow >= 0 && hourNow < 4) {
    itemBox.innerText = `Доброй ночи`;
  };


week.forEach((weekDay, weekIndex)=> {
   if(weekIndex === dayWeekNow) {
     weekDayBox.textContent = `Сегодня: ${weekDay}`;
  }
});

let newYearLeft = Math.floor((newYearString - dayNowString)/ 1000 / 60 / 60 / 24);

timeBox.textContent = `Текущее время: ${timeNow}`;
newYearBox.textContent = `До нового года осталось ${newYearLeft} дней`;

box.append(itemBox);
box.append(weekDayBox);
box.append(timeBox);
box.append(newYearBox);





















// //Выводим в одну строку
// let weekDay = week.join(',');
// weekDaysInline.append(weekDay);

// //Выводим в столбик
// week.forEach((item, index) => {

//   let itemDay = document.createElement('div',);
//   itemDay.innerText = item;
//   weekDaysColom.append(itemDay);

//   //выделяем выходной
//   if(item === 'Суббота' || item === 'Воскресенье') {
//      itemDay.classList.add('weekend');
//   }

//   //Выделяем текущий день недели 
//   if( (index + 1) === nowDay) {
//     itemDay.classList.add('today');
//   } else {
//     itemDay.classList.remove('today');
//   }
// });

