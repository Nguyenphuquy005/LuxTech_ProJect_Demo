var nodemailer = require('nodemailer');

const Senmail = (data) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tech37.qtdata@gmail.com',
            pass: 'qtdata@1996'
        }
    });

    var mailOptions = {
        from: 'tech37.qtdata@gmail.com',
        to: data,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default Senmail;