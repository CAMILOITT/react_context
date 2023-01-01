import { useRef } from 'react';
import './AddContact.css';

export default function AddContact({ contact }) {
  const inputName = useRef('');
  const inputLastName = useRef('');
  const inputEmail = useRef('');
  const inputConnect = useRef(false);

  function handleOnSubmit(e) {
    e.preventDefault();
    contact({
      name: inputName.current.value,
      lastName: inputLastName.current.value,
      email: inputEmail.current.value,
      connect: inputConnect.current.checked,
    });
    inputName.current.value = '';
    inputLastName.current.value = '';
    inputEmail.current.value = '';
    inputConnect.current.value = '';
  }

  return (
    <form onSubmit={handleOnSubmit} className="addContact">
      <div className="addContact__containerInput">
        <input
          type="text"
          name="name"
          id="inputName"
          ref={inputName}
          required
          className="containerInput__input"
        />
        <input
          type="text"
          name="lastName"
          id="inputLastName"
          ref={inputLastName}
          className="containerInput__input"
        />
        <input
          type="email"
          name="email"
          id="inputEmail"
          ref={inputEmail}
          required
          className="containerInput__input"
        />
        <label htmlFor="inputConnect" className="containerInput__checkbox">
          <input
            type="checkbox"
            name="connect"
            id="inputConnect"
            ref={inputConnect}
            className="checkbox__check"
          />
          activo
        </label>
      </div>
      <button className="addContact__btn">agregar</button>
    </form>
  );
}
