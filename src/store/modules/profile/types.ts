export interface ProfileState {
    user?: User;
    error: boolean;
}

export interface User {
    name: string;
    email: string;
    phone?: string;
}
