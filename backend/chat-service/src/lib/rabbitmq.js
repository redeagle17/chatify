import amqp from "amqplib";
import { ENV } from "./env.js";

let channel;

export const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect({
      protocol: "amqp",
      hostname: ENV.RABBITMQ_HOST,
      port: ENV.RABBITMQ_PORT,
      username: ENV.RABBITMQ_USER,
      password: ENV.RABBITMQ_PASSWORD,
    });

    channel = await connection.createChannel();

    console.log("Connected to rabbitmq");
  } catch (error) {
    console.log("Failed to connect to rabbitmq", error);
  }
};

export const publishToQueue = async (queueName, message) => {
  if (!channel) {
    console.log("Rabbitmq channel is not initalized");
    return;
  }

  await channel.assertQueue(queueName, { durable: true });

  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
    persistent: true,
  });
};
