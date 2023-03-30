import "../Styles/TodoList.css";

const TodoList = ({ value, index, deleteTodo }) => {
    return (
        <>
            <li className="li"  >
                <p>
                    { value }
                </p>
                <div className="div">
                    <span onClick={ () => deleteTodo(index) }>
                    <img src="./close.png" alt="" />
                    
                    </span>
                </div>
            </li>
        </>
    )
}
export default TodoList;