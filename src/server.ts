import express, { Request, Response } from "express";
import { RabbitInit } from "./rabbitmq";
import { UserProducer } from "./producer";
import { Consumer } from "./consumer";

const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) => {

    return response.status(200).json({message: "Hello World!"});
});

(
    async function() {
        const rabbit = new RabbitInit();
        await rabbit.execute();

        const userProducer = new UserProducer();
        await userProducer.execute();

        const consume = new Consumer();
        await consume.execute();
    }
)();

app.listen(3333, () => {
    console.log("Server run on port 3333!");
});
