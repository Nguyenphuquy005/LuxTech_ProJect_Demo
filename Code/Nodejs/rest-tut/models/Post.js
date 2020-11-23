const mongoose = require('mongoose');

const PostSchema = mongoose.model(
    "post",
    mongoose.Schema(
      {
        title: {
            type : String,
            requied:true
        },
        description:{
            type : String,
            requied:true
        },
        date: {
            type : Date ,
            default: Date.now
        },
      },
      { timestamps: true }
    )
  );

// const PostSchema = mongoose.Schema({
//     title: {
//         type : String,
//         requied:true
//     },
//     description:{
//         type : String,
//         requied:true
//     },
//     date: {
//         type : Date ,
//         default: Date.now
//     },
// })

mongoose.Schema({
    username: String
})

module.exports= mongoose.model('Post', PostSchema);