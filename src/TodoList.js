import React, { useContext } from "react";
import Divider from "@material-ui/core/divider";
import List from "@material-ui/core/list";
import Paper from "@material-ui/core/paper";

import Todo from "./Todo";
import { TodosContext } from "./context/todos.context";

function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo {...todo} todo={todo.task} key={todo.id} />
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
