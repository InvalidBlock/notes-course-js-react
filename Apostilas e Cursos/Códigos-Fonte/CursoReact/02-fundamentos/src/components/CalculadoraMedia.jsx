import React, { useState } from 'react'
import './CalculadoraMedia.css'

function CalculadoraMedia() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [media, setMedia] = useState(0);

    function calcularMedia(){
        const mediaCalculada = ((parseFloat(numero1)+parseFloat(numero2))/2).toFixed(2);
        setMedia(mediaCalculada);
    };

  return (
    <div className='calculadora-container'>
        <h2>Calculadora de Média</h2>
        <div className='input-group'>
            <label>
                Número 1:
                <input type="number" autoFocus onChange={(e)=>setNumero1(e.target.value)} value={numero1}/>
            </label>
        </div>
        <div className="input-group">
            <label>
                Número 2:
                <input type="number" onChange={(e)=>setNumero2(e.target.value)} value={numero2}/>
            </label>
        </div>
        <button className='calcular-button' onClick={calcularMedia}>
            Calcular Média
        </button>
        <h2>
            Média: {media} 
        </h2>

    </div>
  )
}

export default CalculadoraMedia