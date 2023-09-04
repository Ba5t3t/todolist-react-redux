import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  tasks: todoReducer,
});

export const store = createStore(rootReducer);
