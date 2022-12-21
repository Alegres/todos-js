import { AbstractView } from "../view/AbstractView";
import { getTodos, updateTodo } from "../todos/todosService";


export class TodosView extends AbstractView {
  constructor() {
    super();
  }

  async loadModel() {
    console.log("Loading...");
    this.todos = await getTodos();
    console.log(this.todos);
  }

  getHTML() {
    return `
          <div class="my-div">
              <div class="my-second-div">
                <input type="text" class="test-input"></input>
              </div>
              <h1>TODO</h1>

              <ul id="todos" class="todos-list"></ul>
          </div>
        `
  }

  renderContent() {
    let todosList = document.querySelector('#todos');
    todosList.innerHTML = ``;

    this.todos.forEach(todo => {
      console.log(todo);

      let todoElement = document.createElement(`li`);
      todoElement.classList.add("todos-list__item")
      todoElement.innerHTML = todo.title;
      todosList.appendChild(todoElement);

      let checkbox = document.createElement(`input`);
      checkbox.classList.add("todos-list__item__checkbox");
      checkbox.type = 'checkbox';
      checkbox.checked = todo.checked;

      checkbox.addEventListener("click", this.handleCheckTodo.bind({
        todo,
        context: this
      }));

      todoElement.appendChild(checkbox);
    });
  }

  // Controller
  handleCheckTodo() {
    let checkedTodo = this.todo;

    checkedTodo.checked = !checkedTodo.checked;

    // Call service to update TODO
    updateTodo(checkedTodo);

    this.context.someOtherClassMethod();
  }

  someOtherClassMethod() {
    console.log("Do stuff...");
  }
}