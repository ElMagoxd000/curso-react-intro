import React from "react";
import { TodoContext } from "../TodoContext";
import { FaSearch } from "react-icons/fa";
import './TodoSearch.css'
function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    return (
        <div className="TodoSearch-group">
            <FaSearch className="TodoSearch-icon" />
            <input
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
                placeholder="Cortar cebolla"
            />
        </div>
    );
}

export { TodoSearch };
