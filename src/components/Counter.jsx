import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState('⭐️');

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + '⭐️');
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - '⭐️');
  };
  return (
    <div>
      <div>
        <button onClick={handleIncrement}>Add a ⭐️</button>⭐️{count}
      </div>
      <button onClick={() => setCount('')}>Reset ⭐️</button>
    </div>
  );
}

export default Counter;
