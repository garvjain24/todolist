import { useEffect, useState } from "react";
import Todolist from "./components/Todolist.jsx";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);
  const [todovalues, setTodovalues] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodosList = [...todos, newTodo];
    persistData(newTodosList);
    setTodos(newTodosList);
  }

  function handleDeleteTodos(todoindex) {
    const newTodosList = todos.filter((todo, index) => index !== todoindex);
    persistData(newTodosList);
    setTodos(newTodosList);
  }

  function handleEditTodos(todoindex) {
    const valueToBeEdited = todos[todoindex];
    setTodovalues(valueToBeEdited);
    handleDeleteTodos(todoindex);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todovalues={todovalues}
        setTodovalues={setTodovalues}
        handleAddTodos={handleAddTodos}
      />
      <Todolist
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
        todos={todos}
      />
    </>
  );
}

export default App;
