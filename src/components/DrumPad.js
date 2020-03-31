import React from 'react';

function DrumPad({ index, binding, source }) {
    const playSound = () => {
        const sound = document.getElementById(binding);
        sound.currentTime = 0;
        sound.play();
    }
    return (
        <div className="drum-pad">
            <audio id={binding} className="clip" src={source}></audio>
            <button onClick={playSound}>{binding.toUpperCase()}</button>
        </div>
    );
}
 
export default DrumPad;