

import "./Todo.css";

import React,{useState} from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { setLocalStorageTodoData, getLocalStorageTodoData } from "./TodoLocalStorage";



function Todo() {

    
    const [task,setTask] = useState(()=>{
        return getLocalStorageTodoData();
    });
    

    const handleFormSubmit = (inputValue) => {
        const {id,content,checked} = inputValue;
        if(!content) return;

        const ifTodoContentMatched=task.find((curTask)=>{
            return curTask.content === content;
        });
        if(ifTodoContentMatched){
            alert("Todo already exists");
            return;
        }
        setTask((prev)=>{
            
            return [{id,content,checked},...prev];       // if key and 
        })

        
        
    }
    // add data to local storage
    setLocalStorageTodoData(task);

    

   // handle delete todo
   const handleDeleteTodo=(value)=>{
        console.log(value);
        const updatedTask=task.filter((curTask)=>{
            return curTask.content !== value;
        })
        setTask(updatedTask);

   }
   const handleClearTodoData=()=>{
        setTask([]);
   }

   const handleCheckedTodo=(content)=>{
    console.log(content);

    const updatedTask=task.map((curTask)=>{

        if(curTask.content === content){
            
            return {...curTask,checked:!(curTask.checked)};
        }else{
        return curTask;
        } 
   })
   setTask(updatedTask);
};


    return (
        <section className="todo-container">
            <header>
                <h1>
                    Todo List
                </h1>
                <TodoDate />
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask)=>{
                            return (
                                <TodoList
                                 key={curTask.id}
                                  data={curTask.content} 
                                  onHandleDeleteTodo={handleDeleteTodo}
                                  onHandleCheckedTodo={()=>handleCheckedTodo(curTask.content)} checked={curTask.checked}/>
                                 
                             )
                        })
                    }
                </ul>
            </section>
            <section >
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    );
}



export default Todo;