import React, {useRef, useState} from 'react';

const RefFocus = () => {
    const [text, setText] =useState('');
    const inputFoc = useRef(null);
    const [active, setActive] = useState(false)

    const handleFocus = () => {
        setActive(!active)
        inputFoc.current.style.color = active ? 'red' : 'green';
        inputFoc.current.focus()
    }

    return (
        <div>
            <input  onChange={(e) => setText(e.target.value)} ref={inputFoc} type="text"/>
            <button onClick={handleFocus}>focus</button>
        </div>
    );
};

export default RefFocus;