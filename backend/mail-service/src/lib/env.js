import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT,
  RABBITMQ_HOST: process.env.RABBITMQ_HOST,
  RABBITMQ_PORT: process.env.RABBITMQ_PORT,
  RABBITMQ_USER: process.env.RABBITMQ_USER,
  RABBITMQ_PASSWORD: process.env.RABBITMQ_PASSWORD,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD
};