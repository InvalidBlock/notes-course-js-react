import "./Task.css";

function Task({ task, onDelete, onToggleDone, onEdit }) {

    return (
        <div className={`task ${task.done ? 'done' : ''}`}>
            <span className={`task-circle ${task.done ? 'done' : ''}`} onClick={onToggleDone}></span>
            <span className="task-text" onClick={onToggleDone}>{task.done ? <s>{task.text}</s> : task.text}</span>
            <span className="actions">
                <button className="edit-btn" onClick={onEdit}><i className='bx  bx-edit'></i> </button>
                <button className="delete-btn" onClick={onDelete}><i className='bx  bx-trash'></i> </button>
            </span>
        </div>
    )
}

export default Task