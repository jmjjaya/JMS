//import { mongoose } from 'mongoose';
import { Router } from "express";

import logger from "../util/logger";
import { Applicant } from "./model";
import { JobPosition } from "../jobPositions/model";
import { Address } from '../model/address';
import { isAuthenticated } from "../auth/controller";

var mongoose = require('mongoose');

const router = Router();

interface addressInterface {
    line1:string,
    line2: string,
    city: string,
    state: string,
    zipCode: string,
};

interface applicantInfo {
    _id: String,
    name: String,
    address: addressInterface,
    contact: String,
    email: String,
    liURL: String,
}


export const getApplicantInfo = async (req: any, res: any, next: any) => {
    const response: any = {
        "applicant": {
            "name": "Jeewan Jaathilkae",
            "email": "efacjewan@gmail.com",
            "phone": "1234",
            "dob": "11/12/1234",
            "address": "123, Nth 4th, AI",
            "liURL": "www"
        },
        "appliedpost": [
            {
                "jobPositionId": "1",
                "jobTitle": "Software Engineer",
                "description": "java bla bala"
            },
            {
                "jobPositionId": "2",
                "jobTitle": "Software Engineer 2",
                "description": "java bla bala sss"
            }
        ]
    };
    next();
}

export const updateApplicantInfo = async (req: any, res: any, next: any) => {
    const {_id, name, address, contact, email, liURL } : applicantInfo = req.body;

    const updateApplicant = await Applicant.findOneAndUpdate({ _id },{ name, email, contact, address },{upsert:true, new: true});
   
    res.send(updateApplicant);

}

export const ApplicantController: Router = router;



