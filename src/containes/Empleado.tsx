import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import '../assets/styles/Administrador.css'
import ModalEmpleado from "../components/ModalEmpleado";
import {setOpenModal} from "../store/empleado/actions";
import {useEffect} from "react";
import {objectIsVoid} from "../helpers/utilsObject";
import {useNavigate} from "react-router-dom";

const Empleado = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        usuarioLogueado,
    } = useSelector((state: RootState) => state.LoginReduce);

    useEffect(() => {
        if (objectIsVoid(usuarioLogueado)) {
            navigate('/');
        }
    }, []);

    return (
        <section className="administrador">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="formGroupExampleInput" className="login__text">Mi email</label>
                        <input type="text" className="form-control" defaultValue={usuarioLogueado.email}
                               readOnly={true}/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <button className={"btn btn-primary"} onClick={() => {
                            dispatch(setOpenModal(true));
                        }}>
                            Editar mi información
                        </button>
                    </div>
                </div>
            </div>
            <ModalEmpleado/>
        </section>
    )
}

export default Empleado;