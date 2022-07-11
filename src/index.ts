import express, { Request, Response } from "express";
import dotenv from "dotenv";

// dotenv.config();
const environment = process.env.NODE_ENV;
dotenv.config({ path: `./env/${environment}.env`});

const app = express();

app.get("/", (req: Request, res: Response)=> {
    const envValue = process.env.myValue;
    return res.send(`environment: ${environment}. env value: ${envValue}`);
});

// get port from env file or use 3000 as default
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is running");
});