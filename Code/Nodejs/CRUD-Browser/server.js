const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb://localhost:27017/" ;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json())

MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database');
    const db = client.db('mydb');
    const quotesCollection = db.collection('quotes');
    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
      });

      app.get('/', (req, res) => {
        const cursor = db.collection('quotes').find().toArray()
            .then(result => {
                console.log(result);
                res.render('index.ejs',{quotes: result})
            }).catch(error => console.error(error))
        console.log(cursor)
       
        app.get('/update/:id',function(req,res){
             db.collection("quotes").findOne().toArray()
             .then(result => {
              console.log(result);
              // res.render('detail.ejs',{quotes: result})
          }).catch(error => console.error(error))
                console.log(cursor)
          });
      })
  });


   
 

  app.listen(3000, function() {
    console.log('listening on 3000')
  })