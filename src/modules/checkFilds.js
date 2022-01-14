//Регулярные выражения для форм
const regExpName = /^[а-яё]{2,}$/i,
  regExpText = /[а-яё\s\!\.\,\?\:\;\(\)]+$/gi,
  regExpEmail = /^\w+@\w+\.\w{2,}$/,
  regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const checkFilds = target => {

  const checkGood = () => {
    target.classList.add('success');
    target.classList.remove('error');
  };

  const checkBed = () => {
    target.classList.add('error');
    target.classList.remove('success');
  };

  if (target.name === 'user_name') {
    target.value = target.value.replace(/[a-z\s]*/gi, '');
    if (regExpName.test(target.value)) {
      checkGood();
    } else {
      checkBed();
    }
  }
  if (target.name === 'user_message') {
    if (regExpText.test(target.value)) {
      checkGood();
    } else {
      checkBed();
    }
  }
  if (target.matches('.form-email')) {
    if (regExpEmail.test(target.value)) {
      checkGood();
    } else {
      checkBed();
    }
  }
  if (target.matches('.form-phone')) {
    target.value = target.value.replace(/[^\d\+\-\s\(\)]+/g, '');
    if (regExpPhone.test(target.value)) {
      checkGood();
    } else {
      checkBed();
    }
  }

};

export default checkFilds;