import {createContext, useContext} from "react"

export const TodoContext = createContext({
    // create a variable name todo
    todos:[
        {
            id:1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    // now create a method and dont define them we will define them in our app.jsx file 
    addTodd: (todo) => {},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id) => {}
    
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider