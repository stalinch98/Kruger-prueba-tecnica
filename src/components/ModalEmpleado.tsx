import Modal from "react-bootstrap/Modal";
import {setOpenModal} from "../store/empleado/actions";
import {useDispatch, useSelector} from "react-redux";
import {Usuario} from "../interfaces/login";
import {RootState} from "../store";
import {useEffect, useState} from "react";

const ModalEmpleado = () => {

    const dispatch = useDispatch();

    const {
        LoginReduce, EmpleadoReduce
    } = useSelector((state: RootState) => state);

    const {
        usuarioLogueado,
        dataUsuarios,
    } = LoginReduce;

    const {
        openModal
    } = EmpleadoReduce;

    const [updatedUser, setUpdatedUser] = useState<Usuario>({} as Usuario);

    useEffect(() => {
        let user = dataUsuarios.find((user) => user.email === usuarioLogueado.email);
        setUpdatedUser(user!);
    }, []);

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
                        Editar mi información
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Nombres</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.nombres}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Apellidos</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.apellidos}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Cédula</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.cedula}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Email</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.email}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondarybtn btn-secondary" onClick={() => {
                        dispatch(setOpenModal(false));
                    }}>Cerrar
                    </button>
                    <button className="btn btn-secondarybtn btn-primary">Guardar
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalEmpleado;