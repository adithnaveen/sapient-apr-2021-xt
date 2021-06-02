const express = require("express"); 
const app = express();
app.use(express.json({extended:false}))
const port = 3000; 
const ContactService = require("./services/contact-service-mongo");
const cs = new ContactService(); 


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})


app.post("/api/db/contacts", (req, res) => {
    cs.addContact(req.body)
        .then(data => {
            let output ={}; 
            output.id = data; 
            output.address=`http://localhost:${port}/api/db/contacts/${data}`;
            res.json(output);
        })
        .catch(err => console.log(err));
})

app.get("/api/db/contacts", async (req, res) => {

    try {
        let contacts = await cs.getAllContacts();
        res.json(contacts);
    }catch(err) {
        console.log(err);
    }
})

app.get("/api/db/contacts/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let contact = await cs.getContactById(id); 
        let output ={};
        output.result = contact;
        output.allrecords =`http://localhost:${port}/api/db/contacts`;
        res.json(output);
    }catch(err){ 
        console.log(err);
    }
})



app.listen(port, () => console.log(`Application started at http://localhost:${port}/`))




