const{MongoClient,ObjectId}=require('mongodb');

const url = 'mongodb://localhost:27017/'

MongoClient.connect(url,(err,db)=>{
    var dbo = db.db("ToDoApi");
//using call backs instead of Promises
dbo.collection('Users').findOneAndUpdate({"_id": ObjectId("5a6bce09561d111280602ad0")},{$unset:{dislikes:''},$inc:{age:1}},{returnOriginal:false},
(err,res)=>{
    console.log(res);
})



    db.close();
});