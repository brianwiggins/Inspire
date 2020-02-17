import store from "../store.js";
import ToDo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/BRIANWIGGINS/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get("").then(res => {
      let todos = res.data.data.map(t => new ToDo(t));
      store.commit("todos", todos);
    }).catch(e => {
      throw new Error(e);
    });
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi.post("", todo).then(res => {
      let todo = new ToDo(res.data.data);
      let todos = [...store.State.todos, todo];
      store.commit("todos", todos);
    }).catch(e => {
      throw new Error(e);
    });

  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    if (todo) {
      if (todo.completed) {
        todo.completed = false;
      }
      else {
        todo.completed = true;
      }
    }
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    let todos = [...store.State.todos, todo];
    store.commit("todos", todos);
    //TODO do you care about this data? or should you go get something else?

  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    let todo = store.State.todos.find(t => { t.id == todoId })
    if (todo) {
      let newTodos = store.State.todos.filter(t => t.id == todoId);
      todoApi.delete("", todo).then(store.commit("todos", newTodos))
    }
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
