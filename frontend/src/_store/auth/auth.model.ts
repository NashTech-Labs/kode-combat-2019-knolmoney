export interface LoginModel {
    email: string;
    password: string;
}

export interface AuthModel {
    authenticated: boolean;
    active?: boolean;
    userInfo?: UserModel;
}

export interface UserModel {
    userId: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    created: string;
    updated: string;
    isActive: boolean;
    isAdmin: boolean;
    profilePic?: string;
}
