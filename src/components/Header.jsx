import React, { useState } from "react";
import "../styles/styles.css";


const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`p-4 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-bold">Wordle Clone</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 bg-gray-500 text-white rounded">
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;
