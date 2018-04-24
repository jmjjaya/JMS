/**
 * Created on: April 23, 2018
 * An object model for Address
 * Uses the model schema developed by David Roncancio
 * Designed by Jeewan Mahendra Jayathilake and Rupendra Maharjan
 * @author Rupendra MAHARJAN
 */
import { model, Schema } from "mongoose";

const addressSchema: Schema = new Schema({
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipCode: String,
});


export const Address = model("address", addressSchema);
