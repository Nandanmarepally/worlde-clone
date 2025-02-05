export const checkGuess = (guess, target) => {
    return guess.split("").map((letter, index) => {
      if (letter === target[index]) return { letter, status: "correct" };  // Green
      if (target.includes(letter)) return { letter, status: "present" };  // Yellow
      return { letter, status: "absent" };  // Gray
    });
  };
  