import express from 'express';
import todoController from '../controllers/todo.controller';

const router = express.Router();

// router.param('id', todoController.updateItem);
router.param('id', todoController.findItemById);
// router.param("id", todoController.deleteItem);


router.get("/todos", todoController.findAllItems);
router.route('/todos/:id')
  .get(todoController.findItemById)
  .put(todoController.updateItem)
  .delete(todoController.deleteItem);
router.post('/todos', todoController.createItem);
// router.route()
// router.put("/todos/:id", todoController.updateItem);
// router.delete("/todos/:id", todoController.deleteItem);

// router.delete('/todos/:id', todoController.deleteItem);


export default router;
