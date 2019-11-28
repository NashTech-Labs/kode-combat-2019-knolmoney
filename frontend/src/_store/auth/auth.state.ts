import {AuthModel, UserModel} from "./auth.model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AuthService} from "./auth.service";
import {Login} from "./auth.actions";
import set = Reflect.set;
import {tap} from "rxjs/operators";

const defaultState: AuthModel = {
    authenticated: false,
};

@State<AuthModel>({
    name: 'auth',
    defaults: defaultState
})

export class AuthState {
    constructor(
        private authService: AuthService,
    ) {
    }

    @Action(Login)
    login(
        {getState, patchState}: StateContext<AuthModel>,
        {payload}: Login,
    ) {
        return this.authService.login(payload).pipe(tap((authInfo: UserModel) => {
            console.log(JSON.stringify(authInfo));
            const state = getState();
            if (!authInfo.isActive) {
                patchState({
                    authenticated: false,
                    active: false
                });
            } else {
                patchState({
                    authenticated: true,
                    userInfo: {
                        userId: authInfo.userId,
                        orgId: authInfo.orgId,
                        firstName: authInfo.firstName,
                        lastName: authInfo.lastName,
                        email: authInfo.email,
                        phone: authInfo.phone,
                        created: authInfo.created,
                        updated: authInfo.updated,
                        isActive: authInfo.isActive,
                        isAdmin: authInfo.isAdmin,
                        profilePic: authInfo.profilePic
                    }
                });
            }
        }));
    }

    @Selector()
    static getAll(state) {
        return state;
    }

    @Selector()
    static isAuthenticated(state: AuthModel) {
        return state.authenticated;
    }

    @Selector()
    static isActive(state: AuthModel) {
        return state.active;
    }

    @Selector()
    static getAllUserInfo(state: AuthModel) {
        return state.userInfo;
    }

    @Selector()
    static getUserId(state: AuthModel) {
        return state.userInfo.userId;
    }

    @Selector()
    static getName(state: AuthModel) {
        return state.userInfo.firstName + ' ' + state.userInfo.lastName;
    }

    @Selector()
    static getEmail(state: AuthModel) {
        return state.userInfo.email;
    }

    @Selector()
    static getPhone(state: AuthModel) {
        return state.userInfo.phone;
    }

    @Selector()
    static isAdmin(state: AuthModel) {
        return state.userInfo.isAdmin;
    }
}
