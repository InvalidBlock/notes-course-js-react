# Módulo 5 - Gerenciador de Tarefas (To-Do List)

[MD RAIZ](anotacoes_geral.md)

**Data de Inicio:** 05/01/2025

**Data de Término:**

## Aulas

- [51 - Apresentação do Módulo](https://youtu.be/kU_YrTdL0YY)
- [52 - Setup Inicial da Aplicação](https://youtu.be/zEl24xhPwl8)
- [53 - JSON Server](https://youtu.be/ZQpxQuNMXfs)
- [54 - Componente Task](https://youtu.be/btkS7JHp8fk)
- [55 - CSS do Componente Task](https://youtu.be/mv8wmtDSHVY)
- [56 - Componente ToDo - Cabeçalho](https://youtu.be/mPlSwF-qKH0)
- [57 - CSS do Componente ToDo - Cabeçalho](https://youtu.be/KE63W2yCsS8)
- [58- Listar Tarefas](https://youtu.be/CwbQ6gXKGQs)
- [59 - Adicionar nova Tarefa](https://youtu.be/v3ZKv6Zjoek)
- [60 - Editando a Tarefa (parte 1)](https://youtu.be/WIEm6K0mKMY)
- [61 - Editando a Tarefa (parte 2)](https://youtu.be/e1oSnaSyNCc)
- [62 - Alterando o Status da Tarefa](https://youtu.be/dc0u2S_ZKuI)
- [63 - Deletando uma tarefa](https://youtu.be/jgINeev5y18)
- [64 - CSS das Inputs e Botões](https://youtu.be/FS9rwwk0CaE)
- [65 - UseRef - Foco em inputs](https://youtu.be/-eOajE5VG_4)
- [66 - Finalização do Módulo e Exercício](https://youtu.be/09XK2JRW-rs)

.

## Anotações

Como essas aulas são práticas não vai ter anotações de coisas que não sejam funções ou conceitos novos explicados.

### Aula 52 - Setup Inicial da Aplicação

Como usamos icones personalizados, foi importado a biblioteca no ``index.html``:

``` html
Continua...
<head>

    <link href='https://cdn.boxicons.com/3.0.6/fonts/basic/boxicons.min.css' rel='stylesheet'>

Continua... 
```

Nessa biblioteca para usar um ícone, é oferecido o código dele no site.

### Aula 53 - JSON Server

Ele serve para simular uma API, servindo como banco de dados.

A criação dele foi feita a partir do comando no terminal `npm install -g json-server`. E depois criado um diretório para servir como repositório dos dados.

Depois de criar o arquivo **JSON** é chamado o ``json-server`` para criar o endpoint com o seguinte comando ``json-server --watch ./data/db.json --port 3001``,
a porta deve ser uma diferente a do **Vite**.

#### Endpoints

São as urls para fazer as requisições, ou seja, permite as operações **CRUD** (Create, Read, Update, Delete).

### Aula 54 - Componente Task

#### Uso da Crase

Pode ser usado a crase para colocar um operador dentro da string, exemplo o que foi usado no componente Task:

``` JSX
<div className={`task ${task.done ? 'done' : ''}`}>
<span className={`task-circle ${task.done ? 'done' : ''}`}></span>
```

### Aula 55,56,57, 58

### Aula 59 - Adicionando nova tarefa

Nesta aula foi falado como faz o `.fetch` utilizando o verbo `POST`, pois até agora foi usado apenas o verbo `GET` que vem por padrão.

``` JSX
const handleAddTask = ()=>{
    if (!newTask) return;
    const taskData = {text: newTask, done: false};
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(taskData)
    })
    .then(res=>res.json())
    .then(task=>setTasks([...tasks,task]));
    setNewTask('');
  };
```

Se for ver no `.fetch`, como vamos usar outro verbo tem que especificar ele, o `headers` é caso tenha autenticação que dai tem que ver nas políticas e fucionamento da API, senão é só especificar desta forma, o `body` é o valor que vai ser adicionado.

Depois é visto o valor resultante e atualizado a váriavel array `Tasks` utilizando do `spread`, pois essa é a forma correta de adicionar.

O `spread`, no caso `...tasks` é uma cópia que ele faz de `Tasks`, depois adicionando a `task` que foi adicionada.

#### Relembrando o que é POST

O verbo `POST` é para fazer uma chamada da API em que vai apenas...

> Enviar dados e criar novo registro ou alterar, mas principalmente registrar.

### Aula 60... 61 - Editando a Tarefa (Parte 2)

Nesta aula foi apresentado outro verbo para editar a tarefa, o `PATCH`, porque diferentemente do `PUT`, ele não altera todo o recurso, apenas altera os valores mencionados, o que é útil para o caso em questão, pois deve ser alterado apenas o texto da tarefa e não ela toda.

``` JSX
const handleEditSave = () => {
    fetch(`http://localhost:3001/tasks/${editID}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: editText })
    })
      .then(res => res.json())
      .then(() => {
        setTasks(tasks.map(t => t.id === editID ? { ...t, text: editText } : t))
        setEditID(null);
        setEditText(null);
        setEditTask(false);
      })
  };
```

### Aula 62... 63 - Deletando uma tarefa

Nesta aula foi mostrado como faz a chamada usando o verbo `DELETE`.

``` JSX
const handleDelete = (id) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE'
    }).then(() => setTasks(tasks.filter(t => t.id !== id)));
  };
```
