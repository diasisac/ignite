import express from 'express';

import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

import './database';

import { router } from './routes';

import {categoriesRoutes}  from './routes/categories.routes';
import {specificationsRoutes}  from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.listen(3333, () => console.log("Server is runing!"));