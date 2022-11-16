import '../assets/styles/Administrador.css'
import {useEffect} from "react";
import {objectIsVoid} from "../helpers/utilsObject";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useNavigate} from "react-router-dom";
import {ADMINISTRADOR_ELIMINAR_USER} from "../store/administrador/types";

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
                <button className={"btn btn-primary"}>
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
                    {dataUsuarios.filter(x => x.email !== usuarioLogueado.email).map((dato) => (
                        <tr key={dato.cedula}>
                            <td>{dato.nombres}</td>
                            <td>{dato.apellidos}</td>
                            <td>{dato.email}</td>
                            <td>
                                <button className={"btn btn-success"}>
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
        </section>
    )
}
export default Administrador;