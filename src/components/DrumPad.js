import React from 'react';

function DrumPad({ name, binding, source }) {
    const playSound = () => {
        const sound = document.getElementById(binding);
        sound.currentTime = 0;
        sound.play();
    }
    return (
        <div className="drum-pad" id={name}>
            <audio id={binding} className="clip" src={source}></audio>
            <button onClick={playSound}>{binding}</button>
        </div>
    );
}
 
export default DrumPad;