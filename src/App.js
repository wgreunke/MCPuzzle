import React from 'react';
import ComponentList from './components/ComponentList';

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
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MCPuzzle Component Library</h1>
      <ComponentList />
    </div>
  );
}

export default App;
