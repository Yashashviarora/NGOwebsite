const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
// instantiate an express app
const app = express();

//make the contact page the the first page on the app


//port will be 5000 for testing
app.get('/',function(req,res) {
  res.sendFile('.\contact.html');
  res.sendFile('.\style.css');
  res.sendFile('.\script.js')
});

let transporter = nodemailer.createTransport({
service:"gmail",// true for 465, false for other ports
    auth: {
      user: "arorakhushi176@gmail.com", // generated ethereal user
      pass: "mucpeamwncccygvo", // generated ethereal password
    },
});
transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  app.post("/send", (req, res) => {
    //1.
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
      console.log(fields);
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });
  
      //2. You can configure the object however you want
      const mail = {
        from: data.MAIL,
        to: "arorakhushi176@gmail.com",
        subject: data.subject,
        text: `${data.name} <${data.email}> \n${data.Message}`,
      };
  
      //3.
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong.");
        } else {
          res.status(200).send("Email successfully sent to recipient!");
        }
      });
    });
  });
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
