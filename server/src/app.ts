
import bunyanMiddleware from "bunyan-middleware";
import express from "express";
import logger from "./util/logger";
import cors from "cors";

// connect to DB
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/jms");

// modules
import { AuthRouter } from "./auth";
import { ApplicantRouter } from "./applicant";
import { RecruiterController } from "./recruiter/controller";
import {JobPositionController} from "./jobPositions/controller";


// configuration
const app = express();
// const cors= require('cors');

// Supports for JSON parsing
app.use(express.json());
// logger configuration
app.use(bunyanMiddleware({ logger }));

app.use(cors());
// routes
app.use("/api/recruiter", RecruiterController);
app.use("/api/jobPosition", JobPositionController);

// listening
app.listen(3000, () => {
    logger.info("listening on port 3000");
});
