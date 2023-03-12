import { observer } from "mobx-react";
import React from "react";

@observer
export default class ToDoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.addTodos(e.target.value);
      e.target.value = "";
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value;
  }
  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }
  render() {
    const { todos, filter, filteredValues, clearComplete } = this.props.store;
    console.log(todos, filter);
    return (
      <div className="input">
        <p>Todos</p>
        <p>
          {todos.length <= 1
            ? `You have ${todos.length}  thing to do Today`
            : `You have ${todos.length}  things to do Today`}
        </p>

        <input
          type="text"
          className="create-input"
          placeholder="Add Task"
          onKeyUp={this.createNew.bind(this)}
        />
        <input
          defaultValue={filter}
          type="text"
          className="create-input"
          placeholder="Search"
          onChange={this.filter.bind(this)}
          name="filter"
        />

        <div className="display-todos">
          {filteredValues.map((todo) => (
            <div className="list" key={todo.id}>
              <input
                type="checkbox"
                defaultValue={todo.complete}
                checked={todo.complete}
                onChange={this.toggleComplete.bind(this)}
              />
              <li>{todo.value}</li>
            </div>
          ))}
          <button onClick={clearComplete}>Clear Complete Tasks</button>
        </div>
      </div>
    );
  }
}
