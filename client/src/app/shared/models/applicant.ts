import { Address } from './address';
import { Education } from "./education";
import { WorkExperience } from "./workExperience";

export class Applicant{
    applicant_id: string;
    name:string;
    gender:string;
    dob:Date;
    address: Address = new Address();
    phone: string;
    email: string;
    liURL: string;
}