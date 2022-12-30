import ComponentB from './componentB/ComponentB';
import Contact from './Contact';

export default function ComponentA() {
  const defaultContact = new Contact(
    'Camilo',
    'Torres',
    'camilo@email.com',
    false
  );
  return (
    <div>
      <ComponentB newContact={defaultContact} />
    </div>
  );
}
