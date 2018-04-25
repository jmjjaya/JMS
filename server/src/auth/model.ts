import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema({
    role: String,
    email: String,
    fullname: String,
    password: String,
});

export const User = model("user", userSchema);
