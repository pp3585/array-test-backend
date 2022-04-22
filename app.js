//Add modules required
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import dbconnect from "./config/database.js";

//Read config file
dotenv.config({path: './config/.config.env'});

//Initialize express
const app = express();

//Logging for dev mode
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

//Connect database
dbconnect();

//PORT is read from the config file
const PORT = process.env.PORT || 5000

//define the home page route
app.get("/", (req, res) => {
    console.log("Home page");
    res.send("Hi there!");
})

app.listen(PORT, console.log(`Server running on port ${PORT}`));