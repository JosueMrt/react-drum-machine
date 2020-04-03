import React from 'react';

const Display = ({ display }) => {
    return (
        <div id="display">
            <p>{display.toUpperCase()}</p>
        </div>
    );
}
 
export default Display;