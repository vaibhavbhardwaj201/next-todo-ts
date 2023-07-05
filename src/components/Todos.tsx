"use client"

import { useTodos } from '@/store/todosContex'
import React from 'react'
import {useSearchParams} from 'next/navigation'

const Todos = () => {
    const {todos, toggleTodoAsCompleted, handleTodoDelete} = useTodos();
    const searchParams = useSearchParams()
    const param = searchParams.get('todos')

    let filterTodos = todos;

    if(param === 'active') {
      filterTodos = filterTodos.filter(task => !task.completed)
    } else if(param === 'completed') {
      filterTodos = filterTodos.filter(task => task.completed)
    }


  return (
   <ul>
    {filterTodos.map((todo) => {
     return <li key={todo.id}>
        <input type="checkbox"  id={`todo-${todo.id}`} checked={todo.completed} onChange={() => {toggleTodoAsCompleted(todo.id)}} />
        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
        {todo.completed && (<button type="button" onClick={() => {handleTodoDelete(todo.id)}}>Delete</button>)}
      </li> }
    )}
   </ul>
  )
}

export default Todos