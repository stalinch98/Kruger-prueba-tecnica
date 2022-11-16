import backgroundImage from '../assets/img/login_img.svg';
import '../assets/styles/Login.css';
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_INGRESAR, LOGIN_LOAD_INITIAL_DATA} from "../store/login/types";
import {useEffect} from "react";
import {RootState} from "../store";
import {objectIsVoid} from "../helpers/utilsObject";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const {
        usuarioLogueado,
    } = useSelector((state: RootState) => state.LoginReduce);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({type: LOGIN_LOAD_INITIAL_DATA});
    }, []);

    useEffect(() => {
        if (!objectIsVoid(usuarioLogueado)) {
            if (usuarioLogueado.rol === 'Administrador') {
                navigate('/administrador');
            } else {
                navigate('/');
            }
        }
    }, [usuarioLogueado]);

    return (
        <section className="login">
            <figure className="login__picture">
                <img className="login__img" src={backgroundImage} alt="contact img"/>
            </figure>
            <form className="login__form">
                <h2 className="login__title">Iniciar Sesión</h2>
                <label className="login__text">
                    Correo Electrónico
                    <input
                        placeholder="juan@gmail.com"
                        className="login__input"
                    />
                </label>
                <label className="login__text">
                    Contraseña
                    <input
                        placeholder="********"
                        className="login__input"
                    />
                    <i className="bx bx-show login__password--show"/>
                </label>
                <button type="button" className="login__cta"
                        onClick={() => {
                            dispatch({
                                type: LOGIN_INGRESAR,
                                payload: {email: 'stalin_dany98@hotmail.com', password: 'asd123'}
                            })
                        }}>
                    Login
                </button>
            </form>
        </section>
    )
}
export default Login;