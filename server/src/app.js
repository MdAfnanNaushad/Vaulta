import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import errorMiddleware from "./middleware/error.middleware.js";
import v1Routes from "./api/v1/routes/index.js";

import {
  swaggerSpec,
  swaggerUi,
} from "./docs/swagger.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://vaulta-frontend-5xoo.onrender.com",
    ],
    credentials: true,
  })
);

app.use(helmet());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.use("/api/v1", v1Routes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use(errorMiddleware);

export default app;