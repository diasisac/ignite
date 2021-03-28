import { Request, Response} from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import {container} from "tsyringe";
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase';
class CreateSpecificationController{

    handle(request: Request, response: Response):Response{
    const {name, description} = request.body;
    const createSpecificationUseCase = container.resolve(CreateCategoryUseCase)
    createSpecificationUseCase.execute({name, description});

    return response.status(201).send();
    }
}

export { CreateSpecificationController };