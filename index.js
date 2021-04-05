const express = require("express");

let app = express();
let path =  require("path");
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
//
app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname+"/apply.html"));
});
//submit page
app.post("/submit",(req, res)=>{
    let FirstName = req.body.sFirstName;
    let LastName = req.body.sLastName;
    let Address = req.body.sAddress;
    let City = req.body.sCity;
    let State = req.body.listState;
    let ZipCode = req.body.sZipCode;
    let Email = req.body.sEmail;
    res.render("displayData1.ejs",{fname: FirstName, lname: LastName, address: Address, city:City, state:State, zipcode:ZipCode,email:Email});
});


app.listen(3000, console.log("listening"));
