const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/security',{
    useNewUrlParser: true ,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema ;
 const   accountShechema  = new Schema({
          username: String ,
          password: String ,
          role : String
 },{
     collection: 'account'
 });

 const    AccountModel = mongoose.model('account',accountShechema) ;
 module.exports = AccountModel