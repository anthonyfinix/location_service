import { ConsumeMessage } from "amqplib";
import amqplibInstance, { userActions } from "../util/amqpConnect"

export default (msg: ConsumeMessage | null) => {
    if (msg) {
        let data = JSON.parse(msg.content.toString())
        if (data.type == userActions.USER_CREATION) {
            let { city, state, country } = data.payload;
            console.log(city, state, country);
        }
        amqplibInstance.channel.ack(msg);
    }
}