import '../assets/styles/Administrador.css'
import {useEffect} from "react";
import {objectIsVoid} from "../helpers/utilsObject";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useNavigate} from "react-router-dom";
import {ADMINISTRADOR_ELIMINAR_USER} from "../store/administrador/types";
import {setCurrentUser, setIsEdit, setOpenModal} from "../store/administrador/actions";
import ModalActualizarUsuario from "../components/ModalActualizarUsuario";

const Administrador = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        usuarioLogueado,
        dataUsuarios,
    } = useSelector((state: RootState) => state.LoginReduce);

    useEffect(() => {
        if (objectIsVoid(usuarioLogueado)) {
            navigate('/');
        }
    }, []);

    return (
        <section className="administrador">
            <div className="usuarios">
                <button className={"btn btn-primary"} onClick={() => {
                    dispatch(setOpenModal(true));
                }}>
                    Registrar usuario
                </button>
                <table>
                    <thead>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>

                    <tbody>
                    {dataUsuarios.filter(x => x.email !== usuarioLogueado.email).map((dato, index) => (
                        <tr key={index}>
                            <td>{dato.cedula}</td>
                            <td>{dato.nombres}</td>
                            <td>{dato.apellidos}</td>
                            <td>{dato.email}</td>
                            <td>
                                <button className={"btn btn-success"} onClick={() => {
                                    dispatch(setCurrentUser(dato));
                                    dispatch(setIsEdit(true));
                                    dispatch(setOpenModal(true));
                                }}>
                                    Editar
                                </button>
                                {" "}
                                <button className={"btn btn-danger"} onClick={() => {
                                    dispatch({type: ADMINISTRADOR_ELIMINAR_USER, payload: dato})
                                }}>Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <ModalActualizarUsuario/>
        </section>
    )
}
export default Administrador;