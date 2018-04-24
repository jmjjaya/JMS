/**
 * Created on: April 23, 2018
 * An object model for Recruiter
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */
import { model, Schema } from 'mongoose';
import { Address } from '../model/address';
import { JobPosition } from '../model/jobPosition';

const recruiterSchema: Schema = new Schema({
    recruiter_id: Number,
    name: String,
    address: Address,
    contact: String,
    email: String,
    webLink: String,
    logoURL: String,
    positions: [JobPosition]
});

export const Recruiter = model("recruiter", recruiterSchema);
