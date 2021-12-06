const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

const jsonPath = "public/json/contact-input.json";
const loginPath = "login/login.json";

app.get("/", async function(req, res) {
    res.sendFile(path.join(__dirname, "public/html/index.html"));
})

app.post("/admin-login", async function(req, res) {
    const adminName = req.body.adminUser;
    const adminPass = req.body.adminPass;

    let data = fs.readFileSync(loginPath);
    let parsedData = JSON.parse(data);

    let adminAccount = parsedData.find(user => adminName === user.adminName);
    if (adminAccount) {
        
        if(req.body.adminPass === adminAccount.adminPass){
            res.sendFile(path.join(__dirname, "login/contactDetails.html"))
        }
        else{
            res.redirect("/html/admin.html")
        }
    }
    else{
        res.redirect("/html/admin.html")
    }
});

app.post("/contact", async function(req, res) {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;
    const message = req.body.text;

    const jsonDataIn = { firstname: firstName, lastname: lastName, email: email, message: message };

    let data =  fs.readFileSync(jsonPath);
    let parsedData = JSON.parse(data);

    parsedData.push(jsonDataIn);

    let stringedData = JSON.stringify(parsedData);
    fs.writeFile(jsonPath, stringedData, err => {
        if (err) throw err;
    });

    res.redirect("/");

});

app.listen(port, () => {
    console.log(`Server running at localhost:${port}`)
});

