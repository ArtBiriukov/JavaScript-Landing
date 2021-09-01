const allInput = document.querySelectorAll('input');

const changeColorOnRed = (input) => {
  input.style.cssText = `
  border: 3px solid red;`;
};

const changeColorOnGreen = (input) => {
  input.style.cssText = `
  border: 3px solid green;`;
};

const checkValid = (value, input) => {
  const regExpName = /^[А-Яа-яЁё\s]+$/g,
    regExpMessag = /^[?!,.а-яА-ЯёЁ0-9\s]+$/g,
    regExpPhone = /[^0-9+]/g,
    regExpEmail = /^\w+@\w+\.\w{2,}$/g;

  if (value.trim() === '') {
    input.style.cssText = `
    border: 3px solid red;`;
  }

  if (!regExpName.test(value)) {
    changeColorOnRed(input);
  } else {
    changeColorOnGreen(input);
  }

  if (!regExpPhone.test(value)) {
    changeColorOnRed(input);
  } else {
    changeColorOnGreen(input);
  }

  if (!regExpEmail.test(value)) {
    changeColorOnRed(input);
  } else {
    changeColorOnGreen(input);
  }

  if (!regExpMessag.test(value)) {
    changeColorOnRed(input);
  } else {
    changeColorOnGreen(input);
  }
};


allInput.forEach(item => {
  item.addEventListener('blur', e => {
    const target = e.target,
      targetName = e.target.name,
      targetValue = e.target.value;

    if (targetName === 'user_name') {
      checkValid(targetValue, target);
    } else if (targetName === 'user_phone') {
      checkValid(targetValue, target);
    } else if (targetName === 'user_email') {
      checkValid(targetValue, target);
    } else if (targetName === 'user_message') {
      checkValid(targetValue, target);
    }

  });
});


