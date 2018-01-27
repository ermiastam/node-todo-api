//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID} = require('mongodb') //destructuring ES-6
//Object Id
var obj = new ObjectID()// using this we can have our own objectId and use it for what ever we ant it for
console.log(obj);
//des
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url,(err,db)=>{
    var dbo = db.db("ToDoApi");//setting the name of the db
if(err){
    return console.log('unableto connect');
}
console.log('successfully connected to db');
/*
dbo.collection('ToDos').insertOne({
    text:'Something to do',
    completed:false
},(err, result)=>{
if(err){
return console.log('unbale to insert ToDo',err)
}                                 //undefined is in place of filter function
                                  //result.ops is the value of all inserted objects
console.log(JSON.stringify(result.ops,undefined,2));
});

dbo.collection("Users").insertOne({name:'ermias',
age:50,
location:'US'},(err, res)=>{
if(err){
return console.log('Unable to insert to data base')
}
console.log(JSON.stringify(res.ops,undefined,2));
//object ids are made of machineid, timestamp and random number
//to get the time stamp we use getTimeStamp() method on the object

console.log('TimeStamp:',JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));

});


*/
/*
//dbo.collection('ToDos').find({completed:true}).toArray()
//dbo.collection('ToDos').find().toArray() //returns a cursor
dbo.collection('ToDos').find({_id:new ObjectID("5a6bce400231301708bdd3da")}).toArray().then((docs)=>{ // find by Id, we need to ude ObjectId

    console.log('ToDos');
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
console.log("Unable to fetch data",err);
});
*/

dbo.collection('ToDos').count().then((count)=>{ // find by Id, we need to ude ObjectId
    
        console.log('ToDos');
        console.log('Count',count);
    },(err)=>{
    console.log("Unable to fetch data",err);
});
//db.close();
});
