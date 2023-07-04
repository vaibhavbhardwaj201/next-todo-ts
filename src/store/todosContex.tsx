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
}


const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = (task: string) => {

        setTodos(prev => {
            const newTodo = [{
                id: Math.random().toString(),
                task,
                completed: false,
                createdAt: new Date()
            }, ...prev]

            console.log(newTodo);
            return newTodo;
        })
        
    }

    return (
        <todosContext.Provider value={{todos, handleAddTodo}}>
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