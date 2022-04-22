import express from "express";

//Get the router provided by express
const routes = express.Router();

//Define routes
//Route when home page is accessed
routes.post("/create", (req, res) => {
    const user = req.body;
    console.log(user.username);
    res.send(`User ${user.username} created.`);
});

export default routes;
