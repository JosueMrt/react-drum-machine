import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad'

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <DrumPad />
      </div>
    </div>
  );
}

export default App;
