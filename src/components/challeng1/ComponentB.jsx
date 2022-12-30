import Contact from './ComponentA';
import PropType from 'prop-types';

export default function ComponentB({ contact }) {
  const [connect, setConnect] = useState(false);
  return (
    <div>
      <h1>
        nombres: {contact.name} {contact.lastName}
      </h1>
      <p>email: {contact.email}</p>
      <p>estado: {contact.connect ? 'conectado' : 'desconectado'}</p>
    </div>
  );
}

ComponentB.propTypes = {
  contact: PropType.instanceOf(Contact),
};
