
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
// const tress = document.getElementById('radix');

// tress.addEventListener('click', () => {
// tress.innerHTML = "Our techpreneurship training is 100% onsite. However, details for other programs will be communicated upon registration."    
// });

const datan = document.getElementById('datana');
const curriculumBox = document.getElementById('curriculumbox');

datan.addEventListener('click', () => {
  curriculumBox.innerHTML = '';

//   const img = document.createElement('img');
//   img.src = './dataanalytics.png';
//   img.alt = 'description';

//   curriculumBox.appendChild(img);
});

// function summers(){
//     document.getElementsByClassName('curriculumbox').src = './dataanalytics.png';
// }
