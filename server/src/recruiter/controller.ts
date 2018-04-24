import { Router } from "express";

import logger from "../util/logger";
import { Recruiter } from "./model";
import { JobPosition } from "../jobPositions/model";
import { Address } from "../model/address";

var mongoose = require('mongoose');

const router = Router();

router.get("/", async (req, res) => {
    console.log("I am here")
    logger.info({ log: "this" });
    const recruiter = await Recruiter.find();
    // const recruiter = await Recruiter.findOne({});

    res.send({ hello: "world", recruiter });
});

router.get("/:name", async (req, res) =>{
    logger.info("fetching recruiter by name");
    const aRecruiter = await Recruiter.findOne({name:req.params.name});
    res.send(aRecruiter);
});

router.get("/create", async (req, res) => {

    logger.info("creating Recruiter");

    const recruiter = new Recruiter({
        name: "Jeewan",
        address: {
            _id: new mongoose.Types.ObjectId(),
            city:"Fairfield",
            line1:"1000 N. 4th street",
            line2:"141",
            state:"IA",
            zipCode:"52557"
        },
        contact: "myContact",
        email: "www.com",
        webLink: "www.comee",
        logoURL: "http",
        // positions: [JobPosition]
    });
    await recruiter.save();
    res.send("ok");
});


export const RecruiterController: Router = router;
