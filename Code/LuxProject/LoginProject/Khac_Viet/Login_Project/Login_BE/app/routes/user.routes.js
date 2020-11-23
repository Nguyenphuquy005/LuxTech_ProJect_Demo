module.exports = app => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Retrieve all Users
  router.get("/", users.findAll);

  // Retrieve all published Users
  router.get("/published", users.findAllPublished);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  router.post("/forgotPW", users.forgotPW);

  router.post("/login/:userName/:passWord", users.findOneByUserNameAndPassWord);
  router.post("/email/:email", users.findOneByEmail);
  router.post("/sendemail/:resertPasswordToken/:email", users.sendEmail);
  router.post("/puttokenupdate/:id/", users.updateTokenupdate);
  router.post("/resertPasswordToken/:resertPasswordToken", users.findOneByToken);
  // Update a User with id
  router.put("/:id", users.update);
  router.put("/puttokenupdate/:id", users.updateTokenupdate);

  // Delete a User with id
  router.delete("/:id", users.delete);

  // Create a new User
  router.delete("/", users.deleteAll);

  app.use('/api/users', router);
};