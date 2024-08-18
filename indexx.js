const dynamicText = document.getElementById('dancingText');
const texts = [
    "A good contact management \nsystem is not just a tool; it’s the backbone of \n customer relationships. \n— UNKNOWN",
    
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

document.getElementById("signupbutton").addEventListener("click", function() {

  const firstName = document.getElementById("typename").value;
  const lastName = document.getElementById("typesecondname").value;
  const address = document.getElementById("typeaddress").value;
  const phoneNumber = document.getElementById("typenumber").value;
  const email = document.getElementById("typeemail").value;


  const contact = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      email: email
  };



document.getElementById("signupbutton").addEventListener("click", function() {
  
  const firstName = document.getElementById("typename").value;
  const lastName = document.getElementById("typesecondname").value;
  const address = document.getElementById("typeaddress").value;
  const phoneNumber = document.getElementById("typenumber").value;
  const email = document.getElementById("typeemail").value;

  
  const contact = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      email: email
  };

 
console.log("data to be logged", contact)
});


fetch('http://localhost:9090/api/v1/contact', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(contact)
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert('Contact added successfully!');
})
.catch((error) => {
  console.error('Error:', error);
  alert('Failed to add contact.');
    });
});
