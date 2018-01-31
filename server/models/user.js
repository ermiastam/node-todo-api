var mongoose = require('mongoose');

var user = mongoose.model('user',{
    email:{
        type:String,
        trim:true,
        minlength:5,
        require:true
    }
    
    });

    module.exports ={user};