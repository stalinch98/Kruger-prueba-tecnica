import Footer from "./Footer";
import {ReactElement} from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

interface ILayoutProps {
    children: ReactElement
}

const Layout = ({children}: ILayoutProps) => {
    return (
        <div className="Main">
            <Header/>
            <ToastContainer/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;