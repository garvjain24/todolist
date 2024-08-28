import React from "react";
import Todocard from "./TodoCard";

export default function Todolist(props) {
  const { todos, handleDeleteTodos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoindex) => {
        return (
          <Todocard {...props} key={todoindex} todoindex={todoindex}>
            {todo}
          </Todocard>
        );
      })}
    </ul>
  );
}
