import {StateLogin, UsuarioLogueado} from "../../interfaces/login";
import {LOGIN_SET_DATA_USUARIOS, LOGIN_SET_USUARIO_LOGUEADO} from "./types";
import {Action} from "../../interfaces/general";

const INITIAL_STATE: StateLogin = {
    usuarioLogueado: {} as UsuarioLogueado,
    dataUsuarios: []
}

const actions: Action<any> = {
    type: '',
    payload: ''
}

const LoginReduce = (state = INITIAL_STATE, {type, payload} = actions): StateLogin => {
    switch (type) {
        case LOGIN_SET_DATA_USUARIOS:
            return {
                ...state,
                dataUsuarios: payload,
            }
        case LOGIN_SET_USUARIO_LOGUEADO:
            return {
                ...state,
                usuarioLogueado: payload,
            }
        default:
            return {
                ...state
            }
    }
}
export default LoginReduce;