import backgroundImage from '../assets/img/login_img.svg';
import '../assets/styles/Login.css';
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_INGRESAR, LOGIN_LOAD_INITIAL_DATA} from "../store/login/types";
import {useEffect} from "react";
import {RootState} from "../store";
import {objectIsVoid} from "../helpers/utilsObject";
import {useNavigate} from "react-router-dom";
import {useForm} from 'react-hook-form';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

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
                navigate('/empleado');
            }
        }
    }, [usuarioLogueado]);

    const handleLogin = (e: any) => {
        dispatch({
            type: LOGIN_INGRESAR,
            payload: e
        })
    }

    return (
        <section className="login">
            <figure className="login__picture">
                <img className="login__img" src={backgroundImage} alt="contact img"/>
            </figure>
            <form className="login__form" onSubmit={handleSubmit(handleLogin)}>
                <h2 className="login__title">Iniciar Sesión</h2>
                <label className="login__text">
                    Correo Electrónico
                    <input
                        placeholder="juan@gmail.com"
                        className="login__input"
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email invalido'
                            }
                        })}
                    />
                </label>
                {errors?.email?.type === 'required' && (
                    <p className="login__error">Este campo es requerido</p>
                )}
                {errors.email?.message && <p className="login__error">{errors.email?.message + ""}</p>}

                <label className="login__text">
                    Contraseña
                    <input
                        placeholder="********"
                        className="login__input"
                        {...register('password', {
                            required: true,
                            minLength: {
                                value: 6,
                                message: 'La contraseña debe tener almenos 6 caracteres'
                            }
                        })}
                    />
                    <i className="bx bx-show login__password--show"/>
                </label>
                {errors?.password?.type === 'required' && (
                    <p className="login__error">Este campo es requerido</p>
                )}
                {errors.password?.message && <p className="login__error">{errors.password?.message + ""}</p>}
                <button type="submit" className="login__cta">
                    Login
                </button>
            </form>
        </section>
    )
}
export default Login;