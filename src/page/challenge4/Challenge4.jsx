import AddContact from '../../components/challenge4/addContact/AddContact';
import ListContact from '../../components/challenge4/listContact/ListContact';

export default function Challenge4() {
  const [list, setList] = useState([]);

  function createContact(data) {
    setList([...list, { ...data, id: new Date() }]);
  }
  function deleteContact(newList) {
    setList(newList);
  }

  return (
    <div>
      <div>
        <h1>Contactos</h1>
      </div>
      <div>
        <ListContact contacts={list} list={createContact} />
        <AddContact contact={createContact} />
      </div>
    </div>
  );
}
