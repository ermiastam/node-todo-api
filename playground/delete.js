const{MongoClient,ObjectId} = require('mongodb')

var url = 'mongodb://localhost:27017/';
MongoClient.connect(url,(err,db)=>{
var dbo = db.db('ToDoApi');
if(err){
    return console.log('unableto connect');
}

console.log('successfully connected to db');
/*
//deleteMany
dbo.collection('ToDos').deleteMany({"text" : "Whatzup"}).then((res)=>{
console.log(res);
},(err)=>{

});
// deleteOne
dbo.collection('ToDos').deleteOne({"text" : "walk"}).then((res)=>{
    console.log(res);
    },(err)=>{
    
    });
*/
    //findoneAndDelete
    dbo.collection('ToDos').findOneAndDelete({"text" : "Something to do"}).then((res)=>{
        console.log(res);
        },(err)=>{
        
        });
          //we can omit the then statement if we don't want the return value
        dbo.collection('Users').findOneAndDelete({"_id" : ObjectId("5a6bce400231301708bdd3db")}).then((res)=>{
            console.log(res);
            },(err)=>{
            
            });





//db.close();
});