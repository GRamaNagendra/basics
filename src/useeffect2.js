import React, { useState, useEffect } from 'react';

function CombinedEffectsComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // 1. Effect that runs on every render
  useEffect(() => {
    console.log('Component rendered');
  });

  // 2. Effect that runs only once (on mount)
  useEffect(() => {
    console.log('Component mounted');
    
    // Simulating data fetch
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
    
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // 3. Effect that runs only when count changes
  useEffect(() => {
    if (count > 5) {
      console.log('Count is greater than 5');
    }
  }, [count]);

  return (
    <div>
      <p>Component demonstrating multiple useEffect types</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      {data ? (
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default CombinedEffectsComponent;
