import React from "react";
import "../styles/styles.css";


const Keyboard = ({ onKeyPress }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="grid grid-cols-9 gap-2 mt-4">
      {letters.map((letter) => (
        <button 
          key={letter} 
          className="p-2 bg-gray-300 rounded"
          onClick={() => onKeyPress(letter.toLowerCase())}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
