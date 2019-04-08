import express from 'express';
import todoController from '../controllers/todo.controller';

const router = express.Router();

router.param('id', todoController.findItemById);


router.get('/todos', todoController.findAllItems);
router.post('/todos', todoController.createItem);
router.route('/todos/:id')
  .get(todoController.getItem)
  .put(todoController.updateItem)
  .delete(todoController.deleteItem);

export default router;
