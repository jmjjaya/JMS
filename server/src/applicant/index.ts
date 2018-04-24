import { Router } from "express";

import { isAuthenticated } from "../auth/controller";

const router = Router();

router.get("/info",
    isAuthenticated,
    (req: any, res: any) => {
        const response: any = {
            "applicantinfo" : {
                "applicant": {
                    "name" : "Jeewan Jaathilkae",
                    "email":"efacjewan@gmail.com",
                    "phone":"1234",
                    "dob":"11/12/1234",
                    "address":"123, Nth 4th, AI",
                    "liURL":"www"
                },
                "appliedpost" : [
                    {
                        "jobPositionId": "1",
                        "jobTitle" : "Software Engineer",
                        "description" : "java bla bala"
                    },
                    {
                        "jobPositionId": "2",
                        "jobTitle" : "Software Engineer 2",
                        "description" : "java bla bala sss"
                    }
                ]
            }
        };

        res.send(response);
    }
);

export const ApplicantRouter: Router = router;
