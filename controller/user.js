var userModel = require("../model/user.model")


module.exports ={
addUser: addUser,
listUser : listUser,
deleteUser : deleteUser
}

function addUser(req,res){
  console.log("succesful",req.body);
  try{
      if(req.body.name){
          const userObj= new userModel({
              name : req.body.name
          })

          userObj.save(userObj, function(err,response){
              if(err){
                res.json({code: 501,message: "Erorr",data: err})
              }
              else{
                  res.json({code: 200,message: "success",data: response})
              }

          })

      }
      else{
        res.json({code: 501,message: "Missing Name"})
      }

  }catch(error){
    res.json({code: 501,message: "Erorr",data: error })

  }
}

//Do try and Catch
function listUser(req,res){
    userModel.find(function(err,response){
        res.json({code: 200,message: "success",data: response})
    })

}

function deleteUser(req, res){
    console.log("res",req.body)
    var test = req.body.xyz;
    userModel.findOneAndRemove({ name:test },function(err,response){
        if(err)
        {
            res.json({code:501, message:"no data present"})
        }
        else{
            console.log("test1",response)
            res.json({code: 200,message: "success",data: response})
        }
    })
}