import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTasksAction, removeTaskAction } from "../store/todoReducer";

export const TodoItem = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState("");

  const removeTask = (task) => {
    dispatch(removeTaskAction(task.id));
  };

  const editTask = () => {
    setEditing(true);
  };

  const handleEditingDone = (e) => {
    if (e.key === "Enter") {
      dispatch(editTasksAction(updateInput));
      setEditing(false);
    }
  };

  return (
    <li className='todo-item'>
      {!tasks.length ? (
        <h2>Nothing to do. I am free!</h2>
      ) : (
        <div>
          {tasks.map((item) => (
            <div key={item.id} className='task-text'>
              {item.taskText}
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
            </div>
          ))}
        </div>
      )}
    </li>
  );
};
