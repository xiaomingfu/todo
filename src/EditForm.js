import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hook/useInputState";
import { TodosContext } from "./context/todos.context";
function EditForm({ id, task, toggleEditForm }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLift: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        fullWidth
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}

export default EditForm;
