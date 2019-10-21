import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import TodoList from "./TodoList";
function TodoApp() {
  const initialTodos = [
    { id: 1, task: "learn code", complete: true },
    { id: 2, task: "take a photo", complete: false },
    { id: 1, task: "call mum", complete: true }
  ];
  const [todos, setTodos] = useState(initialTodos);
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
      <TodoList todos={todos} />
    </Paper>
  );
}
export default TodoApp;
