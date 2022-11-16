import {all, fork, takeEvery} from "redux-saga/effects";
import {LOGIN_INGRESAR} from "./types";

function* buscarUsuarioByEmail(email: string): any {
    console.log(email);
}

function* buscarUuario(action: { type: string, payload: string }) {
    yield fork(buscarUsuarioByEmail, action.payload);
}

function* watchLoginGetRol() {
    yield takeEvery(LOGIN_INGRESAR, buscarUuario);
}

function* loginSaga() {
    yield all([
        fork(watchLoginGetRol),
    ])
}

export default loginSaga;