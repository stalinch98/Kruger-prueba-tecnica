import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../components/Layout";
import Login from "../containes/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;