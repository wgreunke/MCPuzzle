import React from 'react';

function App() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      color: '#333',
    },
    header: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#2c3e50',
      textAlign: 'center',
    },
    subheader: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      color: '#7f8c8d',
      textAlign: 'center',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      width: '90%',
    },
    button: {
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '1rem',
      transition: 'background-color 0.3s',
    },
  };

  const handleButtonClick = () => {
    alert('Hello from MCPuzzle React App!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MCPuzzle React App</h1>
      <p style={styles.subheader}>Welcome to your new React application</p>
      
      <div style={styles.card}>
        <h2>Hello, World!</h2>
        <p>This is a simple React application to get you started with the MCPuzzle project.</p>
        <p>You can modify this component in <code>src/App.js</code> to build your application.</p>
        <button 
          style={styles.button} 
          onClick={handleButtonClick}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
