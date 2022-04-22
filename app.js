//Add modules required
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import dbconnect from "./config/database.js";
import routes from "./routes/routes.js";

//Read config file
dotenv.config({path: './config/.config.env'});

//Initialize express
const app = express();
app.use(express.json());

//Logging for dev mode
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

//Settign the base url for all routes
app.use("/user", routes);

//Set home page route
app.get("/", (req, res) => {
    //res.send("Hi everyone!");
});

//Connect database
dbconnect();

//PORT is read from the config file
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`));