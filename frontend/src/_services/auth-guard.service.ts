import {Injectable} from "@angular/core";
import {Router, CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import {Store} from "@ngxs/store";
import {AuthState} from "../_store/auth/auth.state";
import {AuthModel} from "../_store/auth/auth.model";

@Injectable({
    providedIn: "root"
})
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private store: Store) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const authData: AuthModel = JSON.parse(localStorage.getItem('auth'));
        if (!authData.authenticated) {
            this.router.navigate(["home"]);
            return false;
        }
        return true;
    }
}
