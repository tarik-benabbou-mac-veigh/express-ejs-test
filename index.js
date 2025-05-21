const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const ejs = require('ejs');

const articles = [
    {
        title: 'Apprendre le JavaScript',
        category: 'Front-end',
    },
    {
        title: 'Apprendre le PHP',
        category: 'Back-end',
    },
    {
        title: 'Apprendre le SQL',
        category: 'Back-end',
    },
];

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

app.get('/posts', (req,res)=>{
    res.render('posts-form', {posts: articles});
});

app.listen(port, (req,res)=>{
    console.log(`Server running on port:${port}`);
})