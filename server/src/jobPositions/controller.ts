import { Router } from "express";

import logger from "../util/logger";
import { Address } from "../model/address";
import { JobPosition } from "./model";

const router = Router();

router.get("/", async (req, res) => {
    logger.info({ log: "this" });
    const jobPos = await JobPosition.find();
    res.send(jobPos);
});

router.post("/create", async (req, res) => {
    console.log("MY REQUEST BODY=" + JSON.stringify(req.body));
    logger.info("creating Recruiter");
    let newJob = req.body;
    const aJob = new JobPosition({
        title: newJob.title,
        description: newJob.description,
        tags: newJob.tags,
        status: newJob.status,
        postDate: newJob.postDate
    });
    await aJob.save();
    res.send("ok");
});

router.get('/search', async (req, res) => {
    logger.info({ log: "this" });
    for (let term in req.query) {
        req.query[term]  = {$regex: req.query[term], $options: 'i'};
    }
    console.log(req.query);
    const jobPos = await JobPosition.find(req.query);
        
    res.send(jobPos);
})

export const JobPositionController: Router = router;
