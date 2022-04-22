import mongoose from "mongoose";

mongoose.Promise = global.Promise;
const connectToMongodb = async function() {
    try{
        const conn = await mongoose.createConnection(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

export default connectToMongodb;