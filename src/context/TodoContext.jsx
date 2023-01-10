import { createContext, useState } from 'react';

export const TodoContext = createContext([]);

export default function TodoProvider({ children }) {
  const [listTask, setListTask] = useState([]);

  function createTask(e) {
    e.preventDefault();
    const id = new Date().getTime();
    setListTask([...listTask, { task: e.target.newTask.value, id }]);
  }

  function deleteTask(id) {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  }

  function filterTask(e) {
    const { value } = e.target;
    console.log(value);
    const newList = [...listTask];
    switch (value) {
      case 'majorToMinorCharacter':
        newList.sort((a, b) => b.task.length - a.task.length);
        break;
      case 'minorToMajorCharacter':
        newList.sort((a, b) => a.task.length - b.task.length);
        break;
      case 'beforeAdd':
        newList.sort((a, b) => b.task.id - a.task.id);
        break;
      case 'afterAdd':
        newList.sort((a, b) => a.task.id - b.task.id);
        break;
      default:
        break;
    }
    setListTask(newList);
  }

  const data = { listTask, createTask, deleteTask, filterTask };
  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
}
