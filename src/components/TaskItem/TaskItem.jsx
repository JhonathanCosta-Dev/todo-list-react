import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete,onEdit }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Categoria: {task.category}</p>
      <div>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Desmarcar' : 'Concluir'}
        </button>
        <button onClick={() => onDelete(task.id)}>Excluir</button>
        <button onClick={() => onEdit(task)}>Editar</button>
      </div>
    </div>
  );
}

export default TaskItem;
