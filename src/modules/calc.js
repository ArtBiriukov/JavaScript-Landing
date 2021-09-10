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

export default calc;
