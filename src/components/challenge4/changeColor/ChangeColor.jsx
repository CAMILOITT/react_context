import { useState } from 'react';

export default function ChangeColor() {
  const [intervalId, setIntervalId] = useState(null);
  const [color, setColor] = useState('gray');

  const styleComponent = {
    width: '200px',
    height: '200px',
    background: color,
    borderRadius: '20px',
  };

  function changeColor() {
    const changeId = setInterval(() => {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      setColor(`rgb(${red},${green},${blue})`);
    }, 300);
    setIntervalId(changeId);
  }

  function stopChangeColor() {
    clearInterval(intervalId);
  }

  return (
    <div>
      <div
        className="containerChangeColor"
        style={styleComponent}
        onMouseOver={changeColor}
        onMouseLeave={stopChangeColor}
        onDoubleClick={stopChangeColor}
      ></div>
      <p style={{ fontWeight: 'bold', marginBlockStart: '15px' }}>
        color: {color}
      </p>
    </div>
  );
}
