const textTraining = document.getElementById('training');

textTraining.addEventListener('click', () => {
  textTraining.style.color = 'red';
});

const textTalent = document.getElementById('talent');
textTalent.addEventListener('click', () => {
  textTalent.style.color = 'blue';
  
});
// const circlee = document.getElementsById('talent');
// circlee.addEventListener('click', () => {
// circlee.style.color = 'blue';
// });

function trainingg(){
  document.getElementById('trainingtalents').src = "https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710328896/Training_Talents_Placement_krh02w.jpg"
}

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
  
  function implementation(){
    document.getElementById('trainingtalents').src ="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710328895/lab_illustration_updated_sqal9w.png";
  }

  const ventureElement = document.getElementById('venture');
  ventureElement.addEventListener('click', () => {
    ventureElement.style.color = 'blue';
  });  









