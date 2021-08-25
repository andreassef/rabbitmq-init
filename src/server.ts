import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) => {

    return response.status(200).json({message: "Hello World!"});
});

app.listen(3333, () => {
    console.log("Server run on port 3333!");
});
