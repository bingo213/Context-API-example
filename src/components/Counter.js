import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

function Counter() {
  const { count, setCount } = useContext(AppContext);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <h5>Count: {count}</h5>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
