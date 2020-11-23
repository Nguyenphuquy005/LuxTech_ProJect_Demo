var checkLogin = (req,res,next)=>{
    try{
       var token= req.cookies.token
       var idUser = jwt.verify(token,'mk')
       AccountModel.findOne({
          _id : idUser
       })
       .then(data=>{
          if(data){
             next()
          }else{
             res.json('ban khong co quyen')
          }
       })
       .catch(err=>{
 
       })
    }catch(err){
          res.status(500).json('loi token')
    }
   }


   var checkMnager = (req,res,next)=>{
    try{
       var token= req.cookies.token
       var idUser = jwt.verify(token,'mk')
       AccountModel.findOne({
          _id : idUser
       })
       .then(data=>{
          if(data){
             var role = data.role
             console.log(data.role);
             if(role ==='manager'){
                next()
             }else{
                res.json('Not Permission')
             }
          }
       })
       .catch(err=>{
 
       })
    }catch(err){
          res.status(500).json('loi token')
    }
   }
   module.exports = checkMnager , checkLogin ;