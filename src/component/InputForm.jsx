import { addTaskAction } from "../store/todoReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const InputForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    const newTask = {
      title: inputValue,
      id: Math.floor(Math.random() * (10000 + 1)),
    };

    if (inputValue === "") {
      alert("add a task!");
    } else {
      dispatch(addTaskAction(newTask));
    }
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
      <button onClick={addTask}>add</button>
    </div>
  );
};
