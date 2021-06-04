

function validateContactObject(contact) {
    if (!contact || typeof contact !== 'object') {
        throw new Error("Sorry please supply valid contact object");
    }

    const requiredFields = ['name', 'email', 'phone', 'city'];
    const missingFields = [];

    requiredFields.forEach(function (field) {
        if (!(field in contact)) {
            missingFields.push(field);
        }
    })
    if (missingFields.length !== 0) {
        throw new Error("Please supply missing fields: : ", missingFields.join())
    }
}

function validateId(id) {
    if (!id || typeof id !== 'number') {
        throw new Error("Sorry please enter a valid number number")
    }
}

class ContactService {
    constructor() {
        this.data = {
            idCounter: 2,
            contacts: [
                { id: 1, name: "Gautam", email: "gautam@ps.com", phone: "9090909090", city: "Chennai" },
                { id: 2, name: "Priyanka", email: "priyanka@ps.com", phone: "89898989", city: "Ranchi" }

            ]
        };
    }

    getContactById(id) {
        try {
            validateId(id);
            for (let contact of this.data.contacts) {
                if (contact.id === id) {
                    return contact;
                }
            }

        } catch (err) {
            console.log(err);
        }

        return null;
    }

    getAllContact() {
        return [...this.data.contacts];
    }

    addContact(contact) {
        try {
            validateContactObject(contact);
            contact.id = ++this.data.idCounter;
            this.data.contacts.push(contact);
            return { ...contact };
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    deleteContact(id) {
        try {
            validateId(id);

            for (let contact in this.data.contacts) {
                if (this.data.contacts[contact].id === id) {
                    this.data.contacts.splice(contact, 1);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    // try this 
    updateContact(contact) {
        validateContactObject(contact);

        this.deleteContact(contact.id);
        this.data.contacts.push(contact);
        return contact;
    }



}

module.exports = ContactService;