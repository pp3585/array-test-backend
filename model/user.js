import mongoose from "mongoose";
import argon2id from "argon2";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {unique: true, sparse: true},
        set: changeToLowercase
    },
    password: {
        type: String,
        required: true
        //set: createSecureEncryption
    },
    // createdAt: {
    //     type: Date,
    //     required: true,
    //     default: Date.now
    // }
});

function changeToLowercase(username){
    return username.toLowerCase();
}

function createSecureEncryption(password){
    return argon2id.hash(password, {hashLength: 50, parallelism: 2, timeCost: 4, saltLength: 32});
    //let salt, hashedPassword;

    //generate salt
    // crypto.randomBytes(32, function(err, buf){
    //     if(err){
    //         throw err;
    //     }
    //     salt = buf;
        
    // });

    //create the HMAC digest
    //let hashedPassword = crypto.createHmac("sha256", salt).update(password).digest("base64");
    // crypto.pbkdf2(password, salt, 100000, 64, "sha512", function(err, buf){
    //     if(err) throw err;
    //     hashedPassword = buf;
    // });
    

    //return salt + ":" + hashedPassword;
}

export default mongoose.model("User", userSchema);