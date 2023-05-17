const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use('/', (req,res) => {
    res.send("hello from server")
});

app.listen(PORT, (req,res) => {
    console.log(`Server running on Port ${PORT}`)
})