/**
 * Created on: April 23, 2018
 * An object model for Join Table to Establish Relation between Position, Recruiter and Applicant
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */
import { model, Schema } from "mongoose";
const joinTableSchema: Schema = new Schema({
    position_id: Number,
    recruiter_id: Number,
    applicant_id: Number
});

export const JoinTable = model("join_table", joinTableSchema);