import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import drumkit from './drumkit.js';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        {drumkit.map((val, index) => <DrumPad 
        name={drumkit[index].name}
        binding={drumkit[index].binding}
        source={drumkit[index].source}
        />)}
      </div>
    </div>
  );
}

export default App;
