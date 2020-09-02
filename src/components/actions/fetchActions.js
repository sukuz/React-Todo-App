import { UPDATE_TODOS, UPDATE_ERROR } from "./types";

const fetchData = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((todos) => dispatch({ type: UPDATE_TODOS, payload: todos }))
      .catch((err) =>
        dispatch({ type: UPDATE_ERROR, error: "OOPS!! Couldn't fetch data!" })
      );
  };
};
//   .then((todos) => setTodoState(todos))
//   .catch((err) => console.log(err));}}
export default fetchData;
