import {all, fork, select, takeEvery, put} from "redux-saga/effects";
import {ADMINISTRADOR_CREAR_USUARIO, ADMINISTRADOR_ELIMINAR_USER, ADMINISTRADOR_SET_USERS} from "./types";
import {StateLogin, Usuario} from "../../interfaces/login";
import {RootState} from "../index";
import {setDataUsuarios} from "../login/actions";
import {setCurrentUser, setIsEdit, setOpenModal} from "./actions";
import {toast} from "react-toastify";

const Login = (state: RootState) => state.LoginReduce;

function* eliminarUsuario(action: { type: string, payload: Usuario }) {
    const {dataUsuarios}: StateLogin = yield select(Login);
    let newDataUsuarios = dataUsuarios.filter((user: Usuario) => user.email !== action.payload.email);
    yield put(setDataUsuarios(newDataUsuarios));
    toast.success('Usuario eliminado exitosamente', {
        position: toast.POSITION.TOP_RIGHT
    });
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
    yield put(setIsEdit(false));
    yield put(setOpenModal(false));
    toast.success('Usuario actualizado exitosamente', {
        position: toast.POSITION.TOP_RIGHT
    });
}

function* crearUsuario(action: { type: string, payload: Usuario }) {
    const {dataUsuarios}: StateLogin = yield select(Login);
    let usuarioExistente = dataUsuarios.filter((user: Usuario) => user.email === action.payload.email);
    if (usuarioExistente.length > 0) {
        toast.error('Este usuario ya existe', {
            position: toast.POSITION.TOP_RIGHT
        });
    } else {
        let maxId = Math.max(...dataUsuarios.map(item => item.id));
        yield put(setDataUsuarios([...dataUsuarios, {...action.payload, id: maxId + 1}]));
        yield put(setOpenModal(false));
        toast.success('Usuario creado exitosamente', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
}

function* watchEliminarUsuario() {
    yield takeEvery(ADMINISTRADOR_ELIMINAR_USER, eliminarUsuario);
}

function* watchActualizarUsuario() {
    yield takeEvery(ADMINISTRADOR_SET_USERS, actualizarUsuario);
}

function* watchCrearUsuario() {
    yield takeEvery(ADMINISTRADOR_CREAR_USUARIO, crearUsuario);
}

function* administradorSaga() {
    yield all([
        fork(watchEliminarUsuario),
        fork(watchActualizarUsuario),
        fork(watchCrearUsuario),
    ])
}

export default administradorSaga;