const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tech37.qtdata@gmail.com',
    pass: 'qtdata@1996'
  }
});

transporter.verify(function (error, success) {
  // Nếu có lỗi.
  if (error) {
    console.log("213");
  } else { //Nếu thành công.
    console.log('Kết nối thành công!');
  }
});
var mailList = [
  'nguyenphuquyracer@gmail.com',
  'tech37.qtdata@gmail.com',
];
var mailOption = {
  from: 'tech37.qtdata@gmail.com',
  to: 'nguyenphuquyracer@gmail.com',
  subject: 'Nodejs test',
  text: 'THis is my mail'
};

transporter.sendMail(mailOption, function (err, info) {
  if (err) {
    console.log(err, "====>");
  } else {
    console.log('email sent' + info.response);
  }
})