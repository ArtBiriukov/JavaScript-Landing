const rebildFilds = event => {
  const target = event.target,
    regExpTextUp = /( |^)[а-яёa-z]/g,
    regExpDelSpaceForword = /^(\s*\-*)*/g,
    regExpDelSpaceBack = /[\s*\-*]*$/g;

  const delSpaceForwordBack = () => {
    target.value = target.value.replace(regExpDelSpaceForword, '');
    target.value = target.value.replace(regExpDelSpaceBack, '');
  };

  if (target.name === 'user_name') {
    delSpaceForwordBack();
    target.value = target.value.replace(regExpTextUp, x => x.toUpperCase());
  }
  if (target.name === 'user_message') {
    delSpaceForwordBack();
    target.value = target.value.replace(/\s+/g, ' ');
    target.value = target.value.replace(/\-+/g, '-');
  }
  if (target.matches('.form-email')) {
    delSpaceForwordBack();
    target.value = target.value.replace(/@+/g, '@');
    target.value = target.value.replace(/\-+/g, '-');
    target.value = target.value.replace(/\.+/g, '.');
  }
  if (target.matches('.form-phone')) {
    delSpaceForwordBack();
    target.value = target.value.replace(/\++/g, '+');
    target.value = target.value.replace(/\-+/g, '-');
    target.value = target.value.replace(/\(+/g, '(');
    target.value = target.value.replace(/\)+/g, ')');
  }
};

export default rebildFilds;
