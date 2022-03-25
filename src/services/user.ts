import { IUser } from '../interfaces';
import { UserModel } from '../models';
import connection from '../models/connection';

export default class UserService {
    public model: UserModel;
  
    constructor() {
      this.model = new UserModel(connection);
    }
  
    public async exampleMethod(): Promise<IUser[]> {
      const users = await this.model.exampleMethod();
      return users;
    }
  }