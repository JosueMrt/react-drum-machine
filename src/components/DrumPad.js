import React from 'react';

function DrumPad({ name, binding, source, setDisplay }) {
    const playSound = () => {
        const sound = document.getElementById(binding);
        sound.currentTime = 0;
        setDisplay(name);
        sound.play();
    }
    const handleKeyDown = (e) => {
        if(e.key.toUpperCase() == binding) playSound();
    }
    React.useEffect(() => document.addEventListener('keydown', handleKeyDown));
    return (
        <div className="drum-pad" id={name}>      
            <button onClick={playSound}>
                <audio id={binding} className="clip" src={source}></audio>
                {binding}
            </button>
        </div>
    );
}
 
export default DrumPad;