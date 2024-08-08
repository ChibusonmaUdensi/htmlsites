const log = document.getElementsById('signup');
const sign = document.getElementsById('login');

log.addEventListener('click', () => {
  log.style.color = 'white';
  sign.style.color = 'yellow';
});

sign.addEventListener('click', () => {
    sign.style.color = 'white';
    log.style.color = 'yellow';
});