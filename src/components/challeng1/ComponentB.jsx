import Contact from './ComponentA';
import PropType from 'prop-types';

export default function ComponentB({ contact }) {
  const [connect, setConnect] = useState(contact.connect);

  function handleClick() {
    connect ? setConnect(false) : setConnect(true);
  }

  return (
    <div>
      <h1>
        nombres: {contact.name} {contact.lastName}
      </h1>
      <p>email: {contact.email}</p>
      <p>estado: {connect ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
      <button onClick={handleClick}>dame un click</button>
    </div>
  );
}

ComponentB.propTypes = {
  contact: PropType.instanceOf(Contact),
};
