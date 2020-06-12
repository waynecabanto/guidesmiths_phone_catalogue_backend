const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv/config');

//import routes
const phonesRoute = require('./routes/phones');



//middleware
app.use(cors()); 
app.use(bodyParser.json());


//routes
app.use('/phones', phonesRoute);

/*app.get('/', (req,res) => {
    res.send('We are on home.');
});*/


//connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => console.log('connected to db!'));

//start server
app.listen(3101);