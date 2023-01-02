import { useState } from 'react';
import AddTask from '../../components/challenge5/Form/AddTask';
import ListTask from '../../components/challenge5/ListTask/ListTask';

export default function Challenge5() {
  const [listTask, setListTask] = useState([]);

  function addTask(task) {
    console.log(listTask);
    setListTask([...listTask, { ...task, id: self.crypto.randomUUID() }]);
  }

  function modifyListTask(newTask) {
    setListTask(newTask);
  }

  return (
    <div>
      <ListTask lists={listTask} modify={modifyListTask} />
      <AddTask create={addTask} />
    </div>
  );
}
