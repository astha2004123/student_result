var mongoose = require('mongoose');

var resultschema = mongoose.Schema({
    name:{
        type:String
    },
    std:{
        type:String
    },
    sub1:{
        type:String
    },
    sub2:{
        type:String
    },
    sub3:{
        type:String
    },
    sub4:{
        type:String
    },
    sub5:{
        type:String
    },
    total:{
        type:String
    },
    pr:{
        type:String
    },
    admin_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin_list"
    }

})

module.exports = mongoose.model('result_list',resultschema);