// Import the Nodemailer library
const nodemailer = require("nodemailer");

const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.Server(app);
const port = 465;

app.listen(port);
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "compontents/Contact/Contact.js")));

//Route to send email

app.get("/Mail", function(req, response){
    response.sendFile(path.join(__dirname, "compontents/Contact/Contact.js"));
})

app.post("/send_email", function (req, res){
    const name = req.body.name;
    const from = req.body.from;
    const phone = req.body.phone;
    const message = req.body.message;
    const to = "info@solid-code.pl";

    const transporter = nodemailer.createTransport({
        host: "mail.solid-code.pl",
        port: port,
        secure: true, // use SSL
        auth: {
          user: "info@solid-code.pl",
          pass: "&9^12&^+6b(h",
        },
      });
      
      const mailOptions = {
        name: name,
        from: from,
        to: to,
        phone: phone,
        text: message
      }

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log("Error:", error);
        } else {
          console.log("Email sent:", info.response);
        }

      });

})