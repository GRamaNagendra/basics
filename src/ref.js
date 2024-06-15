import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  // Create a ref using useRef
  const inputEl = useRef(null);

  // Function to focus the input element
  const onButtonClick = () => {
    // Access the .current property of the ref object
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

export default TextInputWithFocusButton;
