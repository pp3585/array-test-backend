const userController = new Object();

userController.createUser = (req, res) => {
    
    const user = req.body;
    console.log(user.username);
    res.send(`User ${user.username} created.`);
};

export default userController;

