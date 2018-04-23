/**
 * Created on: April 23, 2018
 * An object model for Work Experience
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */
import { model, Schema } from "mongoose";
import {Address} from './address';

const workExpSchema: Schema = new Schema({
    organization_name: String,
    nature: String,
    job_location: Address,
    job_title: String,
    job: String,
    start_Date: Date,
    end_Date:Date,
    responsibilities: String
});

export const WorkExperience = model("work_experience", workExpSchema);