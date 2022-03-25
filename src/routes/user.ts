import { Request, Response, Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController: UserController = new UserController();

router.get('/', async (req: Request, res: Response) => await userController.exampleMethod(req, res));

export default router;