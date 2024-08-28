import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todovalues, setTodovalues } = props;

  return (
    <header>
      <input
        type="text"
        value={todovalues}
        onChange={(e) => {
          setTodovalues(e.target.value);
        }}
        placeholder="Enter your task"
      />
      <button
        onClick={() => {
          handleAddTodos(todovalues);
          setTodovalues("");
        }}
      >
        Add
      </button>
    </header>
  );
}
