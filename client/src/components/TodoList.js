import "../App.css";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import APIService from "../utils/APIService";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(-1);

  const getAllTodos = () => {
    APIService.getAllTodos()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getAllTodos();
  }, [todos]);

  const setCurrentTodo = (todo, index) => {
    setSelectedTodo(todo);
    setSelectedTodoIndex(index);
  };

  function refreshTodoList() {
    getAllTodos();
    setSelectedTodo(null);
    setSelectedTodoIndex(-1);
  }

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-sm-6">
          <div className="row">
            <h3>Todo List</h3>
          </div>
          <div className="row pt-5">
            <ul className="list-group todoList">
              {todos.map((todo, index) => (
                <li
                  key={index}
                  onClick={() => setCurrentTodo(todo, index)}
                  className={
                    "list-group-item " +
                    (index === selectedTodoIndex ? "active" : "")
                  }
                >
                  {todo.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {selectedTodo ? (
          <div className="col-sm-6">
            <Todo
              name={selectedTodo.name}
              location={selectedTodo.location}
              status={selectedTodo.status}
              id={selectedTodo.id}
              refreshTodoList={refreshTodoList}
            />
          </div>
        ) : (
          <div className="col-sm-6">
            <h3>Select a Todo</h3>
          </div>
        )}
      </div>
    </div>
  );
}
