import Base from './base.controller';
import Todo from '../models/todo.model';

class TodoController extends Base {
  constructor(model) {
    super(model);
  }

  searchTodo = async (req, res) => {
    const searchQuery = {};
    const { body, query } = req;
    const q = query.q ? query.q : null 
    const date = query.date ? query.date : null 
    if(q) {
      searchQuery.$text = {
        $search: q
      };
    }
    try {
      const response = await this.model.find(searchQuery);
      return res.status(200).json(response);
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        message: 'An error occured when searching'
      })
    }
  }
}

export default new TodoController(Todo);
