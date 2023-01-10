import { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext';

export default function ListTask() {
  const { listTask, deleteTask, filterTask } = useContext(TodoContext);
  return (
    <ul>
      <li>
        <h1>Tareas</h1>
        <select name="filterTask" id="filterTask" onChange={filterTask}>
          <option value="none">Filtrar</option>
          <option value="majorToMinorCharacter">
            mayor a menor numero de caracteres
          </option>
          <option value="minorToMajorCharacter">
            menor a mayor numero de caracteres
          </option>
          <option value="afterAdd">recientes</option>
          <option value="beforeAdd">antiguas</option>
        </select>
      </li>
      {listTask.map((task) => (
        <li key={task.id}>
          <p>{task.task}</p>
          <button onClick={() => deleteTask(task.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
