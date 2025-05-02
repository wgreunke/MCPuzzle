import React, { useState } from 'react';

const letters = ['A', 'E', 'R', 'T', 'L', 'N', 'S']; // Sample letters
const centerLetter = 'E';
const validWords = ['learn', 'leaner', 'stealer', 'lateners', 'relent', 'earnest', 'alert', 'later', 'tense']; // Example valid words

const NYTPuzzleGame = () => {
  const [input, setInput] = useState('');
  const [foundWords, setFoundWords] = useState([]);
  const [message, setMessage] = useState('');

  const isValidWord = (word) => {
    if (word.length < 4) return false;
    if (!word.includes(centerLetter)) return false;
    if (!validWords.includes(word)) return false;
    if (foundWords.includes(word)) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const word = input.toLowerCase();
    if (isValidWord(word)) {
      setFoundWords([...foundWords, word]);
      setMessage('✅ Good job!');
    } else {
      setMessage('❌ Invalid word.');
    }
    setInput('');
  };

  return (
    <div style={styles.container}>
      <h2>NYT Word Puzzle</h2>
      <p>Use the letters below to create words using at least 4 letters and always including <b>{centerLetter}</b>.</p>
      <div style={styles.letters}>
        {letters.map((l, i) => (
          <span key={i} style={l === centerLetter ? styles.centerLetter : styles.letter}>
            {l}
          </span>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter word"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      <p>{message}</p>
      <div>
        <h4>Found Words ({foundWords.length})</h4>
        <ul>
          {foundWords.map((word, idx) => (
            <li key={idx}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
  },
  letters: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  letter: {
    padding: '10px',
    margin: '5px',
    fontSize: '24px',
    border: '1px solid #aaa',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    backgroundColor: '#fff',
  },
  centerLetter: {
    padding: '10px',
    margin: '5px',
    fontSize: '24px',
    border: '2px solid #000',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    backgroundColor: '#ffeb3b',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '8px 12px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default NYTPuzzleGame;
