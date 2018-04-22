import { Router } from "express";

import logger from "../util/logger";
import { User } from "./model";

const router = Router();

router.get("/", async (req, res) => {

    logger.info({ log: "this" });

    const user = await User.findOne({});

    res.send({ hello: "world", user });
});

router.get("/create", async (req, res) => {

    logger.info("creating user");

    const user = new User({
        email: "david@roncancio.me",
        firstName: "David",
    });

    await user.save();

    res.send("ok");
});

export const AuthController: Router = router;
