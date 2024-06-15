import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Memoizing the increment function using useCallback with dependencies
  const incrementWithDependency = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [setCount]);

  // Memoizing the increment function using useCallback without dependencies
  const incrementWithoutDependency = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Increment button with dependency */}
      <button onClick={incrementWithDependency}>Increment (with Dependency)</button>
      {/* Increment button without dependency */}
      <button onClick={incrementWithoutDependency}>Increment (without Dependency)</button>
    </div>
  );
}

export default Counter;
