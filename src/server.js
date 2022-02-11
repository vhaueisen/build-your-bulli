// server/index.js
"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.strato.de",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "buildyourbus@hangar426.com", // generated ethereal user
      pass: "Hangar@storm", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Build your Bulli" <buildyourbus@hangar426.com>', // sender address
    to: "vitorhaueisen@gmail.com", // list of receivers
    subject: "Build your Bulli - Your Quote", // Subject line
    text: "Your quote", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/api", (req, res) => {
  main().catch(console.error);
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
