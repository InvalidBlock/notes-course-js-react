import React from 'react'
import style from './MeuComponenteCSS.module.css'
import './MeuComponenteCSS.css'

function MeuComponenteCSS() {
  return (
    <div>
        <h2 className={style.title}>Título do meu componente</h2>
        <h2 style={{color:"purple", fontSize:"20px"}}>Teste de CSS Inline</h2>
    </div>
  )
}

export default MeuComponenteCSS