import React from 'react';

function MyComponent({ text }) {
  console.log("Rendering MyComponent");
  return <div>{text}</div>;
}

// Applying React.memo separately
const MemoizedComponent = React.memo(MyComponent);

export default MemoizedComponent;
