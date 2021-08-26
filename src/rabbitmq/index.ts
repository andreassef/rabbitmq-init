import { connect, Connection } from "amqplib";

const QUEUE_NAME = 'users';
const EXCHANGE_TYPE = 'direct';
const EXCHANGE_NAME = 'main';
const KEY = 'myKey';
const number = '5';

class ConnectRabbitmq {
    async execute() {
        let connection = await connect('amqp://root:q1w2e3@localhost');
        const channel = await connection.createChannel();
        return channel;
    }
}

class RabbitInit {
    async execute() {
        try {
            const connectRabbitmq = new ConnectRabbitmq();
            const conn = await connectRabbitmq.execute();
            await conn.assertExchange(EXCHANGE_NAME, EXCHANGE_TYPE);
            await conn.assertQueue(QUEUE_NAME);
            conn.bindQueue(QUEUE_NAME, EXCHANGE_NAME, KEY);
        } catch (error) {
            console.log(error);
        }
    }

}

export { RabbitInit, ConnectRabbitmq };