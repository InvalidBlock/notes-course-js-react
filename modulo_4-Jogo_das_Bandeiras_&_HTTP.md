# Módulo 4 - Jogo das Bandeiras & HTTP

[MD RAIZ](anotacoes_geral.md)

**Data de Inicio:** 03/01/2026

**Data de Término:** 03/01/2026

## Aulas

- [38 - Apresentação do módulo](https://youtu.be/VcyGa2_1Khg)
- [39 - Setup Inicial do Projeto](https://youtu.be/qTGXWx8ODGc)
- [40 - Requisições HTTP](https://youtu.be/b3beraxIbzw)
- [41 - Hook useEffect](https://youtu.be/xyEn7CXz5Ag)
- [42 - Teste de Requisição HTTP e useEffect](https://youtu.be/ztOZ-401JT8)
- [43 - Componente Flag](https://youtu.be/cXaNhq7ziDE)
- [44 - Componente Game - Início](https://youtu.be/DTAKsuNOPLQ)
- [45 - Componente Game - startRound](https://youtu.be/cm2zoNxwutY)
- [46 - Componente Game - handleOptionClick](https://youtu.be/sbf1p2J0DII)
- [47 - Criando o JSX do jogo](https://youtu.be/RHnaDU5UwkA)
- [48 - CSS do GameFlag](https://youtu.be/SD6WOUe0I4g)
- [49 - Exercicio](https://youtu.be/pAVbX_Lu0vw)
- [50 - Finalização do Módulo](https://youtu.be/lvuDkt64j7Y)

.

## Anotações

Como essas aulas são práticas não vai ter anotações de coisas que não sejam funções ou conceitos novos explicados.

### Aula 40 - Requisições HTTP

Essa é uma aula teórica sobre...

Esse recurso é essencial para interagir com os servidores para recuperar, enviar e requisitar dados, geralmente chamadas de API.

#### API

É um conjunto de regras, protocolos e ferramentas que permitei comunicação entres diferentes sistemas, componentes de softwares e aplicações.
Ou seja, ela é um intermédio de comunicação entre a sua aplicação e outro sistema.

> É como um garçom, a aplicação (cliente) pede para API (garçom) que leva o pedido para o servidor (cozinha).
>
> ~Professor Eduardo Gomes

#### Verbos mais comuns

São eles:
>
> Get -> Recuperar dados do servidor
>
> Post -> Enviar dados e criar novo registro ou alterar, mas principalmente registrar
>
> Put -> Atualizar dados
>
> Delete -> Excluir informação atráves de API
>
> ~ Professor Eduardo Gomes

#### Hook: useEffect

Ele é um hook que realiza uma operação após um estado, sendo feito a partir de algum ciclo:

``` JSX

// Efeito sem dependência
// Opera na Renderização

useEffect (()=> {
    console.log("Executarei após cada renderização")
} /* Porque não tenho dependências aqui :p */ );

// -------------------------------------------------------------------------------------------

// Efeito com dependência
// Opera quando as dependências especificadas mudam

useEffect (()=> {
    console.log("Executarei quando dados mudar")
}, [dados] /* Há dependências aqui!! */ );

// Ou seja, vai executar quando [dados] alterar

// -------------------------------------------------------------------------------------------

// Efeito de Montagem e Desmontagem
// É usado em limpezas e inicializações

useEffect (()=> {
    console.log("Executarei na montagem");

    return () => {
        console.log("Executarei na desmontagem");
    }

}, [] /* Sem dependências aqui!! */ );
```

### Aula 41 - Teste de Requisição HTTP e useEffect

Nessa aula foi aplicado um teste com a API. A seguir o código com algoritimo comentado:

``` JSX
// Test.jsx

import { useEffect, useState } from 'react'

function Test() {
    const [flags, setFlags] = useState({});

    useEffect(() => {
        // Comando para chamar a API e buscar as informações
        fetch('https://flagcdn.com/en/codes.json')

            // ATENÇÃO!
            // Esse é o verbo GET por padrão

            // .then é uma promisse, ou seja, o fetch vai dar uma resposta, mas primeiro tem que esperar ele processar.
            // o .then seria o então tipo "Processou as bandeiras, então ..."

            // Converter a resposta em JSON
            // Porque JSON? Porque é um formato leve e fácil de trabalhar com dados
            .then(response => response.json())
            // Atualizar o estado com os dados recebidos
            .then(data => setFlags(data))
            // Serve para caso der erro ele mandar um aviso no console para detecta-lo
            .catch(error => console.error('Error fetching flags:', error));

            // Fiz isso para ver como apareceriam os dados no console do navegador
            console.log(flags);

    }, []);

    return (
        <div>
            <ul>
                {/* Object.entries transforma o objeto "flags" em um array de arrays */}
                {Object.entries(flags).map(([code, name]) => (<li key={code}>{code} - {name}</li>))}
            </ul>
        </div>
    )
}

export default Test
```

### Aula 42, 43, 44 ,45 , 46, 47, 48, 49 e 50

Como eu havia dito, este módulo é só prática então para realmente ver as coisas feitas veja nos [códigos](/Projetos/mod4-flag-game/).

## ACABOU O MÓDULO

O módulo seguinte é o [Módulo 5 - Gerenciador de Tarefas (To-Do List)](/modulo_5-Gerenciador_de_Tarefas_(To-Do_List).md).
