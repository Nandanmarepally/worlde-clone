import React from "react";  // import react library 
import WordRow from "./WordRow";  // Importing the WordRow component to display each guessed word

import "../styles/styles.css";  


const Grid = ({ guesses, target }) => {
  return (
    <div className="grid grid-rows-6 gap-2">
      {guesses.map((guess, i) => (  // Loops through the guesses array.
        <WordRow key={i} word={guess} target={target} /> // For each guess, it renders a WordRow component.

      ))}
    </div>
  );
};

export default Grid;
