import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoadingController} from "@ionic/angular";
import {LoadingService} from "../../_services/loading.service";
import {Actions, ofActionErrored, ofActionSuccessful, Store} from "@ngxs/store";
import {Login} from "../../_store/auth/auth.actions";
import {takeUntil, tap, withLatestFrom} from "rxjs/operators";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {AuthState} from "../../_store/auth/auth.state";
import {AuthService} from "../../_store/auth/auth.service";
import {AuthModel, UserModel} from "../../_store/auth/auth.model";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    email;
    emailErrors;
    password;
    passwordErrors;
    private unsubscribe$: Subject<void> = new Subject();

    constructor(public store: Store, private authService: AuthService, public loadingService: LoadingService, private router: Router, private actions$: Actions,) {
    }

    ngOnInit() {
        const authData: AuthModel = JSON.parse(localStorage.getItem('auth'));
        if (authData && authData.authenticated) {
            this.router.navigate(['dashboard']);
        }
    }

    validateForm() {
        let validated = true;
        const emailPattern = new RegExp(
            '[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}',
        );
        if (!this.email) {
            this.emailErrors = 'Email is required';
            validated = false;
        } else if (this.email && !emailPattern.test(this.email)) {
            this.emailErrors = 'Email is not valid';
            validated = false;
        } else {
            this.emailErrors = '';
        }
        if (!this.password) {
            this.passwordErrors = 'Password is required';
            validated = false;
        } else if (this.password && this.password.length < 6) {
            this.passwordErrors = 'Password should be at least of 6 characters';
            validated = false;
        } else {
            this.passwordErrors = '';
        }
        return validated ? this.login() : false;
    }

    login() {
        this.loadingService.present();
        this.authService.login({email: this.email, password: this.password}).subscribe((res: UserModel) => {
            this.loadingService.dismiss();
            if (res.isActive) {
                const auth: AuthModel = {
                    authenticated: true,
                    active: true,
                    userInfo: res
                };
                localStorage.setItem('auth', JSON.stringify(auth));
                this.router.navigate(['dashboard']);
            }
        });
    }

}
