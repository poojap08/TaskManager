class Task {
    constructor(id, title, userId, description = "", completed = false) {
      this.id = id;
      this.title = title;
      this.userId = userId;
      this.description = description;
      this.completed = completed;
    }
  }
  
  module.exports = Task;
  
