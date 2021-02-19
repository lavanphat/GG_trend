import dotenv from 'dotenv';
dotenv.config();
import express, { Express, NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import { rootPath, router } from './libs/admin_bro';
import './utils/prototype';
import topicRouter from './router/topic';
import keywordRouter from './router/keywords';
import './libs/cron';
import './libs/cors';

const app: Express = express();

// view engine setup
app.use(logger('dev'));

app.use(rootPath, router);
app.use('/api/topics', topicRouter);
app.use('/api/keywords', keywordRouter);

// catch 404 and forward to error handler
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(createError(404));
});

module.exports = app;
export default app;
