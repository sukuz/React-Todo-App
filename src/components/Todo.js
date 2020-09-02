import React, { useState } from "react";

export default function Todo(props) {
  const { id, title, handleOnUpdate, handleOnDelete } = props;
  const [updatedInput, setUpdatedInput] = useState(title);
  const handleOnUpdateInput = (e) => {
    setUpdatedInput(e.target.value);
  };

  const handleUpdate = (updatedInput, id) => {
    if (title !== updatedInput) {
      return handleOnUpdate(updatedInput, id);
    }
    return false;
  };

  return (
    <span>
      <input
        className="todo-item"
        value={updatedInput}
        onChange={handleOnUpdateInput}
      />
      <button
        className="buttons"
        onClick={() => {
          handleUpdate(updatedInput, id);
        }}
      >
        Edit
      </button>
      <button
        className="deletebuttoncls"
        onClick={() => {
          handleOnDelete(id);
        }}
      >
        <b>X</b>
      </button>
    </span>
  );
}
