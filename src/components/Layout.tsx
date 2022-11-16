import Footer from "./Footer";
import {ReactElement} from "react";

interface ILayoutProps {
    children: ReactElement
}

const Layout = ({children}: ILayoutProps) => {
    return (
        <div className="Main">
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;