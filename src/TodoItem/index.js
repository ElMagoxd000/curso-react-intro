import { FaCheck, FaTimes } from "react-icons/fa";
import './TodoItem.css';
function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className="TodoItem">
            <div 
                className={`TodoItem-check ${completed && "TodoItem-check--active"}`}
                onClick={() => onComplete(text)}>
                {completed && <FaCheck
                    className={`icono-check`}
                />}
            </div>
            <p className={`todoItem-p ${completed && "todoItem-p-active"}`}>
                {text}
            </p>
            <span className="icono-borrar" onClick={() => onDelete(text)}>
                <FaTimes />
            </span>
        </li>
    );
}

export { TodoItem };
