import { computed, observable } from "mobx";

class Todo {
  @observable value;
  @observable id;
  @observable complete;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
  }
}
class TodoStore {
  @observable todos = [];
  @observable filter = "";
  @computed get filteredValues() {
    const macthFilter = new RegExp(this.filter, "i");
    return this.todos.filter(
      (todo) => !this.filter || macthFilter.test(todo.value)
    );
  }

  addTodos(value) {
    this.todos.push(new Todo(value));
  }

  clearComplete = () => {
    const inComplete = this.todos.filter((todo) => !todo.complete);
    this.todos.replace(inComplete);
    console.log("hi");
  };
}

const store = new TodoStore();

export default store;
