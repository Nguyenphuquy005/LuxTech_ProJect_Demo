const db = require("../models");
const User = db.users;
const EncodePass = require("../enVsDeCode/encode");
const encode = require("../enVsDeCode/encode");
const randomToken = require('random-token');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tech37.qtdata@gmail.com',
    pass: 'qtdata@1996'
  }
});




// Create and Save a new User
exports.create = (req, res) => {
  if (!req.body.userName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    userName: req.body.userName,
    passWord: EncodePass(req.body.passWord),
    email: req.body.email,
    resertPasswordToken: req.body.resertPasswordToken
  });

  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const title = req.query.userName;

  var condition = title ? { title: { $regex: new RegExp(userName), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

exports.findOneByUserNameAndPassWord = (req, res) => {
  const userName = req.params.userName;
  const passWord = EncodePass(req.params.passWord);

  User.findOne({ userName, passWord })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Not found User with USERNAME " + userName });
      }
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with USER=" + userName });

    });
};

exports.findOneByEmail = (req, res) => {
  const email = req.params.email;


  User.findOne({ email })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Not found User with Email " + email });
      }
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with Email=" + email });

    });
};

exports.findOneByToken = (req, res) => {
  const resertPasswordToken = req.params.resertPasswordToken;


  User.findOne({ resertPasswordToken })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Not found User with Token " + resertPasswordToken });
      }
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with Token=" + resertPasswordToken });

    });
};

exports.sendEmail = (req, res) => {
  const token = req.params.resertPasswordToken;
  const email = req.params.email;

  const mailOptions = {
    from: 'tech37.qtdata@gmail.com',
    to: email,
    subject: 'FotGot password',
    text: 'http://localhost:3000/updatePassWord/' + token,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      console.log('123')
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}



exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  req.body.passWord = encode(req.body.passWord)
  console.log(req.body.passWord)
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
    .then(data => {

      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({
        message: "User was updated successfully.",
        data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

exports.forgotPW = async (req, res) => {
  const { email } = req.body;
  console.log({ email })
  try {
    const user = await User.findOne({
      email
    })
    console.log({ user })

    if (!user) {
      res.status(400).send({
        message: "User not found!"
      })
    }

    const token = randomToken(16)
    user.resertPasswordToken = token
    await user.save();

    const mailOptions = {
      from: 'tech37.qtdata@gmail.com',
      to: user.email,
      subject: 'Reset password',
      text: 'http://localhost:3000/updatePassWord/' + token,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({
      message: "Please check your mail inbox to reset your password!"
    })

  } catch (error) {
    console.log({ error })

    res.status(400).send({
      message: error.message
    })
  }
}


exports.updateTokenupdate = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  var token = randomToken(16);

  req.body = {
    resertPasswordToken: token
  }

  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
    .then(data => {

      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({
        message: "User was updated successfully.",
        data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};

// Find all published Users
exports.findAllPublished = (req, res) => {
  User.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};