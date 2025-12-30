import React, {useState} from 'react'

import './App.css'
import Botao from './components/Botao'
import MeuPrimeiroComponente from './components/MeuPrimeiroComponente'
import Renderizacao from './components/Renderizacao'
import ImagensReact from './components/ImagensReact'
import Contador from './components/Contador'
import CalculadoraMedia from './components/CalculadoraMedia'
import ComponenteCSS from './components/ComponenteCSS'
import ComponenteCSSDinamico from './components/ComponenteCSSDinamico'
import ListaExemplo from './components/ListaExemplo'
import RenderizacaoCondicional from './components/RenderizacaoCondicional'
import Aluno from './components/Aluno'
import Caixa from './components/Caixa'
import BotaoIncrementar from './components/BotaoIncrementar'

function App() {
  // const alunos= [
  //   {nome: "Alex", curso: "React", turma: "01"},
  //   {nome: "Bernardo", curso: "React", turma: "01"},
  //   {nome: "Davi", curso: "React", turma: "01"},
  //   {nome: "Gabriel", curso: "React", turma: "01"},
  //   {nome: "Leonardo", curso: "React", turma: "01"},
  //   {nome: "Alessandro", curso: "Java", turma: "02"},
  //   {nome: "Fábio", curso: "Java", turma: "02"},
  //   {nome: "Maria", curso: "Java", turma: "02"},
  //   {nome: "Nathan", curso: "Java", turma: "02"},
  //   {nome: "Otávio", curso: "Java", turma: "02"},
  // ]

  const [valor_incrementado, setValorIncrementado] = useState(0);

  function incrementarValor() {
    setValorIncrementado(valor_incrementado + 1);
  }

  return (
    <>
      {/*
      <MeuPrimeiroComponente />
      <Botao />
      <Renderizacao />
      <ImagensReact />
      <Contador />
      <CalculadoraMedia />
      <ComponenteCSS />
      <ComponenteCSSDinamico />
      <ListaExemplo />
      <RenderizacaoCondicional />

      {alunos.map((aluno, index) => (
        <Aluno key={index} props={aluno} />
      ))}

      <Caixa>
        <h3>informação Importante!</h3>
        <p>Este componente serve como exemplo do uso de prop <code>children</code>!</p>
      </Caixa>

      */}

      <h2>Você clicou neste botão {valor_incrementado} vezes!</h2>
      <BotaoIncrementar funcao={incrementarValor} />

    </>
  )
}

export default App
