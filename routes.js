import UserController from './database/controller/UserController.js';

import {Router} from 'express';
const routes = Router();

routes.get('/user', UserController.get);
routes.post('/user', UserController.create);

export default routes;
