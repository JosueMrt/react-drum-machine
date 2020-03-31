import React from 'react';

function DrumPad() {
    function playSound() {
            const sound = document.getElementById('q');
            console.log(sound);
            sound.currentTime = 0;
            sound.play();
    }
    return (
        <div>
            <audio id="q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"></audio>
            <button onClick={playSound}>Q</button>
        </div>
    );
}
 
export default DrumPad;