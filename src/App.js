import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import drumkit from './drumkit.js';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        {drumkit.map((val, index) => <DrumPad 
        binding={drumkit[index].binding}
        source={drumkit[index].source}
        index={index}
        />)}
      </div>
    </div>
  );
}

export default App;
