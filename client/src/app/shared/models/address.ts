export class Address{
    line1:string;
    line2: string;
    city: string;
    state: string;
    zipCode: string;

    constructor(line1, line2, city, state, zipCode){
        this.line1 = line1;
        this.line2 =line2;
        this.city = city;
        this.state = state;
        this.zipCode= zipCode;

    }
}