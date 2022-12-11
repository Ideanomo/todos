import React, {useState, useEffect} from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

export default function App() {
    const [todos, setTodos] = useState(
        JSON.parse(window.localStorage.getItem("todos")) || []
    );

    const addTodos = (todo) => {
        setTodos([...todos, todo]);
    };

    // Store todos in localStorage
    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    return (
      <>
          <Form onEnterTodo={addTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
      </>
  );
}