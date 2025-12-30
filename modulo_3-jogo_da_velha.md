
# Módulo 3 - Tic Tac Toe

[MD RAIZ](anotacoes_geral.md)

**Data de Inicio:** 30/12/2025

**Data de Término:**

## Aulas

- [29 - Apresentação do Módulo](https://www.youtube.com/watch?v=6Bz8lfXPz4g)
- [30 - Setup da aplicação](https://www.youtube.com/watch?v=R-l1bffZdnE)
- [31 - Componente Square](https://www.youtube.com/watch?v=QZb77Sby-8U)
- [32 - Componente Game - Início](https://www.youtube.com/watch?v=uYxumbb5u3E)
- [33 - Componente Game - Lidando com o Click](https://www.youtube.com/watch?v=bhhe6wzKMTc)
- [34 - Componente Game - Verificando o Vencedor](https://www.youtube.com/watch?v=_h8LtpuV4dI)
- [35 - Componente Game - Reiniciar o Jogo](https://www.youtube.com/watch?v=GlRVAYtPFo0)
- [36 - Estilização da aplicação](https://www.youtube.com/watch?v=dssy5RbvwNA)
- [36.a - Exercicio](https://www.youtube.com/watch?v=J-c-ixvO4FA)
- [37 - Finalização do Módulo](https://www.youtube.com/watch?v=3tZlSLmTq0k)
.

## Anotações

Como essas aulas são práticas não vai ter anotações de coisas que não sejam funções ou conceitos novos explicados.

### Aula 30 - Setup da aplicação

Criação da aplicação com:

``` bash

npm create vite@latest

npm run dev

# Para conseguir fazer rodar em network e passar para outro pc da rede eu fiz essa configuração no vite.config.js
# server: {
#     host: true,
#     port: 5173
#   }

```

E esvaziar todas coisas padrões, como também a criação dos dois componentes bases para aplicação:

- Square
- GameManager

Criando o arquivo **JSX** e **CSS** com aqueles respectivos nomes.

### Aula 31 - Componente Square

Aqui nós criamos o botão, já preparando a classe dinâmica com:

``` JSX
/// ... Código

// Usar let para váriaveis de nível componente e não const como em useState.
let style = null;

if (value === "X") {
    style = "square-x";
  } else if (value === "O") {
    style = "square-o";
  } else {
    style = "square";
  }

  return (
    <div>
      <button className={style} onClick={onClick}>{value}</button>
    </div>
  )

/// ... Código
```
