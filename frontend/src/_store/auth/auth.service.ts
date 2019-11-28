import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginModel} from "./auth.model";

export class AuthService {
    constructor(public httpClient: HttpClient) {
    }

    login(loginParams: LoginModel): Observable<any> {
        return this.httpClient.post('https://knolmoney.free.beeceptor.com/users/login', {
            username: loginParams.email,
            password: loginParams.password
        });
    }
}
