import { Router } from "express";

import * as Auth from "./controller";
import * as Validate from "./schema";

const router = Router();

router.post("/login",
    Validate.login,
    Auth.login,
    Auth.generateJWT,
    (req: any, res: any) => {
        const { token } = req;
        res.send({ token });
    }
);

router.post("/register",
    Validate.register,
    Auth.register,
    Auth.generateJWT,
    (req: any, res: any) => {
        const { email, token } = req;
        res.send({ token });
    }
);

export const AuthRouter: Router = router;
