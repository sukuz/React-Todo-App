import { UPDATE_TODOS, NEW_TODO, UPDATE_ERROR } from "../actions/types";

const initialState = {
  todos: [{ id: 0, title: "first todo" }],
  newtodo: "",
  error: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TODOS:
      return { ...state, todos: action.payload };
    case NEW_TODO:
      return { ...state, newtodo: action.payload };
    case UPDATE_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
