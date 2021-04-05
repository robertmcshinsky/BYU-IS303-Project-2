//this is the stuff that runs Node, Express, and EJS
const express = require("express");
let app = express();
let path =  require("path");
//this should make it so we can see the css and java through the server
app.use(express.static(path.join(__dirname, 'public')));
//this makes it so we can read the data from the POST
app.use(express.urlencoded({extended: true}));
//this enables our EJS
app.set("view engine", "ejs");

//apply page
app.get("/apply.html",(req, res)=>{
    res.sendFile(path.join(__dirname+"/apply.html"));
});
//home page
app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});
//about page
app.get("/about.html",(req, res)=>{
    res.sendFile(path.join(__dirname+"/about.html"));
});
//submit page
app.post("/submit",(req, res)=>{
    //set the information that we pulled the variables
    let FirstName = req.body.sFirstName;
    let LastName = req.body.sLastName;
    let Address = req.body.sAddress;
    let City = req.body.sCity;
    let State = req.body.listState;
    let ZipCode = req.body.sZipCode;
    let Email = req.body.sEmail;
    //this sends the variables that we made to the displayData page to be rendered
    res.render("displayData1.ejs",{fname: FirstName, lname: LastName, address: Address, city:City, state:State, zipcode:ZipCode,email:Email});
});

//when you start the node page this sends back "listen".
app.listen(3000, console.log("listening"));
