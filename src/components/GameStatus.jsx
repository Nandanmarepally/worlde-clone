import React from "react";
import "../styles/styles.css";


const GameStatus = ({ status }) => {
  return status ? <h2 className="text-xl text-center">{status}</h2> : null;
};

export default GameStatus;
