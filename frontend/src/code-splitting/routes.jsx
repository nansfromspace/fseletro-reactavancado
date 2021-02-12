import { Routes, Route } from 'react-router-dom';

import HomePage from '../views/index';
import Lojas from '../views/nossaslojas';
import Contact from '../views/contato';
import Produtos from '../views/produtos';

const MainRoute = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/nossaslojas" element={<Lojas/>}/>
            <Route path="contato" element={<Contact/>}/>
            <Route path="/produtos" element={<Produtos/>}/>
        </Routes>
    )
}

export default MainRoute;

