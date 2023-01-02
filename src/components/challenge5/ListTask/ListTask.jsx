import './ListTask.css';

export default function ListTask({ lists, modify }) {
  function deleteTask(key) {
    const newList = lists.filter((list) => list.id !== key);
    modify(newList);
  }

  return (
    <ul className="listTask">
      {lists.map((list) => (
        <li key={list.id} className="listTask__task">
          <h3 className="task__title">{list.title}</h3>
          <p className="task__body"> {list.body}</p>
          <button onClick={() => deleteTask(list.id)} className="task__btn">
            eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}
