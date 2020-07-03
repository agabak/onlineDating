(() => {
    'use strict'
const express = require('express');
const exhdbrs = require('express-handlebars');
const port =  3000;

var app = express();

// set up view engine with handlebars
app.engine('handlebars', exhdbrs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res)=> {
    res.render('home');
});

app.get('/about',(req,res)=> {
    res.render('about')
})

app.get('/contact',(req,res)=> {
    res.render('contact');
});

app.listen(port, () => {console.log(`Express running with handlebars at port#: ${port}`)})

})();
