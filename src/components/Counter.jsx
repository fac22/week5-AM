import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState('⭐️');

  //if star count already five prevent user from adding more
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
