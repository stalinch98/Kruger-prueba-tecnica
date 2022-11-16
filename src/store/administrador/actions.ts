import {Usuario} from "../../interfaces/login";
import {ADMINISTRADOR_SET_CURRENT_USER} from "./types";

export const setCurrentUser = (usuario: Usuario) => ({
    type: ADMINISTRADOR_SET_CURRENT_USER,
    payload: usuario
});