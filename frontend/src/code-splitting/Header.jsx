import { Link } from 'react-router-dom';
import logo from './assets/emblema.jpeg';

const Header = () => {
    return(
       <div id="container">
        <header>

    <nav className="menu">

    <Link to="/"><img src={logo} width="100" height="60" alt="Logo Full Stack Eletro"/></Link>
        <Link to="/produtos">Nossos Produtos</Link>
        <Link to="/nossaslojas">Nossas Lojas</Link>
        <Link to="/contato">Entre em Contato</Link>

    </nav>
    </header>
    </div>


    )
}

export default Header;
