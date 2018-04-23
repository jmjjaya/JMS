/**
 * Created on: April 23, 2018
 * An object model for Recruiter
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */

import { model, Schema } from "mongoose";
import { Address } from "./address";

const recruiterSchema: Schema = new Schema({
    address: Address,
    contact: String,
    email: String,
    logoURL: String,
    name: String,
    recruiter_id: Number,
    webLink: String,
});

export const Recruiter = model("recruiter", recruiterSchema);
