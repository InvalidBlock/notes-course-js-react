import React from 'react'

function Caixa({children}) {
  return (
    <div>
        <h2>Exemplo de prop <code>children</code></h2>
        {children}
    </div>
  )
}

export default Caixa