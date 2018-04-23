/**
 * Created on: April 23, 2018
 * An object model for Recruiter
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */
import { model, Schema } from "mongoose";
import {Address} from './address';
const recruiterSchema: Schema = new Schema({
    recruiter_id: Number,
    name: String,
    address: Address,
    contact: String,
    email: String,
    webLink: String,
    logoURL: String
});

export const Recruiter = model("recruiter", recruiterSchema);