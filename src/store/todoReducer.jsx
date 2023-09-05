const defaultState = {
  tasks: localStorage.getItem("TASK")
    ? JSON.parse(localStorage.getItem("TASK"))
    : [],
};

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const SORT_TASKS = "SORT_TASKS";
const EDIT_TASK = "EDIT_TASK";

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };

    case SORT_TASKS:
      return { ...state, tasks: [...state.tasks] };

    case EDIT_TASK:
      const { id, newText } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === id ? { ...item, title: newText } : item
        ),
      };

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
export const editTasksAction = (payload) => ({
  type: EDIT_TASK,
  payload,
});
