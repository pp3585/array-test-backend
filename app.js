//Add modules required
const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/database");

//Read config file
dotenv.config({path: './config/.config.env'});

//Initialize express
const app = express();

//Connect database
connectDb();

//PORT is read from the config file
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`));