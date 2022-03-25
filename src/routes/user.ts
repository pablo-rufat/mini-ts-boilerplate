import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController: UserController = new UserController();

router.get('/', userController.exampleMethod);

export default router;