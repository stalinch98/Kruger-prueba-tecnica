import {EMPLEADO_OPEN_MODAL} from "./types";

export const setOpenModal = (open: boolean) => ({
    type: EMPLEADO_OPEN_MODAL,
    payload: open
});