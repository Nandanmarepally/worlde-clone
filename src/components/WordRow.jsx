import React from "react";
import { checkGuess } from "../utils/helpers";
import "../styles/styles.css";


const WordRow = ({ word, target }) => {
  const result = checkGuess(word, target);

  return (
    <div className="flex space-x-2">
      {result.map((item, index) => (
        <span key={index} className={`p-2 w-10 h-10 text-center text-white rounded ${
          item.status === "correct" ? "bg-green-500" : 
          item.status === "present" ? "bg-yellow-500" : "bg-gray-500"
        }`}>
          {item.letter}
        </span>
      ))}
    </div>
  );
};

export default WordRow;
