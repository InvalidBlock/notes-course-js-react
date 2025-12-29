import React, { useState } from 'react'
import './ComponenteCSSDinamico.css'

function ComponenteCSSDinamico() {
    const [ativo, setAtivo] = useState(false)

    function handleClick(){
        if (ativo) {
            setAtivo(false);
        } else {
            setAtivo(true);
        }
    }

    return (
        <div>
            <h2 className={ativo?'ativado':'desativado'}> Titulo com CSS Dinamico </h2>
            <button onClick={handleClick}> Clique aqui para alterar o titulo </button>
        </div>
    )
}

export default ComponenteCSSDinamico