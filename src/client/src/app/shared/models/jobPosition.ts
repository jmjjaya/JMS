import { Address } from "./address";

export class JobPosition{
    jobPositionId: string;
    jobTitle: string;
    jobCategory: string;
    level: string;
    noOfVacancy: Number;
    type: string;   // Full Time, Part Time, Contract
    location: Address;
    closingDate: Date;
    joiningDate: Date;
    minQualification: string;
    description: string;
    responsibilities: string;
}