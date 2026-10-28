import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);
    return (
        <div className="TodoCounter-container">
            <h1>
                Has completado  <span className="TodoCounter-span">{completedTodos}</span> de <span className="TodoCounter-span">{totalTodos}</span> TODOS
            </h1>
        </div>
    );
}

export { TodoCounter };
