import {all, fork, select, takeEvery, put} from "redux-saga/effects";
import {ADMINISTRADOR_ELIMINAR_USER, ADMINISTRADOR_SET_USERS} from "./types";
import {StateLogin, Usuario} from "../../interfaces/login";
import {RootState} from "../index";
import {setDataUsuarios} from "../login/actions";
import {setCurrentUser, setOpenModal} from "./actions";

const Login = (state: RootState) => state.LoginReduce;

function* eliminarUsuario(action: { type: string, payload: Usuario }) {
    const {dataUsuarios}: StateLogin = yield select(Login);
    let newDataUsuarios = dataUsuarios.filter((user: Usuario) => user.email !== action.payload.email);
    yield put(setDataUsuarios(newDataUsuarios));
}

function* actualizarUsuario(action: { type: string, payload: Usuario }) {
    const {dataUsuarios}: StateLogin = yield select(Login);
    let newData = dataUsuarios.map(item => item.id === action.payload.id
        ? {
            ...item, nombres: action.payload.nombres, apellidos: action.payload.apellidos,
            cedula: action.payload.cedula, email: action.payload.email
        } : item);
    yield put(setDataUsuarios(newData));
    yield put(setCurrentUser({} as Usuario));
    yield put(setOpenModal(false));
}

function* watchEliminarUsuario() {
    yield takeEvery(ADMINISTRADOR_ELIMINAR_USER, eliminarUsuario);
}

function* watchActualizarUsuario() {
    yield takeEvery(ADMINISTRADOR_SET_USERS, actualizarUsuario);
}

function* administradorSaga() {
    yield all([
        fork(watchEliminarUsuario),
        fork(watchActualizarUsuario),
    ])
}

export default administradorSaga;