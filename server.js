const express = require('express');
const path = require('path');
const app = express();

// app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen('4000', () => {
    console.log('App runniung in 4000');
});