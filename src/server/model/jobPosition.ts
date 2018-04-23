/**
 * Created on: April 23, 2018
 * An object model for Job Position
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */
import { model, Schema } from "mongoose";
import {Address} from './address';
const jobPositionSchema: Schema = new Schema({
    jobPosition_id: Number,
    title: String,
    category: String,
    level: String,
    noOfVacancy: Number,
    type: String,   //Full Time, Part Time or Contract
    location: Address,
    closingDate: Date,
    joiningDate: Date,
    min_qualification: String,
    description: String,
    responsibilities: String
});

export const JobPosition = model("job_position", jobPositionSchema);