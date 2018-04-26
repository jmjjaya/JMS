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
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        zipCode: String
    },
    contact: String,
    liURL: String,
    applications: [{ type: Schema.Types.ObjectId, ref: 'job_position' }]
});

export const Applicant = model("applicant", applicantSchema);
