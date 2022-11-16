import {StateLogin} from "../../interfaces/login";
import {LOGIN_SET_ROL} from "./types";
import {Action} from "../../interfaces/general";

const INITIAL_STATE: StateLogin = {
    rol: 'Empleado'
}

const actions: Action<any> = {
    type: '',
    payload: ''
}

const LoginReduce = (state = INITIAL_STATE, {type, payload} = actions): StateLogin => {
    switch (type) {
        case LOGIN_SET_ROL:
            return {
                ...state,
                rol: payload,
            }
        default:
            return {
                ...state
            }
    }
}
export default LoginReduce;