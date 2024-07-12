import React, { useState } from 'react';
import "../App.css";


const SquareRadioButton = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`square-radio-button ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {selected && <div className="inner-square" />}
    </div>
  );
};

export default SquareRadioButton;
