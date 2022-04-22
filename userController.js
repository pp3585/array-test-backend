import user from "./model/user.js";
import userModel from "./model/user.js";
import dbconnect from "./config/database.js";

const userController = new Object();

//User sign up logic
userController.createUser = (request, response, next) => {
    // return new Promise(function(resolve, reject){
    //     userModel.create({
    //         username: "pooja",
    //         password: "pepper"
    //     }, function(err, createdUser){
    //         if(err){
    //             reject(err);
    //             return;
    //         }
    //         console.log(createdUser);
    //         resolve(createdUser);
    //     });
    // });
    // let user = new userModel(request.body).save().then(function(err, results){
    //     if (err) { return next(err) }
    //     response.json(201, results);
    // });
    dbconnect();
    userModel.create(request.body).then((value) => {
        console.log("success", value);
    }, (reason) => {
        console.log(reason);
    })
    
    //console.log(user);
    
    // try{
    //     userModel.create({
    //         username: "pooja",
    //         password: "pepper"
    //     }, (err, result) => {
    //         if(err) {
    //           console.log(err.message);
    //         } else {
    //             console.log("results", result);
    //         }

    //     });
    //     // userModel.create(req.body).then((res) => {
    //     //     console.log("resolved");
    //     // }, (reject) => {
    //     //     console.log("rejected");
    //     // })
    // } catch(err) {
    //     console.log(err);
    // }
    
    // console.log("in user create request");
    //res.send(`User ${user.username} created.`);
};

//User login
userController.login = (req, res) => {
    const user = req.body;
    console.log(user.username);
    res.send(`User ${user.username} just logged in.`);
};

//User logout
userController.logout = (req, res) => {
    const user = req.body;
    console.log(user.username);
    res.send(`User ${user.username} logged out.`);
};

export default userController;