import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = '';
  store.State.todos.forEach(t => {
    template += t.Template;

  })
  document.getElementById("todo").innerHTML = template;
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
  }


  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      description: form.description.value,
    };
    TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    try {
      TodoService.removeTodoAsync(todoId);
    }
    catch (e) {
      alert(e.message)
    }
  }
}
