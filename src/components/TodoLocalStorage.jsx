const todoKey = "reactTodo";
export const getLocalStorageTodoData=()=>{
    const rowTodo=localStorage.getItem(todoKey);
    return JSON.parse(rowTodo) || [];
}

export const setLocalStorageTodoData=(task)=>{
    return localStorage.setItem(todoKey,JSON.stringify(task));
}