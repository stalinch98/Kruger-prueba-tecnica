import Footer from "./Footer";
import {ReactElement} from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ILayoutProps {
    children: ReactElement
}

const Layout = ({children}: ILayoutProps) => {
    return (
        <div className="Main">
            <ToastContainer/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;