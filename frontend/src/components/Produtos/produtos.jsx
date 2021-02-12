import { useState, useEffect } from 'react';

const ProdutoStories = () => {

    const [produto, setProduto] = useState([]);
    
    useEffect(async() => {
        const url = ('http://localhost/fseletro/backend/fseletro');
        const res = await fetch(url);
        const data = await res.json();
        setProduto(data);
    }, []);

let prod = document.getElementsByClassName('produto');


    function categorias(event){
        let item = event.target.id;
        for (let i = 0; i < prod.length; i++) {
            if (item === prod[i].id) {
                prod[i].style.display = "block";
        }
            else{
                prod[i].style.display = "none";
            }
        }

    }

    function todasCategorias(){
        for (let i = 0; i < prod.length; i++) {
                prod[i].style.display = "block";
            }
        }

    return(
        <>
        <div className="submenu">
            <nav className="sub">
        <button className="btn-danger" onClick={todasCategorias}> Todas as categorias (10)       |</button>
        <button className="btn-danger" id="Geladeira" onClick={categorias}> Geladeiras (4)       |</button>
        <button className="btn-danger" id="Fogao" onClick={categorias}> Fogões (1)           |</button>
        <button className="btn-danger" id="Microondas" onClick={categorias}> Microondas (2)       |</button>
        <button className="btn-danger" id="Lavaroupas" onClick={categorias}> Lava Roupas (1)      |</button>
        <button className="btn-danger" id="Lavaloucas" onClick={categorias}> Lava-Louças (2)      </button>

    </nav>
</div>
        <main>
        <header>Produtos da Loja</header>

        <div className="produtos">
            {produto.map(row => {
                return(
            <div key={row.idProduto} className="produto" id={ row.Categoria} style={{display:"block"}}>
            <img src={row.Imagem} width='305'/>
            <p>{row.Descricao}</p>
            <p>De: <strike>{row.Preco}</strike></p>
            <p className="novo_preco">Por: {row.Precofinal}</p>
        </div> 
                )
            })}
        
        </div>
        </main>
    </>
    )
}
export default ProdutoStories;