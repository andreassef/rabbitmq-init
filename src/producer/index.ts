import { ConnectRabbitmq } from '../rabbitmq';

class UserProducer {

    async execute() {
        try {
            const user = {
                name: 'Assef',
                email: 'andreassef02@gmail.com'
            }
            const connectRabbitmq = new ConnectRabbitmq();
            const channel = await connectRabbitmq.execute();
            channel.sendToQueue('users', Buffer.from(JSON.stringify(user)));
        } catch (error) {
            console.log(error);
        }
    }
}

export { UserProducer };