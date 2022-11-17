import Modal from "react-bootstrap/Modal";
import {setOpenModal} from "../store/administrador/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useEffect, useState} from "react";
import {Usuario} from "../interfaces/login";
import {ADMINISTRADOR_SET_USERS} from "../store/administrador/types";

const ModalActualizarUsuario = () => {

    const dispatch = useDispatch();

    const {
        openModal, currentUser
    } = useSelector((state: RootState) => state.AdministradorReduce);

    const [updatedUser, setUpdatedUser] = useState<Usuario>(currentUser);

    useEffect(() => {
        setUpdatedUser(currentUser);
    }, [openModal]);

    return (
        <div>
            <Modal
                show={openModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={() => {
                    dispatch(setOpenModal(false));
                }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Actualizar usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Nombres</label>
                                <input type="text" className="form-control" defaultValue={currentUser.nombres}
                                       onChange={(e) => setUpdatedUser({...updatedUser, nombres: e.target.value})}/>
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Apellidos</label>
                                <input type="text" className="form-control" defaultValue={currentUser.apellidos}
                                       onChange={(e) => setUpdatedUser({...updatedUser, apellidos: e.target.value})}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Cédula</label>
                                <input type="text" className="form-control" defaultValue={currentUser.cedula}
                                       onChange={(e) => setUpdatedUser({...updatedUser, cedula: e.target.value})}/>
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Email</label>
                                <input type="text" className="form-control" defaultValue={currentUser.email}
                                       onChange={(e) => setUpdatedUser({...updatedUser, email: e.target.value})}/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondarybtn btn-secondary" onClick={() => {
                        dispatch(setOpenModal(false));
                    }}>Cerrar
                    </button>
                    <button className="btn btn-secondarybtn btn-primary" onClick={() => {
                        dispatch({type: ADMINISTRADOR_SET_USERS, payload: updatedUser});
                    }}>Guardar
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalActualizarUsuario;