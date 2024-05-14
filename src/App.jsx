import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "title 1", 
      description: "description 1",
    },
    {
      title: "title 2",
      description: "description 2"
    }
]);

  return (
    <div>{
      todos.map((todo)=>{
        // return <Todo key={todo.title} todo={todo} />
        return (
          <>
          <div className='Card'>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          </div>
    </>
        )
      })}
    </div>
  )
}

export default App
