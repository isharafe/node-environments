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

export default app;