var result = require('../model/result-model');
var storage = require('node-persist');
storage.init( );

/*RESULT ADD */
exports.insert = async(req,res) =>{
    var admin_id = await storage.getItem('admin_id');
    req.body.admin_id = admin_id;
    var data = await result.create(req.body);
    res.status(200).json({
        status:"Data add!"
    })
}

/* RESULT VIEW */
exports.view = async(req,res) =>{
    var data = await result.find().populate("admin_id");   
    res.status(200).json({
        status:"View Data Successfully!",
        data
    });
}

/* RESULT UPDATE */
exports.update = async(req,res) =>{
    var data = await result.findByIdAndUpdate(req.params.id,req.body,{new:true});  
        res.status(200).json({
            status:"Data Update!"
        });   
}

/* RESULT DELETE */
exports.delete = async(req,res) =>{
    var data = await result.findByIdAndDelete(req.params.id,req.body,{new:true});
    res.status(200).json({
        status:"Data Deleted!"       
    }); 
}

/*GET SINGLE RESULT */
exports.single_result = async(req,res) =>{
    var data = await result.findById(req.params.id,req.body,{new:true}).populate("admin_id");
    console.log(data);
    res.status(200).json({
        status:"data view!",
        data
    })
}

/*TOP 5 RESULT */
exports.view5 = async(req,res) =>{
    var data = await result.find().limit(5).populate("admin_id");
    res.status(200).json({
        status:"data view!",
        data
    })
}