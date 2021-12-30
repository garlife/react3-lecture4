import React, { useState } from 'react';
import './App.css';
import Clicker from './Clicker';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        {count}
      </button>
      <Clicker />
    </div>
  );
}

export default App;
