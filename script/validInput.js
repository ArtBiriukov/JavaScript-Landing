const changeColorOnRed = (inputType) => {
  inputType.style.cssText = `
  border: 3px solid red;`;
};

const changeColorOnGreen = (inputType) => {
  inputType.style.cssText = `
  border: 3px solid green;`;
};

const checkValid = (value, input) => {
  const regExpName = /[^а-яё\s]/gi,
    regExpMessag = /^[?!,.а-яА-ЯёЁ0-9\s]+$/g,
    regExpPhone = /[^+\d]/g,
    regExpEmail = /[^a-z @ \- ! _ . ~ * '']/gi;

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
    changeColorOnGreen(input);
  } else {
    changeColorOnRed(input);
  }

  if (!regExpMessag.test(value)) {
    changeColorOnRed(input);
  } else {
    changeColorOnGreen(input);
  }
};

const validInputs = event => {
  const target = event.target;

  if (target.name === 'user_name') {
    checkValid(target.value, target);
  }
  if (target.name  === 'user_phone') {
    checkValid(target.value, target);
  }
  if (target.name  === 'user_email') {
    checkValid(target.value, target);
  }
  if (target.name  === 'user_message') {
    checkValid(target.value, target);
  }
};
