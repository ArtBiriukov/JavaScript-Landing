class Validator {
  constructor({ selector, pattern = {}, method }) {
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
    this.elementsForm = [...this.form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button');
    this.error = new Set();
  }

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsForm.forEach(elem => elem.addEventListener('change', this.chekIt.bind(this)));
  }

  isValid(elem) {
    //патарны
    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      }
    };
    //Откуда ID???
    const method = this.method;

    console.log(method);
    // if (method) {
    //   return method.every(item => console.log(item));
    // }

    return true;
  }

  //Проверка на валидность
  chekIt(event) {
    const target = event.target;
    if (this.isValid(target)) {
      this.showSucsess(target);
      this.error.remove(target);
    } else {
      this.showError(target);
      this.error.add(target);
    }
  }

  showError(elem) {
    elem.classList.remove('success');
    elem.classList.add('error');

    if (elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    }
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка тут';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }

  showSucsess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');

    //ТУТ ОШИБКА!!!
    if (elem.nextElementSibling === null)  {
      return;
    } else if (elem.nextElementSibling.classList.contains('validator-error')) {
      elem.nextElementSibling.remove();
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
    input.success {
      border: 1px solid green
    }
    input.error {
      border: 1px solid red
    }
    .validator-error {
      font-size: 12px;
      color: red;
    }
    `;
    document.head.appendChild(style);
  }

  setPattern() {

    if (!this.pattern.phone) {
      this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
    }

    if (!this.pattern.email) {
      this.pattern.email = /^\w+@\w+\.\w{2,}$/;
    }

  }
}



const valid = new Validator({
  selector: '#form1',
  pattern: {},
  method: {
    'phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],

    'email': [
      ['notEmpty'],
      ['pattern', 'email']
    ]
  }
});

valid.init();




/*

#form1
#form1-name
#form1-email
#form1-phone
.form-btn

#form2
#form2-name
#form2-email
#form2-phone
#form2-message
.form-btn

*/
