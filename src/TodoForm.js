import React from "react";
import Paper from "@material-ui/core/paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hook/useInputState";
function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  };
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <h1>{value}</h1>
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}
export default TodoForm;
