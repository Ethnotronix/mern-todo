import React, { useState } from "react";

const Form = ({addTodo, list}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() === "") return;
        addTodo({id: list.length, title: inputValue, completed: false});
        setInputValue("");
    };
    return (
    <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="ui grid center aligned">
            <div className="row">
                <div className="column five wide">
                    <input 
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Add new todo" />
                </div>
                <div className="column one wide">
                    <button type="submit" className="ui button circular icon green"><i className="white plus icon"></i></button>
                </div>
            </div>
        </div>
    </form>
    );
};

export default Form;