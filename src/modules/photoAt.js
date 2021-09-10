const photoAt = () => {
  const commandPhoto = document.querySelectorAll('.command__photo');

  commandPhoto.forEach((photo, ind) => {

    photo.addEventListener('mouseenter', event => {
      if (event.target === commandPhoto[ind]) {
        event.target.dataset.firstImg = commandPhoto[ind].src;
        commandPhoto[ind].src = event.target.dataset.img;
      }
    });

    photo.addEventListener('mouseout', event => {
      if (event.target === commandPhoto[ind]) {
        commandPhoto[ind].src = event.target.dataset.firstImg;
      }
    });

  });
};

export default photoAt;
