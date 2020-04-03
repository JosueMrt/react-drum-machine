import React from 'react';
import Toggle from 'react-toggle';
import drumkit from '../drumkit.js';
import drumkit_2 from '../drumkit_2'
import './BankSwitcher.css'

const BankSwitcher = ({ loadedBank, setLoadedBank }) => {
    const handleSwitch = () => {
        loadedBank === drumkit ? setLoadedBank(drumkit_2) : setLoadedBank(drumkit);
    }
    return (
        <div>
            <label>
                <Toggle
                    id="toggle"
                    defaultChecked={loadedBank === drumkit_2}
                    onChange={handleSwitch}
                    icons={false}/>
            </label>
        </div>
    );
}
 
export default BankSwitcher;