//Add modules required
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import dbconnect from "./config/dbconnect.js";
import routes from "./routes/routes.js";

//Read config file
dotenv.config({path: './config/.config.env'});

//Initialize express
const app = express();

//Use json functions provided by express
app.use(express.json());

//Use helmet to secure HTTP headers
app.use(helmet());

//Use cors to enable cross orgin access
app.use(cors());

//Logging for dev mode
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

//Settign the base url for all routes
app.use("/", routes);

//Connect database
//dbconnect();

//PORT is read from the config file
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`));