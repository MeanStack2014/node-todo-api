const {MongoClient, ObjectID} = require('mongodb');
//const Server = require('mongodb').Server;

//var mongoclient = MongoClient.connect(new Server('localhost', 27017), {native_parser: true});

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log("Unable to Connect to MongoDB Server");
    }
    console.log("Connected to MongoDB");
       
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // })

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    })
   db.close();
});