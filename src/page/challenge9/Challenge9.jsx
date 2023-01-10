import AddTask from '../../components/challenge9/addTask/AddTask';
import ListTask from '../../components/challenge9/listTask/ListTask';
import TodoProvider from '../../context/TodoContext';

export default function Challenge9() {
  return (
    <TodoProvider>
      <div>
        <ListTask />
        <AddTask />
      </div>
    </TodoProvider>
  );
}
