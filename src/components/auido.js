import React, {useRef, useState} from 'react';

const Auido = () => {
    const [active, setActive] = useState(1);
    const audioRef = useRef();
    const handlePlay = () => {
        setActive(2);
        audioRef.current.play();
    }

    const handlePause = () => {
        setActive(1);
        audioRef.current.pause();
    }
    const handleStop = () => {
        setActive(1);
        audioRef.current.load();
    }
    return (
        <div className='audio'>
            <audio ref={audioRef}  controls
                   src={'../../asiya_-_nu-che-ty-takoy-horoshiy.mp3'}>
            </audio>
            {active === 1 ? <button onClick={handlePlay}>PLAY</button>
                :
                null
            }
            {active === 2 ?
                <>
                    <button onClick={handleStop}>STOP</button>
                    <button onClick={handlePause}>PAUSE</button>
                </>
                :
                null
            }
        </div>
    );
};

export default Auido;