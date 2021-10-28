import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState('⭐️');

  const handleIncrement = () => {
    if (count === '⭐️⭐️⭐️⭐️') {
      return;
    }
    setCount((prevCount) => prevCount + '⭐️');
  };

  return (
    <div>
      <div>
        <button className="star-button" onClick={handleIncrement}>
          Add a ⭐️
        </button>
        {count}
      </div>
      <button className="star-button" onClick={() => setCount('')}>
        Reset your rating 🔄
      </button>
    </div>
  );
}

export default Counter;
