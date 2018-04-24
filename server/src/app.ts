
import bunyanMiddleware from "bunyan-middleware";
import express from "express";
import logger from "./util/logger";

const myURL = "mongodb://root:rupenman@ds157599.mlab.com:57599/final_exam_database";
// connect to DB
import mongoose from "mongoose";
// mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/jms");
mongoose.connect(process.env.MONGO_URL || myURL);

// modules
import { AuthController } from "./auth/controller";

// configuration
const app = express();

// Supports for JSON parsing
app.use(express.json());

// logger configuration
app.use(bunyanMiddleware({ logger }));

// routes
app.use("/api/auth", AuthController);

// listening
app.listen(3000, () => {
    logger.info("listening on port 3000");
});
