"use client"

import { useTodos } from '@/store/todosContex'
import React from 'react'

const Todos = () => {
    const {todos} = useTodos();
  return (
   <ul>
    {todos.map((todo) =>
     (<li key={todo.id}>{todo.task}</li>)
    )}
   </ul>
  )
}

export default Todos