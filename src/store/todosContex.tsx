"use client"

import react, { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    toggleTodoAsCompleted: (id: string) => void;
    handleTodoDelete: (id: string) => void;
}


const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = (task: string) => {

        setTodos(prev => {
            const newTodo: Todo[] = [{
                id: Math.random().toString(),
                task,
                completed: false,
                createdAt: new Date()
            }, ...prev]

            console.log(newTodo);
            return newTodo;
        })
        
    }

    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            const newTodo = prev.map((task) => {
                if(task.id === id) {
                    return {...task, completed: !task.completed}
                }
                return task
            })
            return newTodo
        })
    }

    const handleTodoDelete = (id: string) => {
        setTodos((prev) => {
            const newTodo = prev.filter((task) => (task.id !== id))
            return newTodo
        })
    }

    return (
        <todosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted, handleTodoDelete}}>
            {children}
        </todosContext.Provider>
    )

}

export const useTodos = () => {
    const todosContextValue = useContext(todosContext);
    if(!todosContextValue) {
        throw new Error('Error in todosContextValue');
    }
    return todosContextValue;
}