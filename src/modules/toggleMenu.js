const toggleMenu = () => {
  const menu = document.querySelector('menu');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', event => {
    let target = event.target;

    if (target.matches('ul>li>a, .close-btn') || target.closest('.menu')) {
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
