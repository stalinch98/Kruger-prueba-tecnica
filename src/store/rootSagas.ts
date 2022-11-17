import {all, fork} from 'redux-saga/effects';
import LoginSaga from "./login/loginSaga";
import administradorSaga from "./administrador/AdministradorSaga";
import empleadoSaga from "./empleado/EmpleadoSaga";

export default function* rootSaga() {
    yield all([
        fork(LoginSaga),
        fork(administradorSaga),
        fork(empleadoSaga),
    ])
}