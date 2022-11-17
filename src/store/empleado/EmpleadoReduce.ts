import {Action} from "../../interfaces/general";
import {StateEmpleado} from "../../interfaces/empleado";
import {EMPLEADO_OPEN_MODAL} from "./types";

const INITIAL_STATE: StateEmpleado = {
    openModal: false,
}

const actions: Action<any> = {
    type: '',
    payload: ''
}

const EmpleadoReduce = (state = INITIAL_STATE, {type, payload} = actions): StateEmpleado => {
    switch (type) {
        case EMPLEADO_OPEN_MODAL:
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
export default EmpleadoReduce;