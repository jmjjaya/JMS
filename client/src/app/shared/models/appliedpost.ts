import { Applicant } from './applicant';
import { JobPosition } from './jobPosition';
export class AppliedPost{
    applicant: Applicant = new Applicant;
    appliedpost : JobPosition[] = [];
}