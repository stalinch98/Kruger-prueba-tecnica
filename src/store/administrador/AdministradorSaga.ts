import {all, fork, select, takeEvery, put} from "redux-saga/effects";
import {ADMINISTRADOR_ELIMINAR_USER} from "./types";
import {StateLogin, Usuario} from "../../interfaces/login";
import {RootState} from "../index";
import {setDataUsuarios} from "../login/actions";

const Login = (state: RootState) => state.LoginReduce;

function* eliminarUsuario(action: { type: string, payload: Usuario }) {
    const {dataUsuarios}: StateLogin = yield select(Login);
    let newDataUsuarios = dataUsuarios.filter((user: Usuario) => user.email !== action.payload.email);
    yield put(setDataUsuarios(newDataUsuarios));
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