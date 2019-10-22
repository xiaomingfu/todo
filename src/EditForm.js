import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hook/useInputState";
function EditForm({ editTodo, id, task, toggleEditForm }) {
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
