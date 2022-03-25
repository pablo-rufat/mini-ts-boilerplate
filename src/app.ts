import express, { Express } from 'express';
import routes from './routes';

export const app: Express = express();

app.use(express.json());
app.use('/', routes);

export default app;