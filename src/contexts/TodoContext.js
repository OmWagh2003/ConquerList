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
})
najdonau
export const useTodo = () =>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider