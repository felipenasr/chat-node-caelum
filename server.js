const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http)

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render("home.ejs");
})

app.listen(3001, 'localhost', ()=>{
    console.log('Subiu');
});
