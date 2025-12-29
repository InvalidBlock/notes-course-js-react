import React, {useState} from 'react'

function RenderizacaoCondicional() {
    const[mostrarTexto, setMostrarTexto] = useState(false);
    const[numero, setNumero] = useState(0);

  return (
    <div>
        {/*Exemplo de operador &&*/}
        <button onClick={()=>setMostrarTexto(!mostrarTexto)}> Alternar Texto </button>
        {mostrarTexto && <p>Este texto aparecer porque <code>mostrarTexto</code> está como <code>true</code>!</p>}

        {/*Exemplo de operador ternário*/}
        <button onClick={()=>setNumero(numero + 1)}>Incrementar Número</button>
        <p>O número {numero} é {numero % 2 === 0 ? "par" : "ímpar"}</p>
    </div>
  )
}

export default RenderizacaoCondicional