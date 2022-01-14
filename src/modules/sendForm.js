import checkFilds from './checkFilds';
import rebildFilds from './rebildFilds';
import maskPhone from './mask-phone';

const sendForm = () => {
  const errorMessage = 'Что то не то',
    loadMessage = 'Загрузка ...',
    successMessage = 'Ваши данные у нас ))';

  const statusMessage = document.createElement('div');
  statusMessage.classList.add('animate__animated');
  statusMessage.style.cssText = `
    font-size: 2rem;
    background-color: steelblue;
    width: 230px;
    padding: 10px;
    border: 2px solid burlywood;
    border-radius: 25px;
    margin: 10px auto;
  `;

  //запрос на сервер
  const postData = body => fetch('./server.php', {
    method: "POST",
    headers: {
      'contant-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });


  //отчистка input
  const clearInputs = inputs => {
    inputs.forEach(item => {
      item.value = '';
      item.classList.remove('success');
      item.classList.remove('error');
    });
  };

  //убирать сообшение
  const closeMessage = () => {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
    statusMessage.remove();
  };

  //работа по формам
  const workForm = idForm => {
    const form = document.getElementById(idForm),
      inputsForm = form.querySelectorAll('input');

    inputsForm.forEach(input => {
      input.addEventListener('input', event => {
        checkFilds(event.target);
      });
      input.addEventListener('blur', rebildFilds);
    });
    maskPhone('.form-phone');

    form.addEventListener('submit', event => {
      const target = event.target,
        targetInput = target.querySelectorAll('input');
      event.preventDefault();

      const checkInputs = () => {
        let result = true;

        targetInput.forEach(item => {

          if (item.value === '') {
            result = false;
            return;
          }

          if (item.classList.contains('error')) {
            result = false;
            return;
          }

        });
        return result;
      };

      if (checkInputs()) {

        target.appendChild(statusMessage);

        statusMessage.classList.add('animate__backInRight');
        statusMessage.textContent = loadMessage;

        const formData = new FormData(target);
        const body = {};

        formData.forEach((item, key) => {
          body[key] = item;
        });

        //Если все гуд
        const successResolve = () => {
          statusMessage.style.display = 'block';
          statusMessage.textContent = successMessage;
          clearInputs(targetInput);
          setTimeout(closeMessage, 3000);
        };

        //Если ошибка
        const errorResolve = () => {
          statusMessage.style.display = 'block';
          successMessage.textContent = errorMessage;
          clearInputs(targetInput);
          setTimeout(closeMessage, 3000);
        };

        postData(body)
          .then(response => {
            if (response.status !== 200) {
              throw new Error('status not 200');
            }
            successResolve();
          })
          .catch(error => {
            errorResolve();
            console.log(error);
          });

      }
    });
  };

  workForm('form1');
  workForm('form2');
  workForm('form3');
};

export default sendForm;