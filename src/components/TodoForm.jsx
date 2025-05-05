import React, { useState } from 'react';
export const TodoForm = ({onAddTodo})=>{
    const [inputValue, setInputValue] = useState({});
    function handleInputChange(value) {
        setInputValue({id:value,content:value,checked:false});
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id:"",content:"",checked:false});
    }
    return (
        <section className="form">
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <input 
                                type="text" 
                                className="todo-input" 
                                autoComplete="off" 
                                value={inputValue.content}
                                onChange={(event)=> handleInputChange(event.target.value)}/>
                            </div>
                            <div className="todo-btn">
                                <button type="submit">Add Task</button>
                            </div>
                        </form>
                    </section>
    );
}