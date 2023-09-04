import { useDispatch, useSelector } from "react-redux";
import { removeTaskAction } from "../store/todoReducer";

export const TodoItem = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const deleteTodo = (newTask) => {
    dispatch(removeTaskAction(newTask.id));
  };

  return (
    <div className='todo-item'>
      {!tasks.length ? (
        <h2>Nothing to do. I am free!</h2>
      ) : (
        <div>
          {tasks.map((newTask) => (
            <div
              key={newTask.id}
              className='task-text'
              onClick={() => {
                deleteTodo(newTask);
              }}
            >
              {newTask.taskText}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
