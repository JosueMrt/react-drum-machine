import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import Display from './components/Display'
import drumkit from './drumkit.js';

function App() {
  const [display, setDisplay] = React.useState('');
  return (
    <div className="App">
      <div id="drum-machine">
        {drumkit.map((val, index) => <DrumPad 
        name={drumkit[index].name}
        binding={drumkit[index].binding}
        source={drumkit[index].source}
        setDisplay={setDisplay}
        />)}
        <Display display={display} />
      </div>
    </div>
  );
}

export default App;
 