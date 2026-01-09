import Task from "./Task";
import "./ToDo.css";
import { useEffect, useState } from 'react';

function ToDo() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState(false); // Status da aplicação: "Estar editando"
  const [editID, setEditID] = useState(null); // Armazenar o ID da tarefa editada
  const [editText, setEditText] = useState(''); // Armazenar o texto da tarefa editada

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const doneCount = tasks.filter(t => t.done).length;

  const handleAddTask = () => {
    if (!newTask) return;
    const taskData = { text: newTask, done: false };
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData)
    })
      .then(res => res.json())
      .then(task => setTasks([...tasks, task]));
    setNewTask('');
  };

  const handleEditTask = (id, text) => {
    setEditTask(true);
    setEditText(text);
    setEditID(id);
  };

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
        setEditText('');
        setEditTask(false);
      });
  };

  const handleToggleDone = (id, done) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !done })
    })
      .then(res => res.json())
      .then(() => setTasks(tasks.map(t => t.id === id ? { ...t, done: !done } : t)));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE'
    }).then(() => setTasks(tasks.filter(t => t.id !== id)));
  };

  return (
    <div className="container">
      <header>
        <input type="checkbox" checked readOnly />
        <span className="logo">ToDo App</span>
      </header>
      <div className="status-card">
        <div>
          <div className="status-title">Concluídas</div>
          <div className="status-sub">Continue assim, não desista!</div>
        </div>
        <div className="status-circle">
          <b>{doneCount} / {tasks.length}</b>
        </div>
      </div>
      {!editText ? 
      <div className="add-task">
        <label>Digite sua nova tarefa</label>
        <div className="input-row">
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Nova Tarefa" />
          <button onClick={handleAddTask}><i className='bx  bx-plus'></i></button>
        </div>
      </div>
      :
      <div className="edit-task">
        <label>Edite sua tarefa</label>
        <div className="input-row">
          <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={handleEditSave}><i className='bx  bx-check'></i></button>
        </div>
      </div>
      }
      <div>{tasks.map((task) => (<Task
        key={task.id}
        task={task}
        onEdit={() => handleEditTask(task.id, task.text)}
        onToggleDone={() => handleToggleDone(task.id, task.done)}
        onDelete={() => handleDelete(task.id)}
      />))}</div>
    </div>
  )
}

export default ToDo