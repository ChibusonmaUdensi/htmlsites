
function trainingg(){
  document.getElementById('trainingtalents').src = "https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710328896/Training_Talents_Placement_krh02w.jpg"
}
const textTraining = document.getElementById('training');
const textTalent = document.getElementById('talent');
const employeeElement = document.getElementById('employee');
const ventureElement = document.getElementById('venture');
const projectElement = document.getElementById('project');

textTraining.addEventListener('click', () => {
  textTraining.style.color = 'red';
  textTalent.style.color = '#0c5186';
  employeeElement.style.color = '#0c5186';
  ventureElement.style.color = '#0c5186';
  projectElement.style.color = '#0c5186';
});


textTalent.addEventListener('click', () => {
  textTalent.style.color = 'deepskyblue';
  textTraining.style.color = '#0c5186';
  employeeElement.style.color = '#0c5186';
  ventureElement.style.color = '#0c5186';
  projectElement.style.color = '#0c5186';

});
employeeElement.addEventListener('click', () => {
  employeeElement.style.color = 'red';
  textTraining.style.color = '#0c5186';
  textTalent.style.color = '#0c5186';
  ventureElement.style.color = '#0c5186';
  projectElement.style.color = '#0c5186';
  });
  ventureElement.addEventListener('click', () => {
   ventureElement.style.color = 'deepskyblue';
   textTalent.style.color = '#0c5186';
    employeeElement.style.color = '#0c5186';
    textTraining.style.color = '#0c5186';
    projectElement.style.color = '#0c5186';
    });
   projectElement.addEventListener('click', () => {
     projectElement.style.color = 'black';
       textTraining.style.color = '#0c5186';
       employeeElement.style.color = '#0c5186';
       textTraining.style.color = '#0c5186';
       textTalent.style.color = '#0c5186';
       });

  


function placement(){
 var img = document.getElementById('trainingtalents')
 img.src="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710771885/sfpsgrc2oyam69g8tsip.jpg"

}

  function upskilling(){
    document.getElementById('trainingtalents').src ="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710328895/Employee_Upskilling_baerho.jpg"
  }

  function imp(){
   document.getElementById('trainingtalents').src ='./projectimplementation.png';
  }
  
function building(){
  document.getElementById('trainingtalents').src='./venturebuilding.png';
}
const changeColorBtn = document.getElementById('training');
const dott = document.querySelector('.dot');
changeColorBtn.addEventListener('click', () => {
  dott.style.backgroundColor = 'pink';
});

const changeColor = document.getElementById('talent');
const dot = document.querySelector('.dot');
changeColor.addEventListener('click', () => {
  dot.style.backgroundColor = 'grey';
});

const colorChange = document.getElementById('employee');
const dotChange = document.querySelector('.dot');
colorChange.addEventListener('click', () => {
  dotChange.style.backgroundColor ='pink';
});

const changeCol = document.getElementById('project');
const  change = document.querySelector('.dot');
changeCol.addEventListener('click', () => {
  change.style.backgroundColor ='grey';
});

const changeColr = document.getElementById('venture');
const changer = document.querySelector('.dot');
changeColr.addEventListener('click', () => {
  changer.style.backgroundColor ='blue';
});

const dynamicText = document.getElementById('dancingText');
const texts = [
   "My biggest fear before Semicolon was that I won't get value from the program, which would mean losing one year. I have not only acquired value, but it has also exceeded my expectations.– AKINTUDE SERIKI", 
  "I've always wanted to be a software engineer. Semicolon set me on that part and exposed me to what it takes.- EBELECHUKWU DORIS OKOLO",
  "I don’t know how much I’d have done or achieved without Semicolon Ventures. They build and grow with you until you are able to stand on your own.-NELSON USHINGO"

]
let index = 0;

function changeText() {
  dynamicText.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(changeText, 5000);


