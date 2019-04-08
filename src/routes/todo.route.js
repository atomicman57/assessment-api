import express from 'express';
import todoController from '../controllers/todo.controller';
import validator from "../middlewares/validator.middleware";

const router = express.Router();

router.param('id', todoController.findItemById);


router.get('/todos', todoController.findAllItems);
router.post("/todos", validator.validateTodo, todoController.createItem);
router.route('/todos/:id')
  .get(todoController.getItem)
  .put(todoController.updateItem)
  .delete(todoController.deleteItem);

export default router;
