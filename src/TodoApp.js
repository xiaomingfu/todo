import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import uuid from "uuid/v4";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "learn code", completed: true },
    { id: 2, task: "take a photo", completed: false },
    { id: 3, task: "call mum", completed: true }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };
  const removeTodo = todoId => {
    const updateTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updateTodos);
  };
  const toggleTodo = todoId => {
    const updateTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateTodos);
  };
  const editTodo = (todoId, editTask) => {
    const updateTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: editTask } : todo
    );
    setTodos(updateTodos);
  };
  return (
    <Paper
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        bacgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todo List</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
