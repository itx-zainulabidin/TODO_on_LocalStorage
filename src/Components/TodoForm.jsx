import { useState } from "react";
import styles from "../Styles/TodoForm..module.css"
const TodoForm = ({ getInputValue }) => {
    const [inputValue, setInputValue] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        getInputValue(inputValue);
        setInputValue("");
    }
    return (
        <>
            <form onSubmit={ submitHandler } className={ styles.form } >
                <input
                    placeholder="Type Your TODO"
                    type="text"
                    required
                    value={ inputValue }
                    onChange={ (e) => setInputValue(e.target.value) }
                />
                <button>Add</button>
            </form>

        </>
    )
}

export default TodoForm;