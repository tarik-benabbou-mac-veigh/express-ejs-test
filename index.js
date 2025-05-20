const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

app.get('/', (req,res)=>{
    res.render('home');
});

app.get('/about/:title', (req,res)=>{
    const data = {
        title: req.params.title,
    };
    res.render('about', data);
});

app.listen(port, (req,res)=>{
    console.log(`Server running on port:${port}`);
})