/**
 * Created on: April 23, 2018
 * An object model for Work Experience
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */

import { model, Schema } from "mongoose";
import { Address } from "./address";

const workExpSchema: Schema = new Schema({
    end_Date: Date,
    job: String,
    job_location: Address,
    job_title: String,
    nature: String,
    organization_name: String,
    responsibilities: String,
    start_Date: Date,
});

export const WorkExperience = model("work_experience", workExpSchema);
