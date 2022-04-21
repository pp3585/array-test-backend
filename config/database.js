const mongoose = require("mongoose");

const connectToMongoDb = async function() {
    
    try{
        const conn = await mongoose.createConnection(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectToMongoDb;