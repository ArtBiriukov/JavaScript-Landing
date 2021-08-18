/* eslint-disable indent */
window.addEventListener('DOMContentLoaded', () => {
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
});
