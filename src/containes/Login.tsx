import backgroundImage from '../assets/img/login_img.svg';
import '../assets/styles/Login.css';

const Login = () => {
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
                <button type="submit" className="login__cta">
                    Login
                </button>
            </form>
        </section>
    )
}
export default Login;