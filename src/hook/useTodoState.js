import uuid from "uuid/v4";
import { useLocalStorageState } from "./useLocalStorageState";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      const updateTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updateTodos);
    },
    toggleTodo: todoId => {
      const updateTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updateTodos);
    },
    editTodo: (todoId, editTask) => {
      const updateTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: editTask } : todo
      );
      setTodos(updateTodos);
    }
  };
};
