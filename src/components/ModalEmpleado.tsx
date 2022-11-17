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
                                       onChange={(e) => setUpdatedUser({...updatedUser, nombres: e.target.value})}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Apellidos</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.apellidos}
                                       onChange={(e) => setUpdatedUser({...updatedUser, apellidos: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Cédula</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.cedula}
                                       onChange={(e) => setUpdatedUser({...updatedUser, cedula: e.target.value})}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Email</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.email}
                                       onChange={(e) => setUpdatedUser({...updatedUser, email: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Fecha nacimiento</label>
                                <input type="date" className="form-control" defaultValue={updatedUser.fechaNacimiento}
                                       onChange={(e) => setUpdatedUser({
                                           ...updatedUser,
                                           fechaNacimiento: e.target.value
                                       })}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Direccion de domicilio</label>
                                <input type="text" className="form-control"
                                       defaultValue={updatedUser.direccionDomicilio}
                                       onChange={(e) => setUpdatedUser({
                                           ...updatedUser,
                                           direccionDomicilio: e.target.value
                                       })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Telefono</label>
                                <input type="text" className="form-control" defaultValue={updatedUser.telefono}
                                       onChange={(e) => setUpdatedUser({...updatedUser, telefono: e.target.value})}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">¿Está vacunado?</label>
                                <div className="d-flex gap-2 mt-2">
                                    <div>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                               checked={updatedUser.estaVacunado === 'Si'}
                                               onChange={(e) => setUpdatedUser({...updatedUser, estaVacunado: 'Si'})}
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Si
                                        </label>
                                    </div>
                                    <div>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                               checked={updatedUser.estaVacunado === 'No'}
                                               onChange={(e) => setUpdatedUser({...updatedUser, estaVacunado: 'No'})}
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {
                                updatedUser.estaVacunado === 'Si' && (
                                    <div>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="formGroupExampleInput">Tipo vacuna</label>
                                                <input type="text" className="form-control"
                                                       defaultValue={updatedUser.tipoVacuna!}
                                                       onChange={(e) => setUpdatedUser({
                                                           ...updatedUser,
                                                           tipoVacuna: e.target.value
                                                       })}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="formGroupExampleInput">Fecha vacunacion</label>
                                                <input type="date" className="form-control"
                                                       defaultValue={updatedUser.fechaVacunacion!}
                                                       onChange={(e) => setUpdatedUser({
                                                           ...updatedUser,
                                                           fechaVacunacion: e.target.value
                                                       })}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <label htmlFor="formGroupExampleInput"># dosis</label>
                                                <input type="number" className="form-control"
                                                       defaultValue={updatedUser.numeroDosis!}
                                                       onChange={(e) => setUpdatedUser({
                                                           ...updatedUser,
                                                           numeroDosis: Number(e.target.value)
                                                       })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
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