module.exports = mongoose => {
  const User = mongoose.model(
    "users",
    mongoose.Schema(
      {
        userName: String,
        passWord: String,
        email: String,
        resertPasswordToken: String

      },
      { timestamps: true }
    )
  );

  return User;
};