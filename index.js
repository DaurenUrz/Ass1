const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: "Urzakanov@gmail.com", 
    pass: "lwhy gbfk jfnn tzxv", 
  },
});

const mailOptions = {
  from: "urzakanov@gmail.com",
  to: "udauka05@gmail.com",
  subject: "Hello Dauren",
  text: "How are you?",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("error!!!", error);
  } else {
    console.log("letter was sent succesfully!!!", info.response);
  }
});