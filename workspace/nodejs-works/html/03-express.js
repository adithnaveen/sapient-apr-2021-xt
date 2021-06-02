const express = require("express"); 
const path = require("path");
const bodyParser = require("body-parser");
const app = express(); 



// i'm keeping it simple i.e., only for text not for images/ video etc 
app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.use(express.json({extended:false}))
// app.use(express.text({extended:false}));

app.get("/",(req, res) => {
    res.send("I'm home page");
})

app.get("/example", (req, res)=> {
    res.send("hi i'm in example route")
})

app.get("/example/:name/:age", (req, res) => {
    console.log("Params are", req.params);
    console.log("Name : " , req.params.name);
    console.log("Age : " , req.params.age);

    
    // http://localhost:3000/naveen/36/?city=blr&country=India

    console.log("query param for City ", req.query.city);
    console.log("query param for country : ", req.query.country);
    let retval = {
        name:req.params.name, 
        age: req.params.age, 
        city:req.query.city, 
        country:req.query.country
    }
    console.log("-----------------------------------");

    res.send(retval);


})

app.post("/example", (req, res) => {
    console.log(req.body);
    res.send("Data submitted successfully...");
})

app.get("/loginform", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "html", "postform.html"));

})

app.post("/submitaction", (req, res) => {
    console.log(req.body);
    res.send("You submitted... ");
})

app.listen(3000, () => console.log("Server started at 3000"));