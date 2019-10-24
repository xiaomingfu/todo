import React, { createContext, useReducer } from "react";
import useTodoState from "../hook/useTodoState";
import todoReducer from "../reducer/todo.reducer";
const defaultTodos = [
  { id: 1, task: "eat", completed: false },
  { id: 2, task: "coding", completed: true }
];
export const TodosContext = createContext();
export const DispatchContext = createContext();
export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
