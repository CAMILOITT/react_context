import ComponentB from './ComponentB';

export default function ComponentA() {
  const defaultContact = new Contact(
    'Camilo',
    'Torres',
    'camilo@email.com',
    false
  );
  return (
    <div>
      <ComponentB contact={defaultContact} />
    </div>
  );
}
