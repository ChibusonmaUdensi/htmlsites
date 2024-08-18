const dynamicText = document.getElementById('dancingText');
const texts = [
    "A good contact management system \nis not just a tool; it’s the backbone of \n customer relationships. \n— UNKNOWN",
    
    "The ability to efficiently manage \n contacts can be the difference between a \nlostlead and a long-term client. \n— UNKNOWN",
    
    "Your network is your net worth, and a \n robust contact  management system is the \nfoundation of that network. \n— Porter Gale",

    "A well-organized contact database is \n not just a list;it is the pulse \n of your business. \n— LAMBO",

    "A contact management system turns your\n address book into a powerful \nbusiness tool. \n— Unknown",

    "The better you manage your \ncontacts, the better you can manage \nyour business.\n-IKIGAI"

  
]
const br = document.createElement('br');
dynamicText.appendChild(br);
let index = 0;

function changeText() {
  dynamicText.textContent = texts[index];
  index = (index + 1) % texts.length;
}
setInterval(changeText, 5000);

// function validateForm() {
//     const requiredInputs = document.getElementById('mycontactform').querySelectorAll('input[required]');
//     return Array.from(requiredInputs).every(input => input.value.trim() !== '');
//   }
  
//   const submitButton = document.getElementById("signupbutton")
// const form = document.getElementById('mycontactform');
// form.addEventListener('submit',(event) => {
//     if (!validateForm()){
//   event.preventDefault();
//     alert('Please fill in all required fields.');
// }
//     else{
//         alert('Form submitted successfully!');
//         form.reset();
  
//     }
//   })
  
//   const firstName = document.getElementById('typename').value;
//   const lastName = document.getElementById('typesecondname').value;
//   const id = document.getElementById('typeid').value;
// const address = document.getElementById('typeaddress').value;

//   const email = document.getElementById('typeemail').value;
//   const phone = document.getElementById('phone').value;
  
//   const data = {
//    firstName : firstName,
//     lastName : lastName,
//     address : address,
//     id : id,
//     email : email,
//     phone : phone
//   };

//   // const formData = new FormData(form);

//   const API_URL = 'http://localhost:9090/api/v1'; 

//   fetch("http://localhost:9090/api/v1/contact", {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
    
//       })
//   .then(response => response.json())
//   .then(data => console.log('Data Sent Successfully', data))
//   .catch(error => console.error('Error:', error));
// ;
// // Fetch API to retrieve all contacts
// fetch(API_URL)
// .then(response => response.json())
// .then(data => console.log('Data Received:', data))
// .catch(error => console.error('Error:', error));
//  ;
//  // Fetch API to update a contact
//  fetch(`${API_URL}/${contact.id}`, {
//  method: 'PUT',
//  headers: {
//      'Content-Type': 'application/json'
//  },
//  body: JSON.stringify(contact)
// })
// .then(response => response.json())
// .then(data => console.log('Data Updated Successfully', data))
// .catch(error => console.error('Error:', error));
// ;
//  // Fetch API to delete a contact
//  fetch(`${API_URL}/${contact.id}`, {
//  method: 'DELETE',
// })
// .then(response => response.json())
// .then(data => console.log('Data Deleted Successfully', data))
// .catch(error => console.error('Error:', error));
// ;
//  // Fetch API to search contacts
//  fetch(`${API_URL}?firstName=John&lastName=Doe`)
// .then(response => response.json())
// .then(data => console.log('Data Received:', data))
// .catch(error => console.error('Error:', error));
// ;
//  // Fetch API to sort contacts
//  fetch(`${API_URL}?sort=firstName`)
// .then(response => response.json())
// .then(data => console.log('Data Received:', data))
// .catch(error => console.error('Error:', error));
// ;





// // // // document.addEventListener('DOMContentLoaded', function() {
// // //     loadPhonebooks();
    
// // //     document.getElementById('createPhonebookBtn').addEventListener('click', createPhonebook);
// // //     document.getElementById('createContactBtn').addEventListener('click', createContact);
// // // });
// document.getElementById("signupbutton").addEventListener("click", function(event) {
//   // Prevent the default form submission
//   event.preventDefault();

//   // Gather form data
//   const firstName = document.getElementById("typename").value.trim();
//   const lastName = document.getElementById("typesecondname").value.trim();
//   const address = document.getElementById("typeaddress").value.trim();
//   const phoneNumber = document.getElementById("typenumber").value.trim();
//   const email = document.getElementById("typeemail").value.trim();

//   // Validate form data
//   if (!firstName) {
//       alert("First Name is required");
//       return;
//   }

//   if (!lastName) {
//       alert("Last Name is required");
//       return;
//   }

//   if (!address) {
//       alert("Address is required");
//       return;
//   }

//   if (!phoneNumber) {
//       alert("Phone Number is required");
//       return;
//   }

//   if (!email) {
//       alert("Email is required");
//       return;
//   }

//   // Create a contact object
//   const contact = {
//       firstName: firstName,
//       lastName: lastName,
//       address: address,
//       phoneNumber: phoneNumber,
//       email: email
//   };

//   // Make an API call using fetch
//   fetch('http://localhost:8080/api/v1/contact', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(contact)
//   })
//   .then(response => response.json())
//   .then(data => {
//       console.log('Success:', data);
//       alert('Contact added successfully!');
//       document.getElementById("mycontactform").reset(); // Reset form after successful submission
//   })
//   .catch((error) => {
//       console.error('Error:', error);
//       alert('Failed to add contact.');
//   });
// });

document.getElementById("signupbutton").addEventListener("click", function() {
  // Gather form data
  const firstName = document.getElementById("typename").value;
  const lastName = document.getElementById("typesecondname").value;
  const address = document.getElementById("typeaddress").value;
  const phoneNumber = document.getElementById("typenumber").value;
  const email = document.getElementById("typeemail").value;

  // Create a contact object
  const contact = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      email: email
  };

  // Make an API call using fetch
//   fetch('http://localhost:9090/api/v1/contact', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(contact)
//   })
//   .then(response => response.json())
//   .then(data => {
//       console.log('Success:', data);
//       alert('Contact added successfully!');
//   })
//   .catch((error) => {
//       console.error('Error:', error);
//       alert('Failed to add contact.');
//   });
// });
document.getElementById("signupbutton").addEventListener("click", function() {
  // Gather form data
  const firstName = document.getElementById("typename").value;
  const lastName = document.getElementById("typesecondname").value;
  const address = document.getElementById("typeaddress").value;
  const phoneNumber = document.getElementById("typenumber").value;
  const email = document.getElementById("typeemail").value;

  // Create a contact object
  const contact = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      email: email
  };

  // Make an API call using fetch
console.log("data to be logged", contact)
});
});
