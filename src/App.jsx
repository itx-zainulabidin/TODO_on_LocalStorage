import { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

// Getting data from localStorage if available otherwise setting to ["Your TODO's looks like this"]
const data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : ["Your TODO's looks like this"];

function App() {
  const [dataArray, setDataArray] = useState([...data]);
  localStorage.setItem("data", JSON.stringify(dataArray));
  // When add button press this function execute and add new TODO to array
  const getInputValue = (data) => {
    setDataArray([data, ...dataArray]);
  }
  // When delete button press this function execute and delete(using filter) from array array
  const deleteTodo = (item) => {
    setDataArray(dataArray.filter((value, index) => {
      return !(item == index);
    }))
  }

  return (
    <>
      <div className='App'>
        <TodoForm getInputValue={ getInputValue } />
        <ul>
          { dataArray.length === 0
            ? <h2>Add TODO</h2>
            : dataArray.map((item, index) => {
              return (
                <TodoList value={ item } key={ index } index={ index } deleteTodo={ deleteTodo } />
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App;