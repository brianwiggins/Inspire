import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function drawTodos() {
  document.getElementById("task-count").innerHTML = store.State.todos.length + " tasks currently tracked";
  let template = "";
  store.State.todos.forEach(t => {
    template += t.ToDoTemplate;
  })
  document.getElementById("todo").innerHTML = template;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", drawTodos)
    TodoService.getTodos();
    console.log("TodoController is live")
  }



  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      completed: false,
      user: "BRIANWIGGINS",
      description: form

    };
    TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
