import { Applicant } from './applicant/model';

import bunyanMiddleware from "bunyan-middleware";
import express from "express";
import logger from "./util/logger";
import cors from "cors";

// connect to DB
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/jms");
// mongoose.connect(process.env.MONGO_URL || myURL);


// modules
import { AuthRouter } from "./auth";
import { ApplicantController } from "./applicant/controller";
import { RecruiterController } from "./recruiter/controller";
import { JobPositionController } from "./jobPositions/controller";


// configuration
const app = express();
// const cors= require('cors');

// Supports for JSON parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// logger configuration
app.use(bunyanMiddleware({ logger }));

// cors
app.use(cors());

app.use((req,res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    return next();
});

// routes
app.use("/api/auth", AuthRouter);
app.use("/api/applicant", ApplicantController);
app.use("/api/recruiter", RecruiterController);
app.use("/api/jobPosition", JobPositionController);

// listening
app.listen(3000, '0.0.0.0', () => {
    logger.info("listening on port 3000");
});
