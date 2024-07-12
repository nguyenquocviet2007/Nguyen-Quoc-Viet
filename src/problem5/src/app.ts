import express from "express";
import dotenv from "dotenv"
import sampleRoute from "./routes/sampleRoutes";
import routes from "./routes/index"

dotenv.config();

const app = express();
const port = process.env.PORT_DEV || 3000;

//Middleware for JSON parsing
app.use(express.json());


//Database
import "./databases/db"
//Route
routes(app);

app.get("/", (req, res) => {
    res.send("Hello, Express");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})