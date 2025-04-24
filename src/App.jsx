import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import './App.css';

const initialTasks = [
  {
    id: 1,
    title: "Estudar React Hooks",
    description: "Aprender sobre useState e useEffect",
    completed: false,
    category: "Estudos"
  },
  {
    id: 2,
    title: "Fazer compras",
    description: "Comprar itens para a semana",
    completed: true,
    category: "Pessoal"
  },
  {
    id: 3,
    title: "Preparar apresentação",
    description: "Slides para a reunião de segunda-feira",
    completed: false,
    category: "Trabalho"
  }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null); // Agora a variável `editingTask` está corretamente definida aqui

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (task) => {
    if (editingTask) {
      setTasks(tasks.map(t =>
        t.id === editingTask.id
          ? { ...task, id: editingTask.id, completed: editingTask.completed }
          : t
      ));
      setEditingTask(null); // Limpa a edição após salvar
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    }
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleEditRequest = (task) => {
    setEditingTask(task);
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed;
    if (filter === 'pending') return !t.completed;
    if (['Estudos', 'Pessoal', 'Trabalho', 'Outros'].includes(filter))
      return t.category === filter;
    return true;
  });

  return (
    <div className="App">
      <h1>To do List</h1>
      <TaskForm onAdd={handleAdd} editingTask={editingTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEditRequest}
      />
    </div>
  );
}

export default App;
