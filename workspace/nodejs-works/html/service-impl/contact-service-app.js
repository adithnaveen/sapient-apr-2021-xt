const  ContactService = require("../services/contact-service");

const cs = new ContactService(); 

let contact = {
    name:"Deepesh", 
    email:"deepesh@gmail.com", 
    phone:"3234343434",     
    city:"Delhi"
}; 

let newContact = {
    name:"Deepesh", 
    email:"deepesh.k@gmail.com", 
    phone :"3344332", 
    city:"Mysuru", 
    id:3
}; 


let retContact = cs.addContact(contact); 
console.log("Returned Contact : ",retContact);
console.log("--------------------------------------------------------");
// let allContacts = cs.getAllContact(); 
// console.log(allContacts);

cs.getAllContact().forEach((contact) => {
    console.log(contact);
})
/*
console.log("--------------------------------------------------------");
let getPriyankaRecord = cs.getContactById(2); 
console.log(getPriyankaRecord);


// cs.deleteContact(2); 

cs.getAllContact().forEach((contact) => {
    console.log(contact);
})

console.log("-----------------after update---------------------------------------");

cs.updateContact(newContact);
cs.getAllContact().forEach((contact) => {
    console.log(contact);
})

*/
