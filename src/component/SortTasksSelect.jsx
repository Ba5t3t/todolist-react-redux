import { useDispatch, useSelector } from "react-redux";
import { sortTaskAction } from "../store/todoReducer";

export const SortTasksSelect = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleSort = (e) => {
    const value = e.target.value;

    const newTasks = tasks.sort((a, b) =>
      value === "asc" ? a.id - b.id : b.id - a.id
    );

    dispatch(sortTaskAction(newTasks));
    console.log(newTasks);
  };

  return (
    <div>
      <div className='sort'>
        <label htmlFor='id-sort'>Sort by id: </label>
        <select onChange={handleSort}>
          <option value='asc'>ascend</option>
          <option value='desc'>descend</option>
        </select>
      </div>
    </div>
  );
};
