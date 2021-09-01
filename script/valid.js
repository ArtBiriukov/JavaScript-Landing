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
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.elementsForm.forEach(elem => this.chekIt({ target: elem }));

      if (this.error.size) {
        e.preventDefault();
      }
    });
  }

  isValid(elem) {
    //паттарны
    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      }
    };

    if (this.method) {
      const method = this.method[elem.name];

      if (method) {
        return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
      }
    } else {
      console.log('необходимо передать ID  полей ввода и методы проверки этих полей');
    }

    return true;
  }

  //Проверка на валидность
  chekIt(event) {
    const target = event.target;
    if (this.isValid(target)) {
      this.showSucsess(target);
      this.error.delete(target);
    } else {
      this.showError(target);
      this.error.add(target);
    }
  }

  showError(elem) {
    elem.classList.remove('success');
    elem.classList.add('error');

    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
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

    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      elem.nextElementSibling.remove();
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
    body input.success {
      border: 2px solid green;
      background-color: aquamarine
    }
    body input.error {
      border: 2px solid red;
      background-color: crimson
    }
    .validator-error {
      font-size: 12px;
      color: red;
    }
    `;
    document.head.appendChild(style);
  }

  setPattern() {

    if (!this.pattern.name) {
      this.pattern.name = /^[А-Яа-яЁё]+$/;
    }

    if (!this.pattern.message) {
      this.pattern.message = /^[А-Яа-яЁё\s]+$/g;
    }

    if (!this.pattern.phone) {
      this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
    }

    if (!this.pattern.email) {
      this.pattern.email = /^\w+@\w+\.\w{2,}$/;
    }
  }
}

const validFormOne = new Validator({
  selector: '#form1',
  pattern: {
  },
  method: {
    'user_name': [
      ['notEmpty'],
      ['pattern', 'name']
    ],
    'user_phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],

    'user_email': [
      ['notEmpty'],
      ['pattern', 'email']
    ]
  }
});

const validFormTwo = new Validator({
  selector: '#form2',
  pattern: {
  },
  method: {
    'user_name': [
      ['notEmpty'],
      ['pattern', 'name']
    ],
    'user_phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],

    'user_email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],

    'user_message': [
      ['notEmpty'],
      ['pattern', 'message']
    ]
  }
});

const validFormThree = new Validator({
  selector: '#form3',
  pattern: {
  },
  method: {
    'user_name': [
      ['notEmpty'],
      ['pattern', 'name']
    ],
    'user_phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],

    'user_email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],

  }
});

validFormOne.init();
validFormTwo.init();
validFormThree.init();

