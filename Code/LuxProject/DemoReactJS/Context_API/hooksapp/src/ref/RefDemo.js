import React, { useRef, useState, useEffect } from "react";

const CustomTextinput = () => {
    const [number, setNumber] = useState(0)
    const textInput = useRef();
    const focusTextInput = () => textInput.current.focus();
    const counter = useRef(number);

    useEffect(() => {
        counter.current = number;
    }, [number]);
    return (
        <>
            <input type="text" ref={textInput} />
            <button onClick={focusTextInput}>Focus the text input</button>
            <div>________________</div>
            <p> OLD Number : {counter.current}</p>

            <p> New Number : {number}</p>
            <button onClick={() => setNumber(number + 1)}>Focus the text input</button>
        </>
    );
}

export default CustomTextinput;