var mongo = require("mongoose");  
var db =   
mongo.connect("mongodb://localhost:27017/reactcrud", function(err, response){  
   if(err){ console.log('Failed to connect to ' + db); }  
   else{ console.log('Connected to database '); }  
});  
  
  
module.exports =db; 