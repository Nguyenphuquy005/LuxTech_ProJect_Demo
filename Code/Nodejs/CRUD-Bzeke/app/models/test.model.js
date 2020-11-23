module.exports = mongoose => {
    const Test = mongoose.model(
      "test",
      mongoose.Schema(
        {
          title: String,
          description: String,
          check: String ,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Test;
  };