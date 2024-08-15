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
const API_URL = 'http://localhost:8081/api/contacts'; 

const form = document.getElementById('mycontactform');
form.addEventListener('submit',() => {
  event.preventDefault();

  const name = document.getElementById('typename').value;
  const secondName = document.getElementById('typesecondname').value;
  const id = document.getElementById('typeid').value;
  const email = document.getElementById('typeemail').value;
  const phone = document.getElementById('phone').value;


  const data ={
    name : name,
    secondName : secondName,
    id : id,
    email : email,
    phone : phone
  }
 
  postData("http://localhost:8081/api/contacts", data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

//   fetch(API_URL, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//           name,
//           email,
//           phone,
//           message
//       })
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
// });




// // // document.addEventListener('DOMContentLoaded', function() {
// //     loadPhonebooks();
    
// //     document.getElementById('createPhonebookBtn').addEventListener('click', createPhonebook);
// //     document.getElementById('createContactBtn').addEventListener('click', createContact);
// // });