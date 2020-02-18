import store from "../store.js";
import ToDo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/BRIANWIGGINS/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get().then(res => {
      let todos = res.data.data.map(t => new ToDo(t))
      store.commit("todos", todos);
      console.log(todos)

    }
    ).catch(e => { throw new Error(e) });
    //TODO Handle this response from the server
    taskCount();
    function taskCount() {
      document.getElementById("task-count").innerHTML = `Tasks: ${store.State.todos.length}`
    }
  }

  addTodoAsync(todo) {
    todoApi.post("", todo).then(res => {
      let fixed = new ToDo(res.data.data)
      let todos = [...store.State.todos, todo];
      store.commit("todos", todo).catch(e => {
        throw new Error(e)
      })
    })
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)

  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    if (todo) {//and if you did find one
      todo.changeCompleted();//change its completed status to opposite


      todoApi.put(todoId, todo);
      this.getTodos();
    }
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    todoApi.get(`${todoId}`).then(res => {
      let todo = res;
      if (todo.completed) {
        todoApi.delete(`${todoId}`, todo)//what is the request type
        this.getTodos();//once the request comes back, what do you need to ensure happens
      }
    }
    )


  }
}

const todoService = new TodoService();
export default todoService;
