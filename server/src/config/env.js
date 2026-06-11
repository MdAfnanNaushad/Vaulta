import dotenv from "dotenv";

dotenv.config();

const env = {
  port: process.env.PORT,

  nodeEnv: process.env.NODE_ENV,

  mongoUri: process.env.MONGO_URI,

  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,

  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,

  jwtAccessExpires: process.env.JWT_ACCESS_EXPIRES,

  jwtRefreshExpires: process.env.JWT_REFRESH_EXPIRES,

  logLevel: process.env.LOG_LEVEL,
};

export default env;