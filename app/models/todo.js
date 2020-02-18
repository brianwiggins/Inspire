
export default class ToDo {
  constructor(data) {
    this.id = data._id;
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description;
  }

  changeCompleted() {
    this.completed = !this.completed;
  }

  get Template() {
    let checked = "";
    if (this.completed) {
      checked = "checked"
    }
    let template = `<div class="form-check row mb-1">
      <label class = "form-check-label col-6" for="done">${this.description}</label>
      <input type="checkbox" 
      ${checked} name="${this.id}" onclick="app.todoController.toggleTodoStatus('${this.id}')" class="form-check-input col-2" id="done"> <button class="btn btn-danger col-4" onclick="app.todoController.removeTodo('${this.id}')">Delete</button></div>`

    return template;
  }
}



