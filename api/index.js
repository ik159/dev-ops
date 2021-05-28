const express = require('express');
const app = express()
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')

app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGO_URI ,
    
    { useNewUrlParser:true , useUnifiedTopology: true , useCreateIndex:true
    }).then(() => {
        console.log("db  conncted")
    }).catch((err) => {console.log("db not connected" + err)})

const postRoute = require('./routes/postRoute')
app.use('/api' , postRoute);

app.listen(6005 , () => { console.log("server up");})