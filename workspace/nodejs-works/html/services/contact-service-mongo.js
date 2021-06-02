const mc = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const url ="mongodb://localhost";
const dbName = 'sap-db'; 
const collection ="contacts"; 


function getContactsCollection(callback) {
    // for the callback 
    // 1. is error
    // 2. is client (mongo client)
    // 3. is the contactCollection 
    mc.connect(url, (err, client) => {
        if(err) {
            callback(err); 
        }

        const db = client.db(dbName); 
        const contactsCollection = db.collection(collection); 
        callback(null, client, contactsCollection); 
    })
}


class ContactService  {
    addContact(contact) {
        return new Promise((resolve, reject) => {
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
                
            }

            getContactsCollection((err, client, contacts) => {
                if(err) {
                    reject(err);
                }
                
                contacts.insertOne(contact, (err, doc) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(doc.insertedId);
                    }
                    client.close();
                })
            })
        })
    }

    getAllContacts() {
        return new Promise((resolve, reject) => {
            getContactsCollection((err, client, contacts) => {
                if(err) {
                    reject(err)
                    client.close();
                }

                contacts.find().toArray((err, data) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(data)
                    }
                    client.close();
                })
                
            })
        })
    }

    getContactById(id) {
        return new Promise((resolve, reject) => {
            if(!id || typeof id !=='string') {
                let err = {};
                err.code = 1001; 
                err.message = "ID was not spplied or was not valid";
                reject(err);
            }

            getContactsCollection((err, client, contacts) => {
                if(err) {
                    reject(err);
                    client.close();
                    return;
                }

                try {
                    id = new ObjectId(id); 
                    contacts.findOne({_id:id}, (err, data) => {
                        if(err) {
                            reject(err);
                        }else {
                            resolve(data);
                        }
                    })
                }catch(err) {
                    reject(err);
                }

                client.close();
            })


        })
    }


}
module.exports = ContactService; 