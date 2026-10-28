import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import "../Todos.css";
import React from "react";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

// const defaultTodos = [
//     { text: "Cortar cebolla", completed: true },
//     { text: "Tomar el Curso de Intro a React.js", completed: false },
//     { text: "Llorar con la Llorona", completed: false },
//     { text: "LALALALALA", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function AppUI () {
	const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
	return (
		<div className="todoApp">
			<CreateTodoButton />
			{openModal && <Modal>
				<TodoForm />
			</Modal>}
			<div className="contenedor-todos">
				<TodoCounter />
				<TodoSearch />

				<TodoList>
					{loading && <TodosLoading />}
					{error && <TodosError />}
					{(!loading && searchedTodos.length === 0) && <EmptyTodos />}
					{searchedTodos.map((todo) => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							onComplete={completeTodo}
							onDelete={deleteTodo}
						/>
					))}
				</TodoList>
				
			</div>
		</div>
	)
}

export { AppUI };