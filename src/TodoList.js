import React from "react";
import Divider from "@material-ui/core/divider";
import List from "@material-ui/core/list";
import Paper from "@material-ui/core/paper";

import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                {...todo}
                todo={todo.task}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  }
  return null;
}

export default TodoList;
