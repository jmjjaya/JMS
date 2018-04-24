
import bunyanMiddleware from "bunyan-middleware";
import express from "express";
import logger from "./util/logger";

const myURL = "mongodb://root:rupenman@ds157599.mlab.com:57599/final_exam_database";
// connect to DB
import mongoose from "mongoose";
// mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/jms");
mongoose.connect(process.env.MONGO_URL || myURL);

// modules
import { AuthController } from "./auth";

// configuration
const app = express();

// Supports for JSON parsing
app.use(express.json());

// logger configuration
app.use(bunyanMiddleware({ logger }));

// routes
app.use("/api/auth", AuthController);

// Error Handling for validation
app.use((err: any, req: any, res: any, next: any) => {

    // JSON Schema validations for payloads
    if(err.name === "JsonSchemaValidation"){
        res.status(400).send(err.validations);
    };

    logger.error(err);
    res.status(500).send('Something broke!')
})

// listening
app.listen(3000, () => {
    logger.info("listening on port 3000");
});
