import {Usuario} from "../../interfaces/login";
import {ADMINISTRADOR_OPEN_MODAL, ADMINISTRADOR_SET_CURRENT_USER} from "./types";
import {Action} from "../../interfaces/general";
import {StateAdministrador} from "../../interfaces/administrador";

const INITIAL_STATE: StateAdministrador = {
    currentUser: {} as Usuario,
    openModal: false,
}

const actions: Action<any> = {
    type: '',
    payload: ''
}

const AdministradorReduce = (state = INITIAL_STATE, {type, payload} = actions): StateAdministrador => {
    switch (type) {
        case ADMINISTRADOR_SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }
        case ADMINISTRADOR_OPEN_MODAL:
            return {
                ...state,
                openModal: payload,
            }
        default:
            return {
                ...state
            }
    }
}
export default AdministradorReduce;