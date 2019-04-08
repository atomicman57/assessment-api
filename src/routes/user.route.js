import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.param("id", userController.findItemById);

router.post('/users', userController.createItem);
router.get('/users', userController.findAllItems);
router
    .route('/users/:id')
    .get(userController.getItem)
    .put(userController.updateItem)
    .delete(userController.deleteItem);


export default router;
