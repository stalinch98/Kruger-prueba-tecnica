import {all, fork, takeEvery, put, select} from "redux-saga/effects";
import {LOGIN_INGRESAR, LOGIN_LOAD_INITIAL_DATA} from "./types";
import {CurrentUserTryLogin, StateLogin, Usuario} from "../../interfaces/login";
import {setDataUsuarios, setUsuarioLogueado} from "./actions";
import jsonData from "../../assets/files/usuarios.json";
import {RootState} from "../index";
import {toast} from 'react-toastify';
import {objectIsVoid} from "../../helpers/utilsObject";

const Login = (state: RootState) => state.LoginReduce;

function* buscarUsuarioByEmail(currentLogin: CurrentUserTryLogin): any {
    const {dataUsuarios}: StateLogin = yield select(Login);
    let foundUser = dataUsuarios.find((user: Usuario) => user.email === currentLogin.email && user.password === currentLogin.password);
    if (objectIsVoid(foundUser ?? {})) {
        toast.error('Usuario o contraseña incorrectos', {
            position: toast.POSITION.TOP_RIGHT
        });
    } else {
        yield put(setUsuarioLogueado({email: foundUser!.email, rol: foundUser!.rol}));
    }
}

function* setDataUsuariosByJson(data: Usuario[]): any {
    yield put(setDataUsuarios(data));
}

function* buscarUsuario(action: { type: string, payload: CurrentUserTryLogin }) {
    yield fork(buscarUsuarioByEmail, action.payload);
}

function* loadInitialData() {
    let data: Usuario[] = jsonData.data;
    yield fork(setDataUsuariosByJson, data);
}

function* watchLoginGetRol() {
    yield takeEvery(LOGIN_INGRESAR, buscarUsuario);
}

function* watchLoginLoadInitialData() {
    yield takeEvery(LOGIN_LOAD_INITIAL_DATA, loadInitialData);
}

function* loginSaga() {
    yield all([
        fork(watchLoginGetRol),
        fork(watchLoginLoadInitialData),
    ])
}

export default loginSaga;