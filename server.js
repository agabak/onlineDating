(() => {
    'use strict'
const express = require('express');
const exhdbrs = require('express-handlebars');
const port = process.env.PORT || 3000;

var app = express();

// set up view engine with handlebars
app.engine('handlebars', exhdbrs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res)=> {
    res.render('home',{title:"Home"});
});

app.get('/about',(req,res)=> {
    res.render('about', {title:"About"})
})

app.get('/contact',(req,res)=> {
    res.render('contact', {title:"Contact"});
});

app.listen(port, () => {console.log(`Express running with handlebars at port#: ${port}`)})

})();
