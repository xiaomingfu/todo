import React, { useContext } from "react";
import ListItem from "@material-ui/core/listItem";
import ListItemText from "@material-ui/core/listItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditForm from "./EditForm";
import useToggleState from "./hook/useToggleState";
import { TodosContext } from "./context/todos.context";

function Todo({ id, todo, completed, task }) {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <>
          <EditForm id={id} task={task} toggleEditForm={toggle} />
        </>
      ) : (
        <>
          <Checkbox
            color="primary"
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          ></Checkbox>
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {todo}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              arial-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
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
