import React, { useState } from 'react';
import Test from './test';
import NYTPuzzleGame from './NYTPuzzleGame';
import Puzzle from './Puzzle';

const ComponentList = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const components = [
    { name: 'Test', component: <Test /> },
    { name: 'NYT Puzzle Game', component: <NYTPuzzleGame /> },
    { name: 'Puzzle', component: <Puzzle /> }
  ];

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    list: {
      listStyle: 'none',
      padding: 0
    },
    listItem: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    listItemHover: {
      backgroundColor: '#e0e0e0'
    },
    componentContainer: {
      marginTop: '20px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Available Components</h2>
      <ul style={styles.list}>
        {components.map((comp, index) => (
          <li
            key={index}
            style={styles.listItem}
            onClick={() => setSelectedComponent(comp.component)}
          >
            {comp.name}
          </li>
        ))}
      </ul>

      {selectedComponent && (
        <div style={styles.componentContainer}>
          <h3>Selected Component</h3>
          {selectedComponent}
        </div>
      )}
    </div>
  );
};

export default ComponentList; 