import { UPDATE_TODOS, NEW_TODO } from "./types";

export const addAction = (todos, newTodo) => {
  const todoArr = [...todos];
  todoArr.push({ id: todos.length + 1, title: newTodo });
  return (dispatch) => dispatch({ type: UPDATE_TODOS, payload: todoArr });
};
export const onChangeAction = (val) => {
  return (dispatch) => dispatch({ type: NEW_TODO, payload: val });
};
export const updateAction = (todos, value, id) => {
  const index = todos.findIndex((each) => each.id === id);
  const updatedTodos = [...todos];
  updatedTodos[index].title = value;
  return (dispatch) => dispatch({ type: UPDATE_TODOS, payload: updatedTodos });
};
export const deleteAction = (todos, id) => {
  const index = todos.findIndex((each) => each.id === id);
  const updatedTodos = [...todos];
  updatedTodos.splice(index, 1);
  return (dispatch) => dispatch({ type: UPDATE_TODOS, payload: updatedTodos });
};
