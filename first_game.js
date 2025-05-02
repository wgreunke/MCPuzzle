import React, { useState } from 'react';

const letters = ['A', 'R', 'E', 'T', 'L', 'C']; // E is the center letter

const centerLetter = 'E';

const MiniWordBuilder = () => {
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    setWord(value);
  };

  const isValidWord = (w) => {
    if (w.length < 4) return 'Word too short';
    if (!w.includes(centerLetter)) return 'Must include center letter';
    for (let char of w) {
      if (!letters.includes(char)) return `Invalid letter: ${char}`;
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = isValidWord(word);
    if (validationError) {
      setError(validationError);
    } else if (guesses.includes(word)) {
      setError('Already guessed');
    } else {
      setGuesses([...guesses, word]);
      setWord('');
      setError('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🧩 Mini Word Builder</h1>
      <div className="flex justify-center mb-4 flex-wrap gap-2">
        {letters.map((letter, idx) => (
          <div
            key={idx}
            className={`w-12 h-12 flex items-center justify-center rounded-full border text-xl font-bold ${
              letter === centerLetter ? 'bg-yellow-300 border-yellow-600' : 'bg-gray-200'
            }`}
          >
            {letter}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={word}
          onChange={handleInputChange}
          placeholder="Enter word"
          className="border p-2 rounded w-full text-center text-lg"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
      <h2 className="text-lg font-semibold mb-2">Your Words:</h2>
      <ul className="text-left list-disc pl-5">
        {guesses.map((guess, idx) => (
          <li key={idx}>{guess}</li>
        ))}
      </ul>
    </div>
  );
};

export default MiniWordBuilder;
