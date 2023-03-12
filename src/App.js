import "./App.css";
import ToDoList from "./ToDoList";
import store from "./stores/ToDoStore";

const App = () => (
  <div className="App">
    <header className="App-header">
      <ToDoList store={store} />
    </header>
  </div>
);
export default App;
