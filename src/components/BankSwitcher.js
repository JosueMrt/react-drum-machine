import React from 'react';
import Toggle from 'react-toggle';
import './BankSwitcher.css'

const BankSwitcher = ({ bank }) => {
    return (
        <div>
            <label>
                <Toggle
                    id="toggle"
                    defaultChecked={bank}
                    icons={false}/>
            </label>
        </div>
    );
}
 
export default BankSwitcher;