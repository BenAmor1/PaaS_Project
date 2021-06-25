
export const enum Postion {
    ADMIN = 'ADMIN',
    AUTHOR = 'AUTHOR',
    SIMPLE_USER = 'SIMPLE_USER',
}

export interface User {
    id?: number;
    name?: string;
    lastName?: string;
    username?: string;
    position?: Postion;
}
