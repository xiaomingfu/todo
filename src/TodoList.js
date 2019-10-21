import React, { useState } from "react";
import Divider from "@material-ui/core/divider";
import List from "@material-ui/core/list";
import Paper from "@material-ui/core/paper";

import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <Todo
              id={todo.id}
              todo={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
