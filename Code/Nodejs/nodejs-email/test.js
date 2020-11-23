const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tech37.qtdata@gmail.com',
    pass: 'qtdata@1996'
  }
});
var mailOption = {
  from: 'nguyenphuquyracer@gmail.com',
  to: 'tech37.qtdata@gmail.com',
  subject: 'Nodejs test',
  text: 'THis is my mail'
};

transporter.sendMail(mailOption, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log('email sent');
  }
})