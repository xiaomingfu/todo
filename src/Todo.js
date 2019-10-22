import React from "react";
import ListItem from "@material-ui/core/listItem";
import ListItemText from "@material-ui/core/listItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditForm from "./EditForm";
import useToggleState from "./hook/useToggleState";
function Todo({ id, todo, completed, removeTodo, toggleTodo, editTodo, task }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <>
          <EditForm
            editTodo={editTodo}
            id={id}
            task={task}
            toggleEditForm={toggle}
          />
        </>
      ) : (
        <>
          <Checkbox
            color="primary"
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          ></Checkbox>
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {todo}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton arial-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton arial-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
export default Todo;
