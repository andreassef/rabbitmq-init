import { ConnectRabbitmq } from '../rabbitmq';

class Consumer {

    async execute() {
        const connectRabbit = new ConnectRabbitmq();
        const channel = await connectRabbit.execute();
        
        channel.consume('users', (data) => {
            const user = data?.content.toString();

            console.log(JSON.parse(user));
            channel.ack(data);
        });

    }
}

export { Consumer };