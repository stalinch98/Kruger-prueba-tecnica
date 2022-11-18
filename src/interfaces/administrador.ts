import {Usuario} from "./login";

export interface StateAdministrador {
    currentUser: Usuario,
    openModal: boolean,
    isEdit: boolean,
}

export interface Intervalo {
    inicio: string,
    fin: string
}