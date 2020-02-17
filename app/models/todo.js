export default class ToDo {
  constructor(data) {
    this.id = data.id;
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description;
  }
  get ToDoTemplate() {
    return `
      <div class="form-check">
  <label class = "form-check-label" for="done" style="float:left;">${this.description}</label>
  <input type="checkbox" checked="${this.completed}" name="${this.id}" onChange={(e)=>this.changeCompleted()} class="form-check-input" id="done">
      </div>
    `
  }
  changeCompleted() {
    if (this.completed) {
      this.completed = false;
    }
    else {
      this.completed = true;
    }
  }
}