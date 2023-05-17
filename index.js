const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute')
dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", authRouter);

app.listen(PORT, (req,res) => {
    console.log(`Server running on Port ${PORT}`)
})