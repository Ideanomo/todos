import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const TodoList = ({ todos, setTodos = f => f }) => {
    const removeTodo = (_id) => {
        const updatedTodos = [...todos].filter((todo) => todo.id !== _id);

        setTodos(updatedTodos);
    };

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li className="todo-item" key={todo.id}>
                        {todo.value}
                        <span>
              <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => removeTodo(todo.id)}
                  className="remove-icon"
              />
            </span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;
