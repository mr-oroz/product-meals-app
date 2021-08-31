import React, {useRef, useState} from 'react';

const Auth = () => {
    const [input, setInput] = useState({key1: '', key2: ''})
    const textInput = useRef(null);

    const handleKeUp = (e) => {
        if (e.code === 'Enter' || e.target.value.length > 5) {
            textInput.current.focus()
        }
    }

    const handleBlur = (e, m) => {
        const newInput = {
            key1 : 'key1' === m ? (e === '' ? 'red' : 'green') : input.key1,
            key2 : 'key2' === m ? (e === '' ? 'red' : 'green') : input.key2
        }
        setInput(newInput)
    }

    return (
        <div>
            <input
                type='text'
                onKeyUp={(e) => handleKeUp(e)}
                className={input.key1}
                onBlur={(e) => handleBlur(e.target.value, 'key1')}
            />
            <input
                ref={textInput}
                className={input.key2}
                onBlur={(e) => handleBlur(e.target.value, 'key2')}
                type='password'/>
            <button>Click</button>
        </div>
    );
};

export default Auth;