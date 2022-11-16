import {all, fork, takeEvery} from "redux-saga/effects";
import {ADMINISTRADOR_ELIMINAR_USER} from "./types";
import {Usuario} from "../../interfaces/login";

function* eliminarUsuario(action: { type: string, payload: Usuario }) {
    console.log(action.payload);
}

function* watchEliminarUsuario() {
    yield takeEvery(ADMINISTRADOR_ELIMINAR_USER, eliminarUsuario);
}

function* administradorSaga() {
    yield all([
        fork(watchEliminarUsuario),
    ])
}

export default administradorSaga;