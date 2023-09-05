import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SortTasksSelect } from "./component/SortTasksSelect";
import { TodoItem } from "./component/TodoItem";
import { InputForm } from "./component/InputForm";
import { Title } from "./component/Title";

function App() {
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    localStorage.setItem("TASK", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Title />
      <InputForm />
      <SortTasksSelect />
      <ul className='list'>
        {tasks.length === 0 && "No tasks"}
        {tasks.map((item) => {
          return <TodoItem key={item.id} {...item} />;
        })}
      </ul>
    </>
  );
}

export default App;
