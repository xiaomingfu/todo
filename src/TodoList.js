import React, { useState } from "react";
import Divider from "@material-ui/core/divider";
import List from "@material-ui/core/list";

import Paper from "@material-ui/core/paper";

import Todo from "./Todo";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <>
            <Todo todo={todo.task} key={todo.id} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
