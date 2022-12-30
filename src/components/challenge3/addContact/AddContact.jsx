import { useRef } from 'react';

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
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="name" id="inputName" ref={inputName} required />
      <input
        type="text"
        name="lastName"
        id="inputLastName"
        ref={inputLastName}
      />
      <input
        type="email"
        name="email"
        id="inputEmail"
        ref={inputEmail}
        required
      />
      <input
        type="checkbox"
        name="connect"
        id="inputConnect"
        ref={inputConnect}
      />
      <button>agregar</button>
    </form>
  );
}
