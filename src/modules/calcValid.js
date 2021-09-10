const calcValid = () => {
  const calcBlock = document.querySelector('.calc-block'),
    inputCalc = calcBlock.querySelectorAll('input');

  inputCalc.forEach(item => {
    const checkValue = () => {
      item.value = item.value.replace(/[^\d]/g, '');
    };
    item.addEventListener('input', checkValue);
  });
};

export default calcValid;
