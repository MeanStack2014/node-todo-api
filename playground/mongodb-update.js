const {MongoClient, ObjectID} = require('mongodb');
//const Server = require('mongodb').Server;

//var mongoclient = MongoClient.connect(new Server('localhost', 27017), {native_parser: true});

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log("Unable to Connect to MongoDB Server");
    }
    console.log("Connected to MongoDB");
       
   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID("5c064cdf5256dc18ecdb987a")
   },{
       $set: {
           name: 'Soumya'
       },
       $inc:{
           age: 1
       }
   },{
       returnOriginal: false
   }).then((result)=>{
       console.log(result);
   })
   db.close();
});