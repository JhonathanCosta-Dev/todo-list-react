import { useState } from 'react';
import './TaskForm.css';
import { useEffect } from 'react';


function TaskForm({ onAdd, editingTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Estudos');
  
    useEffect(() => {
      if (editingTask) {
        setTitle(editingTask.title);
        setDescription(editingTask.description);
        setCategory(editingTask.category);
      }
    }, [editingTask]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description, category });
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
        <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Estudos">Estudos</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Outros">Outros</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;