import React from 'react'
import styles from './ComponenteCSS.module.css'

function ComponenteCSS() {
  return (
    <div>
        <h2 className={styles.title}>Título Teste</h2>
        <h2 style={{color: "limegreen", fontSize: "18px", backgroundColor: "#4d4d4dff"}}>Teste de CSS em InLine</h2>
    </div>
  )
}

export default ComponenteCSS