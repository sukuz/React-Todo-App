import "../style.css";
import fetchData from "./actions/fetchActions";
import {
  addAction,
  updateAction,
  onChangeAction,
  deleteAction,
} from "./actions/performActions";
import propTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect, Suspense } from "react";
import ErrorBoundary from "./ErrorComponent";

const Todo = React.lazy(() => import("./Todo"));
function TodoApp(props) {
  const {
    todos,
    newtodo,
    fetchData,
    addAction,
    updateAction,
    onChangeAction,
    deleteAction,
    error,
  } = props;

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnChange = (e) => {
    onChangeAction(e.target.value);
  };

  const handleOnDelete = (id) => deleteAction(todos, id);

  const handleOnUpdate = (val, id) => updateAction(todos, val, id);

  return (
    <div className="App">
      <header>
        <h1 className="header">Todo App</h1>
      </header>
      <main>
        <input
          className="input-btn"
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <button
          className="buttons"
          onClick={(e) => {
            addAction(todos, newtodo);
          }}
        >
          Add
        </button>
        <section>
          <Suspense fallback={<div className="Loader">Loading ...</div>}>
            <div className="todos">
              <ErrorBoundary error={error}>
                {todos.map((each) => (
                  <Todo
                    className="todo-item"
                    key={each.id}
                    {...each}
                    handleOnUpdate={handleOnUpdate}
                    handleOnDelete={handleOnDelete}
                  />
                ))}
              </ErrorBoundary>
            </div>
          </Suspense>
        </section>
      </main>
    </div>
  );
}
TodoApp.propTypes = {
  fetchData: propTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos,
  newtodo: state.todosReducer.newtodo,
  error: state.todosReducer.error,
});

export default connect(mapStateToProps, {
  fetchData,
  addAction,
  updateAction,
  onChangeAction,
  deleteAction,
})(TodoApp);
