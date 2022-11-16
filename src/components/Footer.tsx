const Footer = () => {

    const date = new Date();

    return (
        <div>
            <footer className="py-3 bg-dark text-white-50 position-absolute w-100 bottom-0">
                <div className="container text-center">
                    <small>Desarrollado por Stalin Chiguano - {date.getFullYear()}</small>
                </div>
            </footer>
        </div>
    );
}

export default Footer;