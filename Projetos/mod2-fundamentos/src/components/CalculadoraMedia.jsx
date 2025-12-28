import React, { useState } from 'react'

function CalculadoraMedia() {
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [media, setMedia] = useState(0);

    function calcularMedia(){
        const mediaCalculada = ((parseFloat(numero1) + parseFloat(numero2))/2).toFixed(2);
        // O parseFloat é a forma que se converte uma string em número decimal no JS, o mesmo que toFloat do C#
        // toFixed() define o número de casas decimais que o número terá.
        setMedia(mediaCalculada);
    }

    return (
        <div className='calculadora-container'>
            {/* Foi definido uma classe para que possa ser utilizado o CSS posteriormente para estilizar a calculadora*/}

            <h2>Calculadora de Média</h2>

            <div className='input-group'>

                <label>
                    Número 1:
                    <input type="number" autoFocus onChange={(e)=>setNumero1(e.target.value)} value={numero1}/>
                    {/* 
                    O autoFocus faz com que o cursor já inicie nesse input 
                    onChange captura o valor digitado e atualiza a useState

                    O "e" significa evento, ele consiste no valor do evento registrado pelo input.
                    Que posteriormente é utilizado para pegar o valor digitado no input através do "e.target.value"

                    O value={numero1} faz com que o valor do input seja sempre o valor da useState, assim que a useState for atualizada, 
                    o valor do input também é atualizado.
                    Ótimo para quando se quer limpar o input após o cálculo, por exemplo em fórmularios com vários campos e que devem ter a
                    exibição dos valores atualizados para o usuário.
                    */}
                </label>

            </div>

            <div className='input-group'>

                <label>
                    Número 2:
                    <input type="number" onChange={(e)=>setNumero2(e.target.value)} value={numero2}/>
                </label>

            </div>

            <button className='calcular-button' onClick={calcularMedia}>Calcular Média</button>

            <h2>Média: {media}</h2>

        </div>
    )
}

export default CalculadoraMedia