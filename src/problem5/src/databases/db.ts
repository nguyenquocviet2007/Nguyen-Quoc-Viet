import mongoose, {ConnectOptions} from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/problem5';


const connectDB = async () => {
    try {
        await mongoose
            .connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions)
            .then(res => {
                console.log("Connected to Distribution API Database - Initial Connection")
            });
        console.log('MongoDB connected');
    }
    catch (error) {
        console.error('MongoDB connection error: ', error);
        process.exit(1);
    }
}

export default connectDB;