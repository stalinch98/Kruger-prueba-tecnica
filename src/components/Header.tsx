import {useDispatch, useSelector} from "react-redux";
import {setUsuarioLogueado} from "../store/login/actions";
import {UsuarioLogueado} from "../interfaces/login";
import {useNavigate} from "react-router-dom";
import {RootState} from "../store";
import {objectIsVoid} from "../helpers/utils";

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        usuarioLogueado,
    } = useSelector((state: RootState) => state.LoginReduce);

    const handleLogout = () => {
        dispatch(setUsuarioLogueado({} as UsuarioLogueado));
        navigate('/');
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark d-flex">
                <a className="navbar-brand" href="#">Kruger prueba tecnica</a>
                {
                    !objectIsVoid(usuarioLogueado) &&
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout}>Cerrar
                        sesión</button>
                }
            </nav>
        </div>
    )
}
export default Header;