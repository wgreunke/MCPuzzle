import React from 'react';

const Puzzle = () => {
const [pieces, setPieces] = React.useState([...Array(9).keys()]); // Example for a 3x3 puzzle

const shufflePieces = () => {
const shuffled = [...pieces].sort(() => Math.random() - 0.5);
setPieces(shuffled);
};

const styles = {
puzzleGrid: {
display: 'grid',
gridTemplateColumns: 'repeat(3, 100px)',
gap: '5px',
marginTop: '20px'
},
puzzlePiece: {
width: '100px',
height: '100px',
backgroundColor: 'lightblue',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
fontSize: '24px',
cursor: 'pointer',
transition: 'background-color 0.2s'
},
button: {
padding: '10px 20px',
fontSize: '16px',
backgroundColor: '#4CAF50',
color: 'white',
border: 'none',
borderRadius: '4px',
cursor: 'pointer'
}
};

return (
<div>
<button style={styles.button} onClick={shufflePieces}>Shuffle</button>
<div style={styles.puzzleGrid}>
{pieces.map(piece => (
<div key={piece} style={styles.puzzlePiece}>
{piece}
</div>
))}
</div>
</div>
);
};

export default Puzzle;
