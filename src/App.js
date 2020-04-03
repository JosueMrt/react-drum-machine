import React, {useState} from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import Display from './components/Display'
import drumkit from './drumkit.js';

function App() {
  const [display, setDisplay] = useState('react drum machine');
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display-container">
          <Display display={display} />
        </div>  
        <div id="drum-pad-container">
          {drumkit.map((val, index) => <DrumPad 
          key={index}
          name={val.name}
          binding={val.binding}
          source={val.source}
          setDisplay2={setDisplay}
          />)}
        </div>
      </div>
    </div>
  );
}

export default App;
 