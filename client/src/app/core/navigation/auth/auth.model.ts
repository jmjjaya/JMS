export class AuthModel {

    constructor(
        public fullname: string = "",
        public role: string = "applicant",
        public email: string = "",
        public password: string = ""
    ) {  }
}
