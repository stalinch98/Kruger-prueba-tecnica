import {all, fork, put, select, takeEvery} from "redux-saga/effects";
import {EMPLEADO_ACTUALIZAR_INFORMACION} from "./types";
import {StateLogin, Usuario} from "../../interfaces/login";
import {setDataUsuarios} from "../login/actions";
import {setOpenModal} from "./actions";
import {toast} from "react-toastify";
import {RootState} from "../index";

const Login = (state: RootState) => state.LoginReduce;

function* actualizarUsuario(action: { type: string, payload: Usuario }) {
    const {dataUsuarios}: StateLogin = yield select(Login);
    let newData = dataUsuarios.map(item => item.id === action.payload.id
        ? {
            ...item,
            nombres: action.payload.nombres,
            apellidos: action.payload.apellidos,
            cedula: action.payload.cedula,
            email: action.payload.email,
            fechaNacimiento: action.payload.fechaNacimiento,
            direccionDomicilio: action.payload.direccionDomicilio,
            telefono: action.payload.telefono,
            estaVacunado: action.payload.estaVacunado,
            tipoVacuna: action.payload.estaVacunado === 'Si' ? action.payload.tipoVacuna : null,
            fechaVacunacion: action.payload.estaVacunado === 'Si' ? action.payload.fechaVacunacion : null,
            numeroDosis: action.payload.estaVacunado === 'Si' ? action.payload.numeroDosis : null,
        } : item);
    yield put(setDataUsuarios(newData));
    localStorage.setItem('state', JSON.stringify(newData));
    yield put(setOpenModal(false));
    toast.success('Usuario actualizado exitosamente', {
        position: toast.POSITION.TOP_RIGHT
    });
}

function* watchMiInformacion() {
    yield takeEvery(EMPLEADO_ACTUALIZAR_INFORMACION, actualizarUsuario);
}

function* empleadoSaga() {
    yield all([
        fork(watchMiInformacion),
    ])
}

export default empleadoSaga;