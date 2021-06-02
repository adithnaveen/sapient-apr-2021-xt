const path = require("path"); 
const fs = require("fs"); 

const fileName = path.join(__dirname, "..", "data", "contacts.json"); 


// asycn way (callback / promise)
class ContactService {
    constructor() {
        try {
            this.data = JSON.parse(fs.readFileSync(fileName,"utf-8"));
        }catch(err) {
            this.data = {
                idCounter: 2, 
                contacts: [
                    {id:1, name:"Gautam", email:"gautam@ps.com", phone:"9090909090", city:"Chennai"},
                    {id:2, name:"Priyanka", email:"priyanka@ps.com", phone:"89898989", city:"Ranchi"}                    
                ]}

                fs.writeFileSync(fileName, JSON.stringify(this.data), 'utf-8');

        }
    }

    getContactById(id,callback) {
        if(!callback || typeof callback !== 'function') {
            throw new Error("Expected Callback to be function, but got ", typeof callback); 
        }
        setTimeout(() => {
            if(!id || typeof id !== 'number') {
                let err = {};
                err.code = 1001; 
                err.message = "ID was not spplied or was not a number";
                callback(err);
            }

            // console.log(this.data.contacts);
            let contact = this.data.contacts.find(c => c.id ===id);

            if(!contact) {
                let err = {};
                err.code = 1004; 
                err.message = "Contact with ID not Found";
                callback(err);
            }
            callback(null, contact);
        }, 0);
    }

    addContact(contact, callback) {
        if(!callback || typeof callback !== 'function') {
            throw new Error("Expected Callback to be function, but got ", typeof callback); 
        }

        setTimeout(() => {
            if(!contact || typeof contact !=='object') {
                let err ={};
                err.code =1002; 
                err.message = "Contact was not supplied or was not an object"; 
                callback(err); 
                return; 
            }

            const requiredFields = ['name', 'email', 'phone', 'city'];
            const missingFields =[]; 
    
            requiredFields.forEach(function(field) {
                if(!(field in contact)) {
                    missingFields.push(field);
                }
            })

            if(missingFields.length!==0) {
                let err = {};
                err.code=1003;
                err.message ="Please supply valid fields, Missing : ", missingFields.join();
                callback(err); 
                return; 
            }

            contact.id = ++ this.data.idCounter;
            this.data.contacts.push(contact); 

            fs.writeFile(fileName, JSON.stringify(this.data), 'utf-8', (err, data) => {
                if(err) {
                    callback(err);
                    return;
                }
                callback(null, contact);
            })
        }, 0);
    }

    getAllContacts(callback) {
        return null; 
    }

    updateContact(contact, callback) {
        return null; 
    }

    deleteContact(id, callback) {
        return null; 
    }
}

module.exports = ContactService; 