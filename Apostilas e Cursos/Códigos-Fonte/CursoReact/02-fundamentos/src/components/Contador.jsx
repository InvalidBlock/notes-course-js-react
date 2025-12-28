import React, { useState } from 'react'

function Contador() {
    const [contador, setContador] = useState(0);

    
    function handleClick(){
        setContador(contador+1);
        console.log(contador);
    }
    
  return (
    <div>
        <p>Você clicou {contador} vezes no botão</p>
        <button onClick={handleClick}>Clique Aqui!</button>
    </div>
  )
}

export default Contador