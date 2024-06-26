import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './contexts'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) =>{
    // here we create an array yo create a new todo along with it to add previous todo
    setTodos((prev) => [{i:Date.now(),...todo},...prev])
  }

  const updateTodo =(id,todo) =>{
    // here we iterate throgh the loop and find the id that is passed in updateTodo tif present then update if not the keep as it is
    setTodos((prev) =>prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo  = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete= (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo  === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  //it may happens that there are some todos present previously so we also want to load it to do that we are ussing useEffect
  // also we are going to use local Storage here
  useEffect(() => {
    const todos =JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length> 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  

  

  return (
   <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
          <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
   </Todoprovider>
  )
}

export default App
