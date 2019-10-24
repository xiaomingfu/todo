import React, { useContext } from "react";
import Paper from "@material-ui/core/paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hook/useInputState";
import { TodosContext } from "./context/todos.context";

function TodoForm() {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
    reset();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <h1>{value}</h1>
        <TextField
          value={value}
          onChange={handleChange}
          label="add New Todo"
          margin="normal"
          fullWidth
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
