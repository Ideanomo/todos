import React, { useState, useEffect, useRef } from "react";

const Form = ({ onEnterTodo = f => f }) => {
    const [input, setInput] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input !== "") {
            onEnterTodo({
                id: Math.floor(Math.random() * 10000),
                value: input
            });
        }

        // Clear input box
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    // Focus input on first render
    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add todo"
                    onChange={handleChange}
                    value={input}
                    ref={inputRef}
                />
                <button data-testid="submit">Add</button>
            </form>
        </>
    );
};

export default Form;