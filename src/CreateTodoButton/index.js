import React from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
    const {setOpenModal} = React.useContext(TodoContext);
    return (
        <button className="createTodoButton"
            onClick={(event) => {
                // console.log("le diste click");
                // console.log(event);
                // console.log(event.target);
                setOpenModal(openModal => !openModal)
            }}
        >
            +
        </button>
    );
}

export { CreateTodoButton };
