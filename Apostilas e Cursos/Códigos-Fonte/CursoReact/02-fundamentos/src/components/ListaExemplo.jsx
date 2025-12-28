import { useState } from "react"

function ListaExemplo() {
    const [itens, setItens] = useState(['Maça', 'Banana', 'Laranja']);
    function removerUltimoItem(){
        setItens((prevItens) => prevItens.slice(0,-1));
    }
  return (
    <div>
        <ul>
            {itens.map((item,index) => (<li key={index}>{item}</li>))}
        </ul>
        <button onClick={removerUltimoItem}>
            Remover Último Item
        </button>

    </div>
  )
}

export default ListaExemplo