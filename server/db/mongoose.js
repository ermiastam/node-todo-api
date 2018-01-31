var mongoose = require('mongoose');

mongoose.Promise = global.Promise;//to let mongoose know to use promises

mongoose.connect('mongodb://localhost:27017/ToDoApi');

module.exports ={
    //mongoose:mongoose
    mongoose //ES6 if property and value are same name use just name
}