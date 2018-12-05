const {MongoClient, ObjectID} = require('mongodb');
//const Server = require('mongodb').Server;

//var mongoclient = MongoClient.connect(new Server('localhost', 27017), {native_parser: true});

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log("Unable to Connect to MongoDB Server");
    }
    console.log("Connected to MongoDB");
       
    // db.collection('Todos').find({
    //     _id: new ObjectID("5c0654ca2126eb5628cfa928")
    // }).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log("Unable to fetch from Todos", err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log("No of Document: ",count);
    },(err)=>{
        console.log('Unable to fetch record', err);
    })

    db.collection('Users').find({name: 'Soumya'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log("Unable to fetch the record", err);
    })
   db.close();
});