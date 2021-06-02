const  ContactService = require("../services/contact-service");

const cs = new ContactService(); 

let contact = {
    name:"Deepesh", 
    email:"deepesh@gmail.com", 
    phone :"6767676767", 
    city:"Delhi"
}; 

let retContact = cs.addContact(contact); 
console.log("Returned Contact : ",retContact);
console.log("--------------------------------------------------------");
// let allContacts = cs.getAllContact(); 
// console.log(allContacts);

cs.getAllContact().forEach((contact) => {
    console.log(contact);
})

console.log("--------------------------------------------------------");
let getPriyankaRecord = cs.getContactById(2); 
console.log(getPriyankaRecord);


