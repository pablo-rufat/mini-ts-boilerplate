import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services';

export default class UserController {
  private userService: UserService;

  constructor(){
    this.userService = new UserService();
  }
  
  public async exampleMethod(_req: Request, res: Response): Promise<Response> {
        const users = await this.userService.exampleMethod();
        return res.status(StatusCodes.OK).json(users);
  }
};