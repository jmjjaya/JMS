import { Address } from "../shared/models/address";
import { JobPosition } from "../shared/models/jobPosition";

/**
 * Created on: April 22, 2018
 * Model a recruiter
 * @author Rupendra MAHARJAN
 */
 export class Recruiter{ 
    name: string;
    description: string;
     address: Address=new Address();
     contact: string;
     email:string;
     webLink: string;
     logoURL: string;
     positions:JobPosition[];
 }