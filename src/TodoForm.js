import React, { useState } from "react";
import Paper from "@material-ui/core/paper";
import TextField from "@material-ui/core/TextField";
import useInput from "./hook/useInputHook";
function TodoForm() {
  const [value, handleChange, reset] = useInput("");
  return (
    <Paper>
      <form>
        <h1>{value}</h1>
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}
export default TodoForm;
