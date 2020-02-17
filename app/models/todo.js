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
  <input type="checkbox" class="form-check-input" id="done">
      </div>
    `
  }
}