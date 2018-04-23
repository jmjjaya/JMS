/**
 * Created on: April 23, 2018
 * An object model for Job Position
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */

import { model, Schema } from "mongoose";
import { Address } from "./address";

const jobPositionSchema: Schema = new Schema({
    category: String,
    closingDate: Date,
    description: String,
    jobPosition_id: Number,
    joiningDate: Date,
    level: String,
    location: Address,
    min_qualification: String,
    noOfVacancy: Number,
    responsibilities: String,
    title: String,
    type: String,   // Full Time, Part Time or Contract
});

export const JobPosition = model("job_position", jobPositionSchema);
