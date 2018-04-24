import logger from "../util/logger";
import { User } from "./model";
import * as jwt from "jsonwebtoken";

import { createHash } from "crypto";
import { AsyncCompleter } from "readline";

interface authPayload {
    fullname?: string,
    email: string,
    password: string
}

const JWT_SECRET = process.env.JWT_SECRET || "This is the JWT secret";

const hashpass = (password: string) => createHash('md5')
    .update(password)
    .update('This is the Salt!')
    .digest('hex');

export const login = async (req: any, res: any, next: any) => {

    const { email, password } : authPayload = req.body;
    const user: any = await User.findOne({ email });

    if (!user) {
        logger.error("User not found");
        return res.status(401).json({ error: "unauthorized" });
    }

    if(hashpass(password) !== user.password) {
        logger.error("Password wont match");
        return res.status(401).json({ error: "unauthorized" });
    }

    req.email = email;

    next();
};

export const generateJWT = (req: any, res: any, next: any) => {

    const { email } = req;

    const token = jwt.sign({ email }, JWT_SECRET);

    req.token = token;

    next();
};

export const register = async (req: any, res: any, next: any) => {

    const { fullname,  email, password } : authPayload = req.body;

    const user: any = await User.findOne({ email });

    if (user) {
        return res.status(400).json({ error: "user already exists" });
    }

    await User.create({ fullname, email, password: hashpass(password) });

    req.email = email;

    next();
};

export const isAuthenticated = (req: any, res: any, next: any) => {

    const { authorization } = req.headers;

    if(!authorization) {
        logger.error("Missing authorization header");
        return res.status(401).json({ error: "unauthorized" });
    }

    const [prefix, token] = authorization.split(" ");

    if(!/^bearer$/i.test(prefix)) {
        logger.error("Malformed Authorization header");
        return res.status(401).json({ error: "unauthorized" });
    }


    jwt.verify(token, JWT_SECRET, (error: any, decoded: any) => {
        if(error) {
            logger.error("JWT problem", error);
            return res.status(401).json({ error: "unauthorized" });
        }
    });

    next();
}
