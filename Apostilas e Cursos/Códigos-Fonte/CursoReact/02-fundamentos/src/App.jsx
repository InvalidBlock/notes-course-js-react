import { useState } from 'react'
import './App.css'
import Aluno from './components/Aluno'
import Botao from './components/Botao'
import Caixa from './components/Caixa'
import CalculadoraMedia from './components/CalculadoraMedia'
import Contador from './components/Contador'
import ImagensReact from './components/ImagensReact'
import ListaExemplo from './components/ListaExemplo'
import MeuPrimeiroComponente from './components/MeuPrimeiroComponente'
import Renderizacao from './components/Renderizacao'
import RenderizacaoCondicional from './components/RenderizacaoCondicional'
import BotaoIncrementar from './components/BotaoIncrementar'
import MeuComponenteCSS from './components/MeuComponenteCSS'
import MeuComponenteCSSDinamico from './components/MeuComponenteCSSDinamico'


function App() {
  const alunos = [
    {nome: "Eduardo", curso:"React", turma:"Turma01"},
    {nome: "Maria", curso:"Java", turma:"Turma02"},
    {nome: "Carlos", curso:"Javascript", turma:"Turma03"},
    {nome: "José", curso:"Python", turma:"Turma04"},

  ]

  const [contador, setContador] = useState(0);

  function incrementarContador(){
    setContador(contador + 1);

  }


  return (
    <>
      {/*<MeuPrimeiroComponente />
      <Botao/>
      <Renderizacao/>
      <ImagensReact/>
    <Contador/>
    <CalculadoraMedia/>
    <MeuComponenteCSS/>
    <MeuComponenteCSSDinamico/>
    <ListaExemplo/>
    <RenderizacaoCondicional/>
    {alunos.map((aluno, index) => (
      <Aluno  key= {index} props={aluno}/>
    ))}
    <Caixa>
      <h3>Informação importante</h3>
      <p>Este componente mostra como usar prop <code>children</code></p>
    </Caixa>*/}
    <h1>Você clicou {contador} vezes no botão</h1>
    <BotaoIncrementar funcao={incrementarContador}/>
    

    
    </>
  )
}

export default App
