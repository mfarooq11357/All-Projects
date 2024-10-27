const express = require('express')
const app = express();
const db = require('./DatabaseConnection/index');
require('dotenv').config();
const cors = require('cors'); // Make sure to require 'cors' 
const bodyParser = require('body-parser'); 
// Import the router files
const userRoutes = require('./Routes/UserRoutes');
// const candidateRoutes = require('./routes/candidateRoutes');
const productRoutes = require('./Routes/ProductRoutes');

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // req.body

// Use the routers
app.use('/user', userRoutes);
app.use('/products', productRoutes);
// app.use('/candidate', candidateRoutes);

const PORT =  process.env.PORT
app.listen(PORT, ()=>{
    console.log('Service is Running');
})