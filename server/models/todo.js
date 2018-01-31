const mongoose = require('mongoose');


var ToDo = mongoose.model('ToDo',{
    text:{
        type:String,
        minlength:1,
        required:true,
        trim:true // removes leading and trailing spaces
    },
    completed:{
        type:Boolean,
      // required:true, // to make it required
      default:false
    },
    completedAt:{
        type:Number,
        default:null
    }

}
);


module.exports = {
ToDo
}