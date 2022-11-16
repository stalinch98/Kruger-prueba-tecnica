import {LOGIN_SET_ROL} from "./types";

export const setLoginRol = (rol: string) => ({
    type: LOGIN_SET_ROL,
    payload: rol
});