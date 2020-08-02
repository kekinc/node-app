const express = require('express');
const path = require('path');
const app = express();
const ROOTDIR = __dirname;

// app.use(express.static(ROOTDIR));

app.get('/',(req,res)=>{
    res.send('Hello! This is massive change.');
});

app.listen(8000,()=>{
    console.log('Application started & listening on port 8000!');
});

module.exports = app;