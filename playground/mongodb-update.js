const {MongoClient, ObjectID} = require('mongodb');
//const Server = require('mongodb').Server;

//var mongoclient = MongoClient.connect(new Server('localhost', 27017), {native_parser: true});

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log("Unable to Connect to MongoDB Server");
    }
    console.log("Connected to MongoDB");
       
   db.collection('Todos').findOneAndUpdate({
       _id: new ObjectID("5c064672b594b219f4b988c0")
   },{
       $set: {
           completed: false
       }
   },{
       returnOriginal: false
   }).then((result)=>{
       console.log(result);
   })
   db.close();
});