import {AbstractView} from "../view/AbstractView";
import { getTodos } from "../todos/todosService";


export class TodosView extends AbstractView {
    constructor() {
       super();
    }


  async  loadModel(){
     console.log("Loading...");  
    this.todos = await getTodos();
        console.log(this.todos);
        
    }


     getHTML() {
        return `

        <div>
            <h1>TODO</h1>
            <button id="click">Get data</button>
            <div id="todos"></div>
            </div>
        `
    }

  

    renderContent() {
      let todosListElement = document.querySelector('#todos')
      todosListElement.innerHTML= ``;

      this.todos.forEach(element => {
        let todoElement = document.createElement(`li`);
        todoElement.innerHTML = todo.title;
        todosListElement.appendChild(todoElement);

        let checkbox = document.createElement(`input`);
        checkbox.type = 'checkbox';
        todosListElement.appendChild(checkbox);
      });
    }
}