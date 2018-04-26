/**
 * Created on: April 23, 2018
 * An object model for Recruiter
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Jeewan Jayathika
 */
import { model, Schema } from 'mongoose';
import { Address } from '../model/address';
import { JobPosition } from '../jobPositions/model';

const applicantSchema: Schema = new Schema({
    applicant_id: String,
    name: String,
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        zipCode: String
    },
    contact: String,
    email: String,
    liURL: String,
    positions: [String]
});

export const Applicant = model("applicant", applicantSchema);
