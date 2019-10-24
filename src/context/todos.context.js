import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hook/useLocalStorageReducer";
import todoReducer from "../reducer/todo.reducer";

const defaultTodos = [
  { id: 1, task: "eat", completed: false },
  { id: 2, task: "coding", completed: true }
];
export const TodosContext = createContext();
export const DispatchContext = createContext();
export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
