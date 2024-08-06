import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo.trim() !== "") {
      setToDos((currentArray) => [...currentArray, toDo]);
      setToDo("");
    }
  };
  const onRemove = (index) => {
    setToDos((currentArray) => currentArray.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input id="todo" type="text" value={toDo} onChange={onChange} />
        <button id="addBtn" type="submit">
          +
        </button>
      </form>
      <ul id="todoBox">
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onRemove(index)}>remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
