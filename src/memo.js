import React, { useState, useMemo } from 'react';

function Adder({ a, b }) {
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return a + b;
  }, [a, b]);

  return <div>{sum}</div>;
}

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={numberA}
        onChange={(e) => setNumberA(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={numberB}
        onChange={(e) => setNumberB(parseInt(e.target.value))}
      />
      <Adder a={numberA} b={numberB} />
    </div>
  );
}
