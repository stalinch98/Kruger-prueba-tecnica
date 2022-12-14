import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../components/Layout";
import Login from "../containes/Login";
import Administrador from "../containes/Administrador";
import Empleado from "../containes/Empleado";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/administrador" element={<Administrador/>}/>
                    <Route path="/empleado" element={<Empleado/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;