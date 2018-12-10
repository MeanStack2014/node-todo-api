var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {users} = require("./models/users");
var {Todo} = require("./models/todos");


var app = express();
app.use(bodyParser.json());
app.post('/todos',(req, res)=>{
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.send(e);
    })
});
app.listen(3000, ()=>{
    console.log("Started port on 3000");
});
/*
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
var Users = mongoose.model('Users',{
    name:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    address: {
        type: String,
        default: 'kolkata'
    },
    addedAt:{
        type: Number,
        default: null
    }
});
var newUser = new Users({
    name: '  Raja Basu ',
    
});
newUser.save().then((doc)=>{
    console.log("Save Data", JSON.stringify(doc, undefined, 2));
},(e)=>{
    console.log('Unable to insert data', e);
});
/*


var newTodo = new Todo({
    text: 'Cook Dinner'
});

newTodo.save().then((doc)=>{
    console.log('Save data', doc);
},(e)=>{
    console.log('Unable to insert Data', e);
});
*/