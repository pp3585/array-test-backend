import express from "express";
import { append } from "express/lib/response";

//Get the router provided by express
const routes = express.Router();

//Define routes
//Route when home page is accessed
routes.get("/", (req, res) => {
    res.send("Hi everyone!");
});

routes.post("/user/create", (req, res) => {
    res.send("User create API");
});

export default routes;
