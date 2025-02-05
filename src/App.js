import React, { useState } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import { getRandomWord } from "./utils/words";
import "./styles/styles.css";


const App = () => {
  const [targetWord, setTargetWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("");

  const handleGuess = (letter) => {
    if (guesses.length >= 6 || status) return;
    
    let newGuess = guesses.length ? guesses[guesses.length - 1] + letter : letter;
    
    if (newGuess.length === 5) {
      if (newGuess === targetWord) {
        setStatus("🎉 You Won!");
      } else if (guesses.length === 5) {
        setStatus(`❌ Game Over! Word was "${targetWord}"`);
      }
      setGuesses([...guesses, newGuess]);
    }
  };

  const resetGame = () => {
    setTargetWord(getRandomWord());
    setGuesses([]);
    setStatus("");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Header />
      <Grid guesses={guesses} target={targetWord} />
      <Keyboard onKeyPress={handleGuess} />
      <GameStatus status={status} />
      <button onClick={resetGame} className="mt-4 p-2 bg-blue-500 text-white rounded">
        New Game
      </button>
    </div>
  );
};

export default App;
