var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var User     = require('./models/user');
var url      = 'mongodb://rizki2:1234@localhost/toko'; 

mongoose.connect(url, ()=>{
        console.log('Terhubung ke MongoDB');
    });

app.get('/get', function(req, res){
    User.find((err, users)=>{
        res.send(users);
    })
});

app.get('/get/:nama', function(req, res){
    User.find({nama: req.params.nama}, 
        (err, users)=>{
        res.send(users);
    })
});

app.post('/post', function(req, res){
    new User ({
        nama : 'Luna',
        usia : 22
    }).save().then((newUser)=>{
        console.log('Data Masuk:'+newUser);
        res.send('Data Masuk:<br>'+newUser);
    })
});

app.listen(2100, ()=>{
    console.log('Running on port 2100')
});
