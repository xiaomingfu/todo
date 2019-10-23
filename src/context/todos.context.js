import React, { createContext } from "react";
import useTodoState from "../hook/useTodoState";

const defaultTodos = [
  { id: 1, task: "eat", completed: false },
  { id: 2, task: "coding", completed: true }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
