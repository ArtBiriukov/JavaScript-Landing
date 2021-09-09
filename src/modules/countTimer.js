const countTimer = deadline => {
  const timerHours = document.getElementById('timer-hours'),
    timerMinutes = document.getElementById('timer-minutes'),
    timerSeconds = document.getElementById('timer-seconds');

  let idInterval = 0;

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

  const checkZero = itemTime => {
    if (itemTime < 10) {
      return `0${itemTime}`;
    } else {
      return itemTime;
    }
  };

  const updateClock = () => {

    const {
      hours,
      minutes,
      seconds,
      timeRemaining
    } = getTimeRemaining();

    timerSeconds.textContent = checkZero(seconds);
    timerMinutes.textContent = checkZero(minutes);
    timerHours.textContent = checkZero(hours);

    if (timeRemaining < 0) {
      clearInterval(idInterval);
    }

  };
  updateClock();
  idInterval = setInterval(updateClock, 1000);
};

export default countTimer;
