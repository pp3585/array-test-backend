import user from "./model/user.js";
import userModel from "./model/user.js";
import argon2id from "argon2";
import dbconnect from "./config/dbconnect.js";

const userController = new Object();

//User sign up logic
userController.createUser = async (request, response) => { 
    //Get new user
    const newUser = request.body;

    //Create password hash
    try {
        const hashedPassword = await argon2id.hash(newUser.password, {hashLength: 50, parallelism: 2, timeCost: 4, saltLength: 32});   
        newUser.password = hashedPassword;
    } catch(err){
        console.log("Error hashing password: ",err.message);
        response.send("Error securing password");
    }

    //Call user create function with the new user object
    const createResponse = await dbconnect.createUser(newUser);
    if(createResponse.success){
        console.log("in user create success");
        response.send(`User ${newUser.username} created.`);
    } else {
        console.log(createResponse.value);
        response.send("User creation failed with error:", createResponse.value);
    }
};

//User login
userController.login = async (request, response) => {
    const user = request.body;

    // //Create password hash
    // const hashedPassword = argon2id.hash(user.password, {hashLength: 50, parallelism: 2, timeCost: 4, saltLength: 32});   
    // user.password = hashedPassword;

    //Call user create function with the new user object
    const loginResponse = await dbconnect.loginUser(user);
    if(loginResponse.success){
        console.log("User login success");
        response.send(`User ${user.username} just logged in.`);
    } else {
        console.log(loginResponse.value);
        response.send("User login failed with error: ",loginResponse.value);
    }
};

//User logout
userController.logout = (req, res) => {
    const user = req.body;
    console.log(user.username);
    res.send(`User ${user.username} logged out.`);
};

export default userController;