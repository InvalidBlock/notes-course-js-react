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

![demonstracao_vite.png](/home/invalidblock/Documents/notes-course-js-react/scr/demonstracao_vite.png)

Para ver as edições acontecendo na aplicação é só seguir como o **Vite** menciona: Edite o `src/App.jsx`!