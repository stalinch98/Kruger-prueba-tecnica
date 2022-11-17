import {Usuario} from "../../interfaces/login";
import {
    ADMINISTRADOR_OPEN_MODAL,
    ADMINISTRADOR_SET_IS_EDIT,
    ADMINISTRADOR_SET_CURRENT_USER
} from "./types";

export const setCurrentUser = (usuario: Usuario) => ({
    type: ADMINISTRADOR_SET_CURRENT_USER,
    payload: usuario
});

export const setOpenModal = (open: boolean) => ({
    type: ADMINISTRADOR_OPEN_MODAL,
    payload: open
});
export const setIsEdit = (open: boolean) => ({
    type: ADMINISTRADOR_SET_IS_EDIT,
    payload: open
});