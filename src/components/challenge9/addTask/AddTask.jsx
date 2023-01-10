import { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext';

export default function AddTask() {
  const { createTask } = useContext(TodoContext);
  return (
    <form onSubmit={createTask}>
      <input type="text" name="newTask" id="task" />
      <button type="submit">+</button>
    </form>
  );
}
