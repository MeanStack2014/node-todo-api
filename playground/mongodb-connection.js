const MongoClient = require('mongodb').MongoClient;
//const Server = require('mongodb').Server;

//var mongoclient = MongoClient.connect(new Server('localhost', 27017), {native_parser: true});

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log("Unable to Connect to MongoDB Server");
    }
    console.log("Connected to MongoDB");
       
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Soumya',
        age: 37,
        location: 'kolkata'
    },(err, result)=>{
        if(err){
            return console.log('Unable to insert in Users');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});