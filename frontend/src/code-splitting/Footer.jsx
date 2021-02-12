import pagamento from './assets/formasdepgto.jpeg';

const Footer = () => {
return(
    <footer className="rodape">

        <h4 id="formas_pagamento">Formas de Pagamento</h4>
        
        <img src={pagamento} alt="Formas de Pagamento" width="300px" height="70px"/>

        <p className="recode">&copy; Recode - Todos os Direitos Reservados - 2020</p>
        
</footer>
)
}
export default Footer;
