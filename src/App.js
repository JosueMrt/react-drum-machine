import React, {useState} from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import Display from './components/Display'
import BankSwitcher from './components/BankSwitcher'
import drumkit from './drumkit.js';

function App() {
  const [display, setDisplay] = useState('react drum machine');
  const [bank, setBank] = useState(false);
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display-container">
          <Display display={display} />
        </div>  
        <BankSwitcher />
        <div id="drum-pad-container">
          {drumkit.map((val, index) => <DrumPad 
          bank={bank}
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
 