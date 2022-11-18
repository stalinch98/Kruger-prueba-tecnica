import Modal from "react-bootstrap/Modal";
import {setCurrentUser, setOpenModal, setIsEdit} from "../store/administrador/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {Usuario} from "../interfaces/login";
import {ADMINISTRADOR_CREAR_USUARIO, ADMINISTRADOR_SET_USERS} from "../store/administrador/types";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

const ModalActualizarUsuario = () => {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const {
        openModal, currentUser, isEdit
    } = useSelector((state: RootState) => state.AdministradorReduce);


    const handleSaveUpdateUser = (e: any) => {
        if (isEdit) {
            dispatch({type: ADMINISTRADOR_SET_USERS, payload: e});
        } else {
            dispatch({type: ADMINISTRADOR_CREAR_USUARIO, payload: e});
        }
    }

    useEffect(() => {
        if (isEdit) {
            reset(currentUser);
        } else {
            reset({
                cedula: '',
                nombres: '',
                apellidos: '',
                email: '',
            });
        }
    }, [currentUser]);

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
                    dispatch(setIsEdit(false));
                    dispatch(setOpenModal(false));
                }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {isEdit ? 'Editar usuario' : 'Crear usuario'}
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(handleSaveUpdateUser)}>
                    <Modal.Body>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Nombres</label>
                                <input type="text" className="form-control" defaultValue={currentUser.nombres}
                                       {...register('nombres', {
                                           required: true,
                                           pattern: {
                                               value: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
                                               message: 'Nombres invalidos'
                                           }
                                       })}
                                />
                                {errors?.nombres?.type === 'required' && (
                                    <p className="administrador__error">Este campo es requerido</p>
                                )}
                                {errors.nombres?.message &&
                                    <p className="administrador__error">{errors.nombres?.message + ""}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Apellidos</label>
                                <input type="text" className="form-control" defaultValue={currentUser.apellidos}
                                       {...register('apellidos', {
                                           required: true,
                                           pattern: {
                                               value: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
                                               message: 'Apellidos invalidos'
                                           }
                                       })}
                                />
                                {errors?.apellidos?.type === 'required' && (
                                    <p className="administrador__error">Este campo es requerido</p>
                                )}
                                {errors.apellidos?.message &&
                                    <p className="administrador__error">{errors.apellidos?.message + ""}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Cédula</label>
                                <input type="text" className="form-control" defaultValue={currentUser.cedula}
                                       {...register('cedula', {
                                           required: true,
                                           pattern: {
                                               value: /^[0-9]{10,10}$/g,
                                               message: 'Cédula invalida'
                                           }
                                       })}
                                />
                                {errors?.cedula?.type === 'required' && (
                                    <p className="administrador__error">Este campo es requerido</p>
                                )}
                                {errors.cedula?.message &&
                                    <p className="administrador__error">{errors.cedula?.message + ""}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Email</label>
                                <input type="text" className="form-control" defaultValue={currentUser.email}
                                       {...register('email', {
                                           required: true,
                                           pattern: {
                                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                               message: 'Email invalido'
                                           }
                                       })}
                                />
                                {errors?.email?.type === 'required' && (
                                    <p className="administrador__error">Este campo es requerido</p>
                                )}
                                {errors.email?.message &&
                                    <p className="administrador__error">{errors.email?.message + ""}</p>}
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondarybtn btn-primary" type="submit">Guardar
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}

export default ModalActualizarUsuario;