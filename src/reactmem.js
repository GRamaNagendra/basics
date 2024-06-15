import React from 'react';

function MyComponent({ text }) {
  console.log("Rendering MyComponent");
  return <div>{text}</div>;
}

// Applying React.memo directly in the export statement
export default React.memo(MyComponent);