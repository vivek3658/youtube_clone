const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');


app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
}); 
