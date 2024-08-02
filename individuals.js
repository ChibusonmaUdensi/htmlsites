
const data = document.getElementById('dataana');
const sum = document.getElementById('summer');
const tech = document.getElementById('tecpreneur');

sum.addEventListener('click', () => {
  sum.style.color = 'goldenrod';
 data.style.color = '#0c5186';
 tech.style.color = '#0c5186';
 tech.style.textDecoration = 'none';
 sum.style.textDecoration = 'underline';
 data.style.textDecoration = 'none';
});

data.addEventListener('click', () => {
    data.style.color = 'brown';
   sum.style.color = '#0c5186';
   tech.style.color = '#0c5186';
   tech.style.textDecoration = 'none';
   sum.style.textDecoration = 'none';
   data.style.textDecoration = 'underline';
});
tech.addEventListener('click', () => {
    tech.style.color = 'red';
    sum.style.color = '#0c5186';
    data.style.color = '#0c5186';
    tech.style.textDecoration = 'underline';
    sum.style.textDecoration = 'none';
    data.style.textDecoration = 'none';
});

