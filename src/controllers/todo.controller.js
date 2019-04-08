import Base from './base.controller';
import Todo from '../models/todo.model';

class TodoController extends Base {
  constructor(model) {
    super(model);
  }

  getWithUser = (req, res) => {
    
  }
}

export default new TodoController(Todo);
