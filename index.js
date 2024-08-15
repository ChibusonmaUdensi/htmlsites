const data = document.getElementById('signup');
const sum = document.getElementById('login');

sum.addEventListener('click', () => {
  sum.style.color = 'yellow';
 data.style.color = 'white';
});

data.addEventListener('click', () => {
    data.style.color = 'yellow';
   sum.style.color = 'white';
});

const showFormButton = document.getElementById('signup');
const form = document.getElementById('myForm');
showFormButton.addEventListener('click', () => {
  form.style.display = form.style.display === 'block' ? 'none' : 'block';
});

const showButton = document.getElementById('login');
const logform = document.getElementById('myForm2');
showButton.addEventListener('click', () => {
  logform.style.display = logform.style.display === 'block'? 'none' : 'block';
});

const API_URL = 'http://localhost:8081/api'; 

document.addEventListener('DOMContentLoaded', function() {
    loadPhonebooks();
    
    document.getElementById('createPhonebookBtn').addEventListener('click', createPhonebook);
    document.getElementById('createContactBtn').addEventListener('click', createContact);
});