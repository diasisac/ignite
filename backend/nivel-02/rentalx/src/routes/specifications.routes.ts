import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';

import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRepository = new SpecificationsRepository();

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    const {name, description} = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationsRepository);

    createSpecificationService.execute({name, description});

    return response.status(201).send();
});

export { specificationsRoutes };