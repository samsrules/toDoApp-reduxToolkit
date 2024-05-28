import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}

export default App;
