import express from "express";
import userController from "../userController";

//Get the router provided by express
const routes = express.Router();

//Define routes
//Route when home page is accessed
routes.get("/", (req, res) => {
    res.send("Hi everyone!");
});

//Route to sign up a new user
routes.post("/createUser", userController.createUser);

export default routes;
