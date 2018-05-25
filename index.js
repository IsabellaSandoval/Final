const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars');

var app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(5000);

app.get('/',(req,res) =>{
    res.render('index');
});

app.get('/uno',(req,res) =>{
    res.render('uno');
});

app.get('/dos',(req,res) =>{
    res.render('dos');
});