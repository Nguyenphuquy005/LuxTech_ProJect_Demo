var jwt = require('jsonwebtoken');
var data = {username: 'nodemy'}
var token = jwt.sign(data,'nodemy12345');

var t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vZGVteSIsImlhdCI6MTYwMjU3MzA5NX0.uSZ6_4QRs6jevg88_ivrTnQv04BArD4eJpJ2FSn7sJA'
// jwt.verify(t,'nodemy12345')

// console.log(jwt.verify(t,'nodemy12345'))
jwt.sign(data,'nodemy12345',
    {
        expiresIn: 30
    }
,function (err,data) {
    console.log('data',data); 
})
