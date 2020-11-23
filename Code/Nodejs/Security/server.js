var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const AccountModel = require("./models/Account");
var cookieParser = require('cookie-parser');
var check = require('./check/CheckLogin')

var jwt = require('jsonwebtoken');
const { CLIENT_RENEG_LIMIT } = require('tls');

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')))

var checkLogin = (req, res, next) => {
   try {
      var token = req.cookies.token
      var idUser = jwt.verify(token, 'mk')
      AccountModel.findOne({
         _id: idUser
      })
         .then(data => {

            if (data) {
               next()
            } else {
               res.json('ban khong co quyen')
            }
         })
         .catch(err => {

         })
   } catch (err) {
      res.status(500).json('loi token')
   }
}
var checkStudent = (req, res, next) => {
   try {
      var token = req.cookies.token
      var idUser = jwt.verify(token, 'mk')
      AccountModel.findOne({
         _id: idUser
      })
         .then(data => {
            if (data) {
               var role = data.role
               console.log(data.role);
               if (role === 'student' || role === 'teacher' || role === 'manager') {
                  next()
               } else {
                  res.json('Not Permission')
               }
            }
         })
         .catch(err => {

         })
   } catch (err) {
      res.status(500).json('loi token')
   }
}
var checkTeacher = (req, res, next) => {
   try {
      var token = req.cookies.token
      var idUser = jwt.verify(token, 'mk')
      AccountModel.findOne({
         _id: idUser
      })
         .then(data => {
            if (data) {
               var role = data.role
               console.log(data.role);
               if (role === 'teacher' || role === 'manager') {
                  next()
               } else {
                  res.json('Not Permission')
               }
            }
         })
         .catch(err => {

         })
   } catch (err) {
      res.status(500).json('loi token')
   }
}


var checkMnager = (req, res, next) => {
   try {
      var token = req.cookies.token
      var idUser = jwt.verify(token, 'mk')
      AccountModel.findOne({
         _id: idUser
      })
         .then(data => {
            if (data) {
               var role = data.role
               console.log(data.role);
               if (role === 'manager') {
                  next()
               } else {
                  res.json('Not Permission')
               }
            }
         })
         .catch(err => {

         })
   } catch (err) {
      res.status(500).json('loi token')
   }
}


app.get('/login', function (req, res) {
   res.sendFile(path.join(__dirname, 'public/login.html'))
})



app.get('/home', (req, res, next) => {
   var token = req.header;
   console.log(token);
   next()
}, function (req, res) {
   res.sendFile(path.join(__dirname, 'public/home.html'))
})



app.post('/login', (req, res, next) => {
   const { username, password } = req.body
   AccountModel.findOne({
      username,
      password
   })
      .then(data => {
         if (data) {
            var token = jwt.sign({
               _id: data._id
            }, 'mk')
            return res.json({
               message: 'thanhcong',
               token: token
               // next
            })

         }
         else {
            return res.json("that bai")
         }
      })
      .catch(err => {
         res.status(500).json('loi server')
      })
});


app.get("/private", checkLogin

   , (req, res, next) => {
      // res.sendFile(path.join(__dirname,'public/test.html'))
      res.json("welcom")

   });


app.get("/task", checkLogin, checkStudent, (req, res, next) => {
   res.json("ALL task")
});

app.get("/student", checkTeacher, (req, res, next) => {
   res.json("ALL student")
});

app.get("/manager", checkMnager, (req, res, next) => {
   res.json("ALL manager")
});








app.listen(4000, function (req, res) {
   console.log("asdsd");
});