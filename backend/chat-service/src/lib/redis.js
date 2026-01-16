import createClient from "redis";

import { ENV } from "./env.js";

const redisClient = createClient.createClient({
  url: ENV.REDIS_URL,
});

export default redisClient;