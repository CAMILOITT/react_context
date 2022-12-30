import './ComponentB.css';
import { useRef, useState } from 'react';

export default function ComponentB({ newContact }) {
  const [contactConnect, setContactConnect] = useState(newContact.connect);
  const isConnect = useRef();

  function handleClick() {
    if (!contactConnect) {
      setContactConnect(true);
    } else {
      setContactConnect(false);
    }
    isConnect.current.classList.toggle('state__contact-online');

    isConnect.current.classList.toggle('state__contact-offline');
  }

  return (
    <div className="target">
      <h1 className="target__fullName">
          {newContact.name} {newContact.lastName}
      </h1>
      <p className="target__email">email: {newContact.email}</p>
      <p className="target__state">
        estado:
        <span className="state__contact state__contact-online" ref={isConnect}>
          {contactConnect ? ' Contacto En Línea' : ' Contacto No Disponible'}
        </span>
      </p>
      <button onClick={handleClick} className="target__btn">
        dame un click
      </button>
    </div>
  );
}

// ComponentB.propTypes = {
//   contact: PropType.instanceOf(Contact),
// };
