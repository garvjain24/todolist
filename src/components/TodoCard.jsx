import React from "react";

export default function Todocard(props) {
  const { children, handleDeleteTodos, todoindex, handleEditTodos } = props;
  return (
    <li className="todoItem">
      <p>{children}</p>
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodos(todoindex);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodos(todoindex);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
