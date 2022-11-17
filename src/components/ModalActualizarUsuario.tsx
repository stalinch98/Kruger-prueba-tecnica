import Modal from "react-bootstrap/Modal";
import {setCurrentUser, setOpenModal} from "../store/administrador/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useEffect, useState} from "react";
import {Usuario} from "../interfaces/login";
import {ADMINISTRADOR_CREAR_USUARIO, ADMINISTRADOR_SET_USERS} from "../store/administrador/types";

const ModalActualizarUsuario = () => {

    const dispatch = useDispatch();

    const {
        openModal, currentUser, isEdit
    } = useSelector((state: RootState) => state.AdministradorReduce);

    const [updatedUser, setUpdatedUser] = useState<Usuario>({} as Usuario);

    useEffect(() => {
        setUpdatedUser(currentUser);
    }, [isEdit, openModal]);

    const handleSubmit = () => {
        if (isEdit) {
            dispatch({type: ADMINISTRADOR_SET_USERS, payload: updatedUser});
        } else {
            dispatch({type: ADMINISTRADOR_CREAR_USUARIO, payload: updatedUser});
        }
    }

    return (
        <div>
            <Modal
                show={openModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={() => {
                    dispatch(setCurrentUser({} as Usuario));
                    dispatch(setOpenModal(false));
                }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {isEdit ? 'Editar usuario' : 'Crear usuario'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Nombres</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.nombres}
                                       onChange={(e) => setUpdatedUser({...updatedUser, nombres: e.target.value})}/>
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Apellidos</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.apellidos}
                                       onChange={(e) => setUpdatedUser({...updatedUser, apellidos: e.target.value})}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Cédula</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.cedula}
                                       onChange={(e) => setUpdatedUser({...updatedUser, cedula: e.target.value})}/>
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Email</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.email}
                                       onChange={(e) => setUpdatedUser({...updatedUser, email: e.target.value})}/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondarybtn btn-secondary" onClick={() => {
                        dispatch(setCurrentUser({} as Usuario));
                        dispatch(setOpenModal(false));
                    }}>Cerrar
                    </button>
                    <button className="btn btn-secondarybtn btn-primary" onClick={handleSubmit}>Guardar
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalActualizarUsuario;