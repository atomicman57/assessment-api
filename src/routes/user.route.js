import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.post('/users', userController.createItem);
router.put('/users/:id', userController.updateItem);
router.delete('/users:id', userController.deleteItem);
router.get('/users', userController.findAllItems);
router.get('/users/:id', userController.findItemById);


export default router;
