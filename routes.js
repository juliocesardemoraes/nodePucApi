import UserController from './database/controller/UserController.js';
import CategoriesController from './database/controller/CategoriesController.js';

import {Router} from 'express';

const routes = Router();

routes.get('/user', UserController.get);
routes.post('/user', UserController.create);
routes.delete('/user', UserController.delete);
routes.patch('/user', UserController.update);

routes.get('/category', CategoriesController.get);
routes.post('/category', CategoriesController.create);
routes.delete('/category', CategoriesController.delete);
routes.patch('/category', CategoriesController.update);

export default routes;
