import { Router } from "express";

import logger from "../util/logger";
import { Recruiter } from "./model";
import { JobPosition } from "../jobPositions/model";
import { Address } from "../model/address";

var mongoose = require('mongoose');

const router = Router();

router.get("/info", async (req, res) => {
    logger.info({ log: "this" });
    console.log(req.url);
    const recruiter = await Recruiter.findOne({name:"Rupendra"});
    res.send(recruiter);
});

router.get("/:id", async (req, res) => {
    logger.info({ log: "this" });
    let id = req.params.id;
    
    const recruiter = await Recruiter.findOne({name:id});
    res.send(recruiter);
});

router.post('/create', async (req, res, next) => {
    logger.info("Recruiter Created");
    let body = req.body;
    console.log(body.name + body.address + body.contact + body.contact + body.email);
    const newEmployer = new Recruiter({
        name:body.name,
        address: body.address,
        contact: body.contact,
        email:body.email,
        webLink:body.webLink,
        logoURL:""
    });

    await newEmployer.save();
    res.send({});
});

router.put('/update', async (req, res, next) => {
    
    let body = req.body;
    console.log("My URL=" + JSON.stringify(req.body));

    const query ={
        recruiter_id:body.recruiter_id
    };

    const newEmployer = {
        $set: {
            name: body.name,
            address: body.address,
            contact: body.contact,
            email: body.email,
            webLink: body.webLink,
            positions:{$push: body.positions},
            logoURL: body.logoURL
        }};
    console.log();
    logger.info("Recruiter Updated");
    await Recruiter.findOneAndUpdate(query,newEmployer,{upsert:true});
    res.send({});

});

export const RecruiterController: Router = router;
