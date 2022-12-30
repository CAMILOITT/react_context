export default function ListContact({ listContacts, list, modify }) {
  function handleChangeConnect(key) {
    const newList = listContacts;
    const contact = newList.find((contact) => contact.id === key);
    const positionContact = newList.indexOf(contact);
    contact.connect ? (contact.connect = false) : (contact.connect = true);
    newList[positionContact] = contact;
    console.log(listContacts);
    modify(newList);
  }
  function handleDelete(key) {
    const newList = listContacts.filter((contact) => contact.id !== key);
    list(newList);
  }
  return (
    <ul className="listContact">
      {listContacts.map((contact) => (
        <li key={contact.id} className="listContact__userContact">
          <h2 className="userContact__fullName">
            {contact.name} {contact.lastName}
          </h2>
          <p className="userContact__email">{contact.email}</p>
          <p className="userContact__connect">
            {contact.connect ? 'conectado' : 'desconectado'}
          </p>
          <button
            onClick={() => handleChangeConnect(contact.id)}
            className="userContact__btn userContact__btn-connect"
          >
            {!contact.connect ? 'conectar' : 'desconectar'}
          </button>
          <button
            onClick={() => handleDelete(contact.id)}
            className="userContact__btn userContact__btn-delete"
          >
            eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}
