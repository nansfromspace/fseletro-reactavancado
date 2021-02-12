
import { BrowserRouter as Router } from 'react-router-dom';
import { lazy, Suspense } from 'react'; 
import pacman from './code-splitting/assets/pacman.gif'


/*
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes'
*/


/*implementação do cody splitting e lazy loading*/

const Header = lazy( () => import('./code-splitting/Header'));
const Footer = lazy( () => import('./code-splitting/Footer'));
const Routes = lazy( () => import('./code-splitting/routes'));



const App = () => {
  return (

    <Router>
        <Suspense fallback={<p>Carregando...</p>}>
        <Header />
        </Suspense>

        <Suspense fallback={<img src={pacman}/>}>
        <Routes />
        </Suspense>

        <Suspense fallback={<p>Carregando...</p>}>
        <Footer />
        </Suspense>
    </Router>

  );
}

export default App;
