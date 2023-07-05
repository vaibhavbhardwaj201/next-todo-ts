"use client"

import { useTodos } from "@/store/todosContex"
import { FormEvent, useState } from "react"

const AddTodo = () => {

    const [todo, setTodo] = useState("")
    const {handleAddTodo} = useTodos()

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddTodo(todo)
        setTodo("")
    }

  return (
    <form onSubmit={handleFormSubmit}>
        <input 
            type="text" 
            placeholder='Enter task...'
            onChange={event => setTodo(event.target.value)}
            value={todo} />

        <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTodo