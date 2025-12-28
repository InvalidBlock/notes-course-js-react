import React, { useState } from 'react'
import './App.css'
import { use } from 'react';

function App() {

  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [depth, setDepth] = useState("");
  const [volume, setVolume] = useState(0);

  function calculateVolume() {
    const volumeCalculado = parseFloat(width) * parseFloat(length) * parseFloat(depth);
    setVolume(volumeCalculado);
    console.log("Volume Calculado:" + volumeCalculado);
  }

  return (
    <>
      <div className='calculadora-container'>

        <h2>Calculadora de Volume</h2>

        <div className='input-group'>

          <label >
            Comprimento (Metros):
            <input type="number" autoFocus onChange={(e) => setWidth(e.target.value)} value={width} />

          </label>
        </div>

        <div className='input-group'>

          <label >
            Largura (Metros):
            <input type="number" onChange={(e) => setLength(e.target.value)} value={length} />

          </label>
        </div>

        <div className='input-group'>

          <label >
            Profundidade (Metros):
            <input type="number" onChange={(e) => setDepth(e.target.value)} value={depth} />

          </label>
        </div>

        <button className='calculadora-button' onClick={calculateVolume}>Calcular Volume</button>

        <h2>Volume: {volume}m</h2>

      </div>
    </>
  )
}

export default App
