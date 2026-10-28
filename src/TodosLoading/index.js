import React from "react";
import './TodosLoading.css'
function TodosLoading() {
	return (
		<ul className="todos" aria-label="Cargando tareas" aria-busy="true">
            {[1, 2, 3].map((item) => (
                <li className="todo-skeleton" key={item}>
                    <span className="todo-skeleton-check" />
                    <span className="todo-skeleton-text" />
                    <span className="todo-skeleton-delete" />
                </li>
            ))}
        </ul>
	);
}

export { TodosLoading };
