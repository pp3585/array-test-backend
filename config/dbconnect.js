import argon2id from "argon2";
import {MongoClient} from "mongodb";

const dbconnect = new Object();

dbconnect.createUser = async function(newUser, client){
    let response = {};
    try {
        client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        console.log(`MongoDB connected`);

        const result = await client.db("array-test-backend").collection("users").insertOne(newUser);
        console.log(`New user created with the following id: ${result.insertedId}`);
        response.success = true,
        response.value = result.insertedId
    } catch (err) {
        console.log(`Error creating user: ${newUser.username}`)
        response.success = false,
        response.value = err.message
    } finally {
        client.close();
        console.log("DB connection closed after createUser");
    }
    return response;
}

dbconnect.loginUser = async function(user, client){
    let response = {};
    try {
        client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        console.log(`MongoDB connected`);

        //Look for matching user based on username
        const result = await client.db("array-test-backend").collection("users").findOne({username: user.username});
        console.log(`User found with id: ${result.insertedId}`);

        //Compare password to check for identity
        console.log(user.password);
        console.log(result);
        if(await argon2id.verify(result.password,user.password)){
            //Password match
            response.success = true,
            response.value = result.insertedId
        } else {
            //Not a match
            response.success = false,
            response.value = "Invalid password.";
        }
    } catch (err) {
        console.log(`Error logging in user: ${user.username}`)
        response.success = false,
        response.value = err.message
    } finally {
        client.close();
        console.log("DB connection closed after user login");
    }
    return response;
}

//to do
dbconnect.logoutUser = async function(user, client){
    let response = {};
    try {
        client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        console.log(`MongoDB connected`);

        //Look for matching user based on username
        const result = await client.db("array-test-backend").collection("users").findOne({username: user.username});
        console.log(`User found with id: ${result.insertedId}`);

        //Compare password to check for identity
        console.log(user.password);
        console.log(result);
        if(await argon2id.verify(result.password,user.password)){
            //Password match
            response.success = true,
            response.value = result.insertedId
        } else {
            //Not a match
            response.success = false,
            response.value = "Invalid password.";
        }
    } catch (err) {
        console.log(`Error logging in user: ${user.username}`)
        response.success = false,
        response.value = err.message
    } finally {
        client.close();
        console.log("DB connection closed after user login");
    }
    return response;
}

export default dbconnect;