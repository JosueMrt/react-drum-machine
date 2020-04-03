import React, {useEffect} from 'react';

function DrumPad({ name, binding, source, setDisplay2 }) {
    const playSound = () => {
        setDisplay2(name);
        const sound = document.getElementById(binding);
        sound.currentTime = 0;
        sound.play();
    }
    const handleKeyDown = (e) => {
        if(e.key.toUpperCase() === binding) playSound();
    }
    useEffect(() => document.addEventListener('keydown', handleKeyDown));
    return (
        <button className="drum-pad" id={name} onClick={playSound}>      
            <audio preload='auto' id={binding} className="clip" src={source}></audio>
            {binding}
        </button>
    );
}
 
export default DrumPad;