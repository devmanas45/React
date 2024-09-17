import { createContext,useContext } from "react";
export const TodoContext=createContext({
    todos: [
        {
            id: 1,
            title: "Buy milk",
            completed: false,


        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{},
    updatedTodo:(id,todo)=>{}
})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider;