/**
 * Created on: April 23, 2018
 * An object model for Applicant
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */
import { model, Schema } from "mongoose";
import { Education } from "./education";
import { WorkExperience } from "./workExperience";

const applicantSchema: Schema = new Schema({
    address: String,
    applicant_id: Number,
    contact: String,
    dob: String,
    education: [Education],
    email: String,
    gender: String,
    name: String,
    workExperience: [WorkExperience],
});

export const Applicant = model("applicant", applicantSchema);
