import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema({
    email: String,
    fullName: String,
    password: String,
});

export const User = model("user", userSchema);
