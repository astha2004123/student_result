var student = require('../model/student-model');
var storage = require('node-persist');
storage.init( );

/*STUDENT ADD */
exports.insert = async(req,res) =>{
    var admin_id = await storage.getItem('admin_id');
    req.body.admin_id = admin_id
    var data = await student.create(req.body);    
    res.status(200).json({
        status:"Student Data Successfully!",
        data,
    });
}

/*STUDENT LOGIN */
exports.login = async(req,res) =>{
    var data = await student.find({"email" : req.body.email});
    if(data.length == 1){
        if(data[0].password == req.body.password){
            res.status(200).json({
                status:"login"
            })
        }
        else{
            res.status(200).json({
                status:"plz chek your email and password"
            })
        }
    }
    else{
        res.status(200).json({
            status:"plz chek your email and password"
        })
    }
}
/* STUDENT UPDATE */
exports.update = async(req,res) =>{
    var data = await student.findByIdAndUpdate(req.params.id,req.body,{new:true});  
        res.status(200).json({
            status:"Data Update!"
        });   
}

/* STUDENT DELETE */
exports.delete = async(req,res) =>{
    var data = await student.findByIdAndDelete(req.params.id,req.body,{new:true});
    res.status(200).json({
        status:"Data Deleted!"       
    }); 
}
/* STUDENT LOGOUT */
exports.logout = async (req,res) =>{
    await storage.clear();
    res.status(200).json({
        status:"logout success!"
    });
}