const defaultState = {
  tasks: localStorage.getItem("TASK")
    ? JSON.parse(localStorage.getItem("TASK"))
    : [],
};

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const SORT_TASKS = "SORT_TASKS";

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case SORT_TASKS:
      return { ...state, tasks: [...state.tasks] };
    default:
      return state;
  }
};

export const addTaskAction = (payload) => ({
  type: ADD_TASK,
  payload,
});
export const removeTaskAction = (payload) => ({
  type: REMOVE_TASK,
  payload,
});
export const sortTaskAction = (payload) => ({
  type: SORT_TASKS,
  payload,
});
