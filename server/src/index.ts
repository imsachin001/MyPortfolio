import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { connectDatabase } from "./db.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 4000);
const clientOrigin = process.env.CLIENT_ORIGIN ?? "http://localhost:5173";

app.use(helmet());
app.use(cors({ origin: clientOrigin }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_request, response) => {
  response.json({ ok: true, service: "myportfolio-server" });
});

app.get("/api/status", (_request, response) => {
  response.json({
    ok: true,
    environment: process.env.NODE_ENV ?? "development",
    clientOrigin,
  });
});

async function start() {
  await connectDatabase(process.env.MONGODB_URI);

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

void start();
