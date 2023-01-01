import { useState } from 'react';
import AddContact from '../../components/challenge3/addContact/AddContact';
import ListContact from '../../components/challenge3/listContact/ListContact';
import './Challenge3.css';

export default function Challenge3() {
  const [list, setList] = useState([]);

  function createContact(data) {
    setList([...list, { ...data, id: new Date().getTime().toLocaleString() }]);
  }
  function deleteContact(newList) {
    setList(newList);
  }
  function modifyContact(value) {
    setList(value);
  }

  return (
    <div>
      <div>
        <h1 className="titleContact">Contactos</h1>
      </div>
      <div className="containerContact">
        <ListContact
          listContacts={list}
          list={deleteContact}
          modify={modifyContact}
        />
        <AddContact contact={createContact} />
      </div>
    </div>
  );
}
