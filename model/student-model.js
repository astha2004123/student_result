var mongoose = require('mongoose');

var studentschema = mongoose.Schema({
    name:{
        type:String
    },
    std:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    result:{
        type:String
    },
    admin_id:{
        type:String 
    }
});

module.exports = mongoose.model('student_list',studentschema);