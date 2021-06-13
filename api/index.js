const express = require('express');
const app = express()
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')


async function connectMongo() {
	try {
		await mongoose.connect(
			process.env.MONGO_URI,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
			(err) => {
				if (err) console.log(err);
				else console.log('Connected to MongoDB');
			}
		);
	} catch (e) {
		console.log(e);
	}
}
connectMongo();
/*mongoose.connect(process.env.MONGO_URI ,
    
    { useNewUrlParser:true , useUnifiedTopology: true , useCreateIndex:true
    }).then(() => {
        console.log("db  conncted")
    }).catch((err) => {console.log("db not connected" + err)})*/

    app.use(cors())
    app.use(express.json());

const postRoute = require('./routes/postRoute')
app.use('/api' , postRoute);

app.listen(7000 , () => { console.log("server up " + "mongoose " + mongoose.connection.readyState);})

app.get('/', function(req, res) {
    let data = {
        message: 'Hello World!'
    };
    res.status(200).send(data);
});
