import { FaCheck } from "react-icons/fa";

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li>
            <FaCheck
                className={`icono-check ${completed && "icono-check-active"}`}
                onClick={() => onComplete(text)}
            />
            <p className={`todoItem-p ${completed && "todoItem-p-active"}`}>
                {text}
            </p>
            <span className="icono-borrar" onClick={() => onDelete(text)}>
                X
            </span>
        </li>
    );
}

export { TodoItem };
