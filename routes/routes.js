import express from "express";
import userController from "../userController.js";

//Get the router provided by express
const routes = express.Router();

//Default route when base url is accessed
routes.get("/", (req, res) => {
    console.log("Homepage reached!");
});

//Route to sign up a new user
routes.post("/signup", userController.createUser);

//Route when a user logs in
routes.post("/login", userController.login);

//Route when a user logs out
routes.post("/logout", userController.logout);

export default routes;
