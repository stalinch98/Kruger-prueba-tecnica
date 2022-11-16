import {LOGIN_SET_DATA_USUARIOS, LOGIN_SET_USUARIO_LOGUEADO} from "./types";
import {Usuario, UsuarioLogueado} from "../../interfaces/login";

export const setUsuarioLogueado = (usuario: UsuarioLogueado) => ({
    type: LOGIN_SET_USUARIO_LOGUEADO,
    payload: usuario
});

export const setDataUsuarios = (usuarios: Usuario[]) => ({
    type: LOGIN_SET_DATA_USUARIOS,
    payload: usuarios
});