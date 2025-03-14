const express = require('express');
const app = express();
const productRoute = require('./routes/productRoute.js');
const orderRoute = require('./routes/orderRoute.js');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path:path.join(__dirname,'config','config.env')});
const database = require('./config/database.js');
const cors = require('cors');

database();
app.use(express.json());
app.use(cors());

app.use('/api/v1/',productRoute);
app.use('/api/v1/',orderRoute);

app.listen(process.env.PORT,()=>{
    console.log(`server listening port is ${process.env.PORT} and ${process.env.NODE_ENV}`)
});