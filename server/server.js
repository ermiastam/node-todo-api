var express = require('express');
var bodyParser = require('body-parser')
var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {user} = require('./models/user')
var port = process.env.PORT || 3000

var app = express();
app.use(bodyParser.json());// the body of the request is converted to json

app.post('/todos',(req,res)=>{
//console.log(req.body);
var newtodo = new ToDo({
  text:req.body.text  
});
newtodo.save().then((doc)=>{
res.send(doc);
},(err)=>{
res.status(400).send(err);
});

});

app.listen(port,()=>{
console.log(`Started on port ${port}`);
});



















/*
//creating new ToDo

var newToDo = new ToDo({
text:"To code "    
});

newToDo.save().then((doc)=>{
console.log(doc);
},(err)=>{
console.log('unable to save to db',err)
});

var newTodo1 = new ToDo({
    text:'go to gym',
    completed:true,
    completedAt:1234
});

newTodo1.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(err)=>{
    console.log('unable to save to db', err)
});



var newuser = new user({
    email:'ermias@email.com'
});

newuser.save().then((doc)=>{
console.log(JSON.stringify(doc,undefined,2))
},(err)=>{
console.log('unable to save to db',err);
})
*/