import express from "express";
import sampleRoute from "./routes/sampleRoutes";
import connectDB from "./databases/db";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Middleware for JSON parsing
app.use(express.json());


//Database
connectDB()

//Route
app.use('/api', sampleRoute);
app.use('/api/users', require("./routes/users"));

app.get("/", (req, res) => {
    res.send("Hello, Express");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})