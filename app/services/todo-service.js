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
      let todos = [...store.State.todos, fixed];
      store.commit("todos", todos)
    }).catch(e => {
      throw new Error(e)
    })
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)

  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    if (todo) {//and if you did find one
      todo.changeCompleted();//change its completed status to opposite


      todoApi.put(todoId, todo)
        .then(res => {
          this.getTodos();
        })
    }
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    // todoApi.get(`${todoId}`).then(res => {
    //   let todo = res;
    let todo = store.State.todos.find(t => t.id == todoId)
    if (todo.completed) {
      todoApi.delete(todoId)
        .then(res => {
          this.getTodos();//once the request comes back, what do you need to ensure happens

        })//what is the request type
    } else {
      throw new Error("Must be complete")
    }
  }


}


const todoService = new TodoService();
export default todoService;
