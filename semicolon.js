const textTraining = document.getElementById('training');
textTraining.addEventListener('click', () => {
  textTraining.style.color = 'red';
});
function trainingg(){
  document.getElementById('trainingtalents').src = "https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710328896/Training_Talents_Placement_krh02w.jpg"
}

const textTalent = document.getElementById('talent');
textTalent.addEventListener('click', () => {
  textTalent.style.color = 'blue';
});

function placement(){
 var img = document.getElementById('trainingtalents')
 img.src="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710771885/sfpsgrc2oyam69g8tsip.jpg"

}

const employeeElement = document.getElementById('employee');
  employeeElement.addEventListener("click", () =>{
    employeeElement.style.color = 'red';
  });

  function upskilling(){
    document.getElementById('trainingtalents').src ="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710328895/Employee_Upskilling_baerho.jpg"
  }

  const projectElement = document.getElementById('project');
  projectElement.addEventListener("click", () =>{
    projectElement.style.color = 'black';
  });
  
  function imp(){
   document.getElementById('trainingtalents').src ='./projectimplementation.png';
  }

  const ventureElement = document.getElementById('venture');
  ventureElement.addEventListener('click', () => {
    ventureElement.style.color = 'blue';
  });  
  
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


