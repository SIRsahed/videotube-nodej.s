import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";


dotenv.config({
    path: "./.env"
})
const PORT = process.env.PORT || 3000;


connectDB()
.then(() => {
    // Start the server
    app.listen(PORT, (req, res) => {
        console.log(`Server is running on port ${PORT}`)
    })
 
})
.catch((err) => {
    console.console.log(`Error connecting to database ${err}`);
});