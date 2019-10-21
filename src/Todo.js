import React from "react";
import ListItem from "@material-ui/core/listItem";
import ListItemText from "@material-ui/core/listItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
function Todo({ todo, completed }) {
  return (
    <ListItem>
      <Checkbox color="primary" tabIndex={-1} checked={completed}></Checkbox>
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {todo}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton arial-label="Delete">
          <DeleteIcon />
        </IconButton>
        <IconButton arial-label="Edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
export default Todo;
