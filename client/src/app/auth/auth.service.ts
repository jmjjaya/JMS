
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

    constructor() {}

    public isAuthenticated(): boolean {

        let jwtHelper: JwtHelperService = new JwtHelperService();
        const token = localStorage.getItem('jwt');

        console.log(jwtHelper.decodeToken(token));

        return !!token;
    }

}