import express from "express";
import dotenv from "dotenv"
import routes from "./routes/index"
import { setupWebSocket } from "./services/webSocketService";

dotenv.config();

const app = express();
const port = process.env.PORT_DEV || 3000;

//Middleware for JSON parsing
app.use(express.json());


//Database
import "./databases/db"
//Route
routes(app);
// app.use('/api', sampleRoute);
// app.use('/api/users', require("./routes/users"));

app.get("/", (req, res) => {
    res.send("Hello, Express");
})

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
setupWebSocket(server);
