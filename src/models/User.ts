
import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async exampleMethod(): Promise<IUser[]> {
    const result = await this.connection.execute(`SELECT * FROM ${process.env.DB_DATABASE}.Users`);
    const [rows] = result;
    return rows as IUser[];
  }
}