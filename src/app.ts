import express, { type Express } from "express";
import { healthCheckRouter } from "./healthCheck/healthCheckRouter.ts";

const port = process.env.PORT || 8080;
const app: Express = express();

app.use(express.json());

app.use("/health-check", healthCheckRouter);

app.listen(port, () => {
  console.info(`Running on port ${port}`);
});

console.log("Hello, Andromeda!");
