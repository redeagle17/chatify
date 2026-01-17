import amqp from "amqplib";
import nodemailer from "nodemailer";
import { ENV } from "./env.js";
import {
  getOtpEmailTemplate,
  getWelcomeEmailTemplate,
} from "../emails/emailTemplates.js";

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

    // Setup OTP email queue
    const otpQueue = "send-otp";
    await channel.assertQueue(otpQueue, { durable: true });

    // Setup welcome email queue
    const welcomeQueue = "send-welcome-email";
    await channel.assertQueue(welcomeQueue, { durable: true });

    console.log(
      "Mail Service consumer started, listening for otp and welcome emails"
    );

    // Consumer for OTP emails
    channel.consume(otpQueue, async (msg) => {
      if (msg) {
        try {
          const { to, subject, otp } = JSON.parse(msg.content.toString());

          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: ENV.USERNAME,
              pass: ENV.PASSWORD,
            },
          });

          const htmlContent = getOtpEmailTemplate(otp);

          await transporter.sendMail({
            from: "chatify",
            to,
            subject: subject,
            html: htmlContent,
          });

          console.log(`✅ OTP mail sent to ${to}`);
          channel.ack(msg);
        } catch (error) {
          console.error("❌ Failed to send OTP email:", error);
          // Don't ack the message so it can be retried
        }
      }
    });

    // Consumer for welcome emails
    channel.consume(welcomeQueue, async (msg) => {
      if (msg) {
        try {
          const { to, name } = JSON.parse(msg.content.toString());

          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: ENV.USERNAME,
              pass: ENV.PASSWORD,
            },
          });

          const htmlContent = getWelcomeEmailTemplate(name);

          await transporter.sendMail({
            from: "chatify",
            to,
            subject: "Welcome to Chatify!",
            html: htmlContent,
          });

          console.log(`✅ Welcome mail sent to ${to}`);
          channel.ack(msg);
        } catch (error) {
          console.error("❌ Failed to send welcome email:", error);
          // Don't ack the message so it can be retried
        }
      }
    });
  } catch (error) {
    console.error("❌ Failed to start RabbitMQ consumer:", error);
  }
};
