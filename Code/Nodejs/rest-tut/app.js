const bodyParser = require('body-parser');
const express = require('express');
const app = express() ;
const mongoose = require('mongoose');
const body_Parser = require('body-parser');
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./models/Post")(mongoose);
require('dotenv/config');

app.use(body_Parser.json());

const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

app.get('/',(req,res) => {
    res.send('weare on home')
})

mongoose.connect(
    process.env.DB_CONNECTION ,
    { useUnifiedTopology: true } ,() =>
console.log('conecto DB')
);

app.listen(3000) ;