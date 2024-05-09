import { Fragment } from "react";
import "./App.css";
import InputTodo from "./Components/inputTodo";
import ListTodos from "./Components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
