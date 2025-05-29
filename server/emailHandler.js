import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const QuoteHandler = async (req) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.strato.de",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Build your Bulli" <buildyourbus@hangar426.com>', // sender address
    to: `buildyourbus@hangar426.com, ${req.body.user.email}`, // list of receivers
    subject: `Build your Bulli - ${req.body.user.name} Quote`, // Subject line
    html: `Hello <b>${req.body.user.name}</b>, <br /> Your Bulli parts summary is attached below. <br /> <br /> Additional Questions: <br/><b>${req.body.user.questions}</br></b>`, // html body
    attachments: [
      {
        path: req.body.content,
        filename: `Build you Bus_${new Date().toDateString()}.pdf`,
      },
    ],
  });
};
