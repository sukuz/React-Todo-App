import { combineReducers } from "redux";
import todosReducer from "./performReducer";

const rootReducer = combineReducers({
  todosReducer,
});

export default rootReducer;
