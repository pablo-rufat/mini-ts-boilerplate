import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController = new UserController();

router.get('/users', userController.exampleMethod);

export default router;