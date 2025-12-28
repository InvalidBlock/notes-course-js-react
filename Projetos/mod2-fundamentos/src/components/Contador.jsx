// Assim que importa o HOOK
import React, {useState} from 'react'

function Contador() {

    // Assim que vai definir uma useState
    const [/*Nome da useState*/ contador, /*Nome da função que altera a useState*/ setContador] = useState(0); // Aqui o 0 é apenas um valor inicial

    // Função de funcionamento do botão
    function handleClick(){
        // Agora chama a função que altera a useState
        setContador(contador+1);
        console.log(contador);
    }

  return (
    <div>
        <p>O valor do contador está em {contador}!</p>
        <button onClick={handleClick}>Clique aqui!</button>
    </div>
  )
}

export default Contador