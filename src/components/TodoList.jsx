import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import "./Todo.css";

export const TodoList=({checked,onHandleCheckedTodo,data,onHandleDeleteTodo})=>{
    console.log(checked)
    return (
        <li  className="todo-item">
                                    <span className={checked?"checkList":"notCheckList"}>{data}</span>
                                    <button className="check-btn" onClick={()=> onHandleCheckedTodo(data)}>
                                    <FaCheck />
                                    </button>
                                    <button className="delete-btn" onClick={()=> onHandleDeleteTodo(data)}><RiDeleteBin2Fill /></button>


         </li>
    );
}