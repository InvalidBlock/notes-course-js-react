import { useState } from "react"

function RenderizacaoCondicional() {
    const [mostrarTexto, setMostrarTexto] = useState(true);
    const [numero, setNumero] = useState(1);
  return (
    <div>
        <h2>Exemplo de renderização condicional</h2>
        <button onClick={()=>setMostrarTexto(!mostrarTexto)}>
            Alternar Texto
        </button>
        {mostrarTexto && <p>Este texto é exibido quando a variável <code>mostrarTexto</code> for verdadeiro</p>}

        <button onClick={()=>setNumero(numero + 1)}>
            Incrementar Numero
        </button>
        <p>
            O número {numero} é {numero % 2 === 0 ? 'par' : 'ímpar'}
        </p>

    </div>
  )
}

export default RenderizacaoCondicional