const express = require("express"); 
const app = express();
app.use(express.json({extended:false}))
const port = 3000; 
const ContactService = require("./services/contact-service-async");
const cs = new ContactService(); 


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})


app.get("/api/contacts/:id", (req, res) => {
    const id  = req.params.id;

    // you can use parseInt or + 
    cs.getContactById(+id, (err, data) => {
        if(err) {

            res.json(err);
            return; 
        }else {
            res.json(data);
            return; 
        }
    })
})

app.post("/api/contacts", (req, res) => {
    cs.addContact(req.body, (err, data) => {
        if(err) {
            res.json(err);
            return ; 
        }else {
            res.json(data);
            return; 
        }
    })
})




app.listen(port, () => console.log("Application started at ", port));



