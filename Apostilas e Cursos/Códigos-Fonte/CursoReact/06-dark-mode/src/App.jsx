import { useEffect, useState } from 'react'

import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import codeDark from "./assets/code-dark.png";
import codeLight from "./assets/code-light.png";

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(()=> localStorage.getItem("darkMode") === "true");

  useEffect(()=>{
    localStorage.setItem("darkMode", darkMode);
  },[darkMode] );

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode?'app dark':'app'}>
      <button className='darkmode-btn' onClick={toggleDarkMode}>
        {darkMode?<i className='bx  bx-sun'  ></i>:<i className='bx  bx-moon'  ></i> }
      </button>

      <img src={darkMode?logo:logo2} alt="Logo IFSC" className='logo' />

      <div className="main-container">
        <div className="main-content">
          <h1>
            <span className="react-text">React</span> + Javascript <br />
            <span className="highlight">Aprenda sem Limites</span>
          </h1>
          <p>
            Formação Continuada em Programação Frontend com a Biblioteca React e Javascript.
            Aprenda React e se torne um profissional preparado para desenvolver interfaces modernas,
            interativas e eficientes para a web. Neste curso, você vai dominar os principais conceitos do React,
            construindo aplicações frontend com qualidade e desempenho exigidos pelo mercado.
          </p>
          <span className="prof">PROF. EDUARDO GOMES</span>
          <div className="buttons">
            <button className='primary' 
            onClick={()=> window.open('https://moodle.ifsc.edu.br/', '_blank')}
            >Acessar o Moodle</button>
            <button className='secondary' 
            onClick={()=> window.open('https://sig.ifsc.edu.br/sigaa/public/home.jsf', '_blank')}
            >Acessar o Sigaa</button>
          </div>
          <div className="reviews">
            <img className='avatar' src="https://randomuser.me/api/portraits/women/44.jpg" alt="user1" />
            <img className='avatar' src="https://randomuser.me/api/portraits/men/34.jpg" alt="user1" />
            <span className='plus'>+700</span>
            <span className="star">
              {[...Array(5)].map((_, i) => (
                <i className='bx  bxs-star' key={i} ></i> 
              ))}
              5/5
            </span>
            <span>Mais de <strog>700</strog> desenvolvedores inscritos na primeira edição</span>

          </div>

        </div>
        <div className="code-example">
          <div className="code-header">
            {darkMode?'dark-mode.jsx':'light-mode.jsx'}
          </div>
          <img src={darkMode?codeDark:codeLight} alt="React Code" />

          <div className="code-tags">
            <span className="tag react">React</span>
            <span className="tag javascript">Javascript</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
