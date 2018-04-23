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
    applicant_id: Number,
    name: String,
    gender: String,
    dob: String,
    address: String,
    contact: String,
    email: String,
    education: [Education],
    workExperience: [WorkExperience]
});

export const Applicant = model("applicant", applicantSchema);