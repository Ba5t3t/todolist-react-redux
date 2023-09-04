import { addTaskAction } from "../store/todoReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const InputForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    const newTask = {
      taskText: inputValue,
      id: Math.floor(Math.random() * (10000 + 1)),
    };
    dispatch(addTaskAction(newTask));
    setInputValue("");
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className='input-container'>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='input-field'
        placeholder='add a task to do'
        onKeyDown={handleSubmit}
      />
      <button
        onClick={() => {
          addTask();
        }}
      >
        add
      </button>
    </div>
  );
};