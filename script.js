onload = () => {
  document.body.classList.remove("container");

  // Agrega la clase 'visible' al segundo mensaje después de 0.5 segundos
  setTimeout(() => {
    document.querySelector('.name-message').classList.add('visible');
  }, 500); // Espera 0.5 segundos antes de mostrar el segundo mensaje

  // Agrega la clase 'visible' al primer mensaje después de 1 segundo
  setTimeout(() => {
    document.querySelector('.love-message').classList.add('visible');
  }, 1200); // Espera 1 segundo antes de mostrar el primer mensaje
};