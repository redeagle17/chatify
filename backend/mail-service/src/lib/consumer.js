import amqp from "amqplib";
import nodemailer from "nodemailer";
import { ENV } from "./env.js";

export const startConsumer = async () => {
  try {
    const connection = await amqp.connect({
      protocol: "amqp",
      hostname: ENV.RABBITMQ_HOST,
      port: ENV.RABBITMQ_PORT,
      username: ENV.RABBITMQ_USER,
      password: ENV.RABBITMQ_PASSWORD,
    });

    const channel = await connection.createChannel();

    const queueName = "send-otp";

    await channel.assertQueue(queueName, { durable: true });

    console.log("Mail Service consumer started, listening for otp emails");

    channel.consume(queueName, async (msg) => {
      if (msg) {
        
        try {
          const { to, subject, body } = JSON.parse(msg.content.toString());
          
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: ENV.USERNAME,
              pass: ENV.PASSWORD,
            },
          });

          await transporter.sendMail({
            from: "chatify",
            to,
            subject,
            text: body,
          });

          console.log(`OTP mail sent to ${to}`);
          channel.ack(msg);
        } catch (error) {
          console.log("Failed to send otp", error);
        }
      }
    });
  } catch (error) {
    console.log("Failed to start rabbitmq consumer", error);
  }
};
