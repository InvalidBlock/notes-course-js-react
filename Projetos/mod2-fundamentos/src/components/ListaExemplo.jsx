import React, { useState } from 'react'

function ListaExemplo() {
    const [itens, setItem] = useState(["maçã", "Banana", "Laranja"]);

    function RemoverUltimoItemDaLista(){
        /* 
        Usa o setItem para mudar a useState, primeiramente pegamos o Previous State e usando ele, é chamado a função slice para retirar um elemento sendo (Inicio, Fim)
        o -1 é usado pois ele remete que o fim é o último elemento. E o último é o que vai ser retirado com o slice.
        */
        setItem((prevItem) => prevItem.slice(0, -1));
    }

    return (
        <div>
            <ul>
                {itens.map((item,index) => (<li key={index}>{index + ": " + item}</li>))}
            </ul>
            <button onClick={RemoverUltimoItemDaLista}>
                Remover último item da lista
            </button>
        </div>
    )
}

export default ListaExemplo