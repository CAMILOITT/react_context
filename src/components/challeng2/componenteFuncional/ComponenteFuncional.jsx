import { useState } from 'react';

export default function ComponenteFuncional() {
  const [time, setTime] = useState(new Date());
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Martin');
  const [lastName, setLastName] = useState('San Jose');

  useEffect(() => {
    const timeID = setInterval(() => {
      tick();
    }, 1000);
    
    return () => {
      clearInterval(timeID);
    };
    
  }, []);

  function tick() {
    setTime(new Date());
    setAge((age) => age + 1);
  }

  return (
    <div>
      <h2>{time}</h2>
      <h3>
        {name} {lastName}
      </h3>
      <h1>{age}</h1>
    </div>
  );
}
