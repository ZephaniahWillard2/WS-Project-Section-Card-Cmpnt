import React, { useState } from 'react';
import '../App.css'; 

const ReSizeTextArea = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <textarea
      className={`textarea ${isFocused ? 'textarea-focused' : ''}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    ></textarea>
  );
};

export default ReSizeTextArea;
