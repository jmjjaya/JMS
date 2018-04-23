/**
 * Created on: April 23, 2018
 * An object model for Education
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */
import { Double } from "bson";
import { model, Schema } from "mongoose";

const educationSchema: Schema = new Schema({
   degree: String,
   gpa: Double,
   graduatedDate: Date,
   program: String,
   university: String,
});

export const Education = model("education", educationSchema);
