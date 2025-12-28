import React, {useState} from 'react'
import './MeuComponenteCSSDinamico.css'

function MeuComponenteCSSDinamico() {
    const [ativo,setAtivo] = useState(true);

  return (
    <div>
        <h2 className={ativo?'ativo':'inativo'} 
        onClick={()=>setAtivo(!ativo)}
        >Título para CSS Dinâmico</h2>
    </div>
  )
}

export default MeuComponenteCSSDinamico