import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services';

export default class UserController {
  userService = new UserService();
  
  public async exampleMethod(_req: Request, res: Response) {
    const users = await this.userService.exampleMethod();
    res.status(StatusCodes.OK).json(users);
  }
};