
class ContactService {
    constructor() {
        this.data = {
            idCounter: 2, 
            contacts: [
                {id:1, name:"Gautam", email:"gautam@ps.com", phone:"9090909090", city:"Chennai"},
                {id:2, name:"Priyanka", email:"priyanka@ps.com", phone:"89898989", city:"Ranchi"}
                
            ]
        };
    }

    getContactById(id) {
        if(!id || typeof id !== 'number') {
            throw new Error("Sorry please enter a valid numbernumber")
        }
        for(let contact of this.data.contacts) {
            if(contact.id === id) {
                return contact; 
            }
        }
        return null; 
    }

    getAllContact () {
        return [...this.data.contacts]; 
    }

    addContact(contact) {
        if(!contact || typeof contact !== 'object') {
            throw new Error("Sorry please supply valid contact object"); 
        }

        const requiredFields = ['name', 'email', 'phone', 'city'];
        const missingFields =[]; 

        requiredFields.forEach(function(field) {
            if(!(field in contact)) {
                missingFields.push(field);
            }
        })
        if(missingFields.length!==0) {
            throw new Error("Please supply missing fields: : " , missingFields.join())
        }
        
        contact.id = ++ this.data.idCounter; 
        this.data.contacts.push(contact); 
        return {...contact}; 

    }

    // try this 
    updateContact(contact) {
        return null; 
    }

    deleteContact(id) {
        return null; 
    }

}

module.exports = ContactService; 