import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public router: Router) {}

    canActivate(): boolean {

        const auth: AuthService = new AuthService();

        console.log("can activate?", auth.isAuthenticated());

        if (!auth.isAuthenticated()) {

            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}