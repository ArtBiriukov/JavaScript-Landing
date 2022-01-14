const toggleMenu = () => {
  const menu = document.querySelector('menu');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', event => {
    let target = event.target;

    if (target.matches('ul>li>a') || target.closest('.menu') || target.classList.contains('close-btn')) {
      event.preventDefault();
      handlerMenu();
    } else {

      target = target.closest('menu');
      if (!target && menu.classList.contains('active-menu')) {
        handlerMenu();
      }
    }
  });
};

export default toggleMenu;