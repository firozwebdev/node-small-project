const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine','hbs');


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('test');
});





app.listen(3000, () => {
    console.log('Server is running');
});