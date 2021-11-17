import React, { useState } from "react";
import "./App.css";

function App() {
  const [kuvaus, setKuvaus] = useState("");
  const [pvm, setPvm] = useState("");
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setKuvaus(event.target.value);
  };
  const inputChanged2 = (event) => {
    setPvm(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, [kuvaus, pvm]]);
  };

  return (
    <div className="App">
      <h1 className="App-header">TODOLIST</h1>
      <div className="App-input">
        <form onSubmit={addTodo}>
          Description:
          <input type="text" value={kuvaus} onChange={inputChanged} />
          Date:
          <input type="text" value={pvm} onChange={inputChanged2} />
          <input type="submit" value="Add" />
        </form>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo[0]}</td>
              <td>{todo[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
