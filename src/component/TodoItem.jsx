import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTasksAction, removeTaskAction } from "../store/todoReducer";

export const TodoItem = (props) => {
  const { id, title } = props;
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(title);

  const removeTask = (task) => {
    dispatch(removeTaskAction(task.id));
  };

  const editTask = () => {
    setEditing(true);
  };

  const handleEditingDone = (e) => {
    if (e.key === "Enter") {
      dispatch(editTasksAction({ newText: updateInput, id }));
      setEditing(false);
    }
  };

  return (
    <li className='todo-item'>
      <label>{updateInput}</label>
      <button
        onClick={() => {
          removeTask(item);
        }}
      >
        Delete
      </button>
      <button onClick={editTask}>Edit</button>

      {editing && (
        <input
          type='text'
          value={updateInput}
          onChange={(e) => setUpdateInput(e.target.value)}
          onKeyDown={handleEditingDone}
        />
      )}
    </li>
  );
};
