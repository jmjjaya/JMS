/**
 * Created on: April 23, 2018
 * An object model for Education
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */
import { model, Schema } from "mongoose";
import { Double } from "bson";

const educationSchema: Schema = new Schema({
   degree: String,
   program: String,
   university: String,
   gpa: Double,
   graduatedDate: Date
});

export const Education = model("education", educationSchema);