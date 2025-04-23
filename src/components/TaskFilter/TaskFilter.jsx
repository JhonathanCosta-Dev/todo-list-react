import './TaskFilter.css';

function TaskFilter({ filter, setFilter }) {
  return (
    <div>
    <div className="task-filter">
      <button onClick={() => setFilter('all')}>Todas</button>
      <button onClick={() => setFilter('pending')}>Pendentes</button>
      <button onClick={() => setFilter('completed')}>Concluídas</button>
       </div>
       <div className='task-filter-category'>
       <button onClick={() => setFilter("Pessoal")}>Pessoal</button>
<button onClick={() => setFilter("Trabalho")}>Trabalho</button>
<button onClick={() => setFilter("Estudos")}>Estudos</button>
<button onClick={() => setFilter("Outros")}>Outros</button>

        </div>
        </div>
  );
  
}

export default TaskFilter;
