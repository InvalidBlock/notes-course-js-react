# Módulo 1 - Introdução

**Data de Inicio:** 23/12/2025

**Data de Término:**

### Aulas:

- [01 - Introdução](https://youtu.be/A1SHfUo2xsI)
- [02 - Preparação do Ambiente](https://youtu.be/4ZHHsGL5OE8)
- [03 - Primeira Aplicação Hello World](https://youtu.be/liOZ5A-7imQ)
- [04 - Estrutura dos arquivos do projeto](https://youtu.be/DbGO3Y_MngU)
- [05 - Dicas como aproveitar melhor o curso](https://youtu.be/MHBWONISnmc)

.
# Anotações:

## 01 - Introdução:

### React:

#### O que é:

Ele é uma biblioteca *JavaScript* desenvolvida pelo **Facebook**, atualmente é amplamente utilizada na criação de interfaces de usuário dinâmicas e interativas, também conhecida como *Single Page Application*(**SPA**)

###### ATENÇÃO!

> Foi *freezado* que o *React* é uma biblioteca e não um *framework*, pois da versatilidade diferentemente do que o framework que precisa de seguir o formato estabelecido, ou seja, no React não precisa ser trabalhado de forma rígida e implantada no projeto até posteriormente se houver adaptações. ~ Professor Eduardo Gomes

##### Termos Técnicos:

- **JavaScript:** Linguagem de programação, utilizada principamente para inserir interação nas páginas web, permitindo criar lógica, manipular o *DOM*, lidar com eventos e se comunicar com servidores.
- - **DOM (Document Object Model):** Representação em forma de árvore da estrutura HTML da página, que permite ao JavaScript acessar, modificar e manipular os elementos e conteúdos dinamicamente.
- **Single Page Application (SPA):** Consiste no tipo de aplicação web que carrega uma única página *HTML* e atualiza o conteúdo dinamicamente, sem recarregar a página inteira, proporcionando uma experiência mais rápida e fluida.
- - **HTML:** Linguagem Markdown (Marcação) usada para estruturar o conteúdo de uma página web, definindo elementos como textos, imagens, links, formulários e botões.
- **Framework:** Conjunto de ferramentas, bibliotecas e padrões que fornece uma estrutura pronta para o desenvolvimento de aplicações, ajudando a organizar o código e acelerar o desenvolvimento.

#### Componentes:
O **React** utiliza o conceito de **componentes** que funcionam como blocos reutilizáveis e que se necessitar manutenção, todos os sites e parte deles que usam esse componente serão atualizados juntamente.

> Mesma ideia que um Bloco no Autocad e um Prefab na Unity, ou seja, é um bloco padrão, modificável que você define e reutiliza em outras partes da aplicação. ~ Autor

#### Otimização:
O **React** é popular pela sua boa performace e desempenho, que acontece devido a utilização do *Virtual DOM*, minimizando as atualizações diretas do *DOM*.

###### Termos Técnicos:
- **DOM:** Representação em forma de árvore da estrutura HTML da página, que permite ao JavaScript acessar, modificar e manipular os elementos e conteúdos dinamicamente.
- **Virtual DOM:** Representação virtual do DOM, mas mantida em memória, usada por bibliotecas/frameworks como o React para otimizar atualizações na interface, aplicando ao DOM real apenas as mudanças necessárias.

#### Node.js:

Ele é o ambiente de execução do **JavaScript**, também conhecido como **Runtime**, permitindo utilizar o JS do lado do servidor e back-end.

#### NPM (Node Package Manager):

É o gerenciador de pacotes (módulos) padrão do Node.js, permitindo gerenciar bibliotecas e dependências.

#### Vite:

É uma ferramenta para criação na área de Front-End, oferencendo um ambiente de desenvolvimento mais eficiente e produtivo.

## Aula 03 - Primeira Aplicação, Hello World

No terminal usar:

```bash
cd <caminho do diretório>

# Por meio do NPM você deve usar o seguinte comando:

npm create vite@latest

# Depois ele prossegue mostrando o resto do procedimento e retorna um link da hospedagem local.
```

![demonstracao_vite.png](/scr/demonstracao_vite.png)

Para ver as edições acontecendo na aplicação é só seguir como o **Vite** menciona: Edite o `src/App.jsx`!

O primeiro projeto que vai ser desenvolvido é do "Hello World!", é cliche, mas apenas para aprender e ver superficialmente como as ferramentas funcionam e se interagem.

Links da localização dos arquivos:

- [src/App.jsx](hello-world/src/App.jsx)

## Aula 04 - Estrutura dos arquivos do projeto

### Pastas
- `node_modules`, ela é gerenciada pelo **NPM** e contém as bibliotecas e dependências.
> Essa pasta não necessáriamente precisa estar no computador, ela é a que mais contém arquivos, porém se não houver ela é instalada automáticamente. Por exemplo quando vai transferir o projeto para um diferente computador.
~Professor Eduardo Gomes
- `public`, é uma pasta estática, ou seja, não se altera, ela pode conter as imagens e links fixos, pois não vai ser alterada e levada da mesma forma que estava.
- `src`, é a pasta fonte, ou seja, onde estão os scripts, componentes e fontes, dentre outras coisas. Ela não tem acesso pública, apenas por link e pela aplicação.

### Arquivos Pré Gerados:
- `App.css`, é o arquivo que contém os estilos, vulgo a parte que faz uso do CSS na página.
- `index.css`, é o mesmo que `App.css`, mas seria o estilo global dos outras páginas e componentes, pois é carregado pelo `index.html`.
- `App.jsx`, seria a aplicação e o arquivo lógico, onde realiza o JS (JavaScript) e o React.

### Parte Lógica:

```JavaScript
    import './App.css'

    function App() {
    return (
        <>
        <h1>Hello world!!!</h1>
        <p>Bem vindo a minha página</p>
        </>
    )
    }
```

A função seria o **componente**, `function` é o tipo, no caso função, o `App` é o nome da função.

- `main.jsx`, é a parte principal;

Destrinchando o `main.jsx` um pouco é primeiro necessário ver o `index.html`.

```html
...
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
...
```

Veja que na `<body>`, o corpo da página é chamado a `<div id="root"></div>`, esse `id=root` vai ser o que é implantado pelo `main.jsx`. Indo para o mesmo:

``` JavaScript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

O `main.jsx` é o código-fonte praticamente, ele é o que define o `id="root"` que no `index.html` era chamado. E nele há a presença do `<App />` que se refere a aplicação do `App.jsx`, ou seja, no corpo da página, por enquanto há apenas a apresentação da aplicação **App** definida em `App.jsx`.