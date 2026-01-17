import express from "express";
import { startConsumer } from "./lib/consumer.js";
import { ENV } from "./lib/env.js";

startConsumer();

const app = express();

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
