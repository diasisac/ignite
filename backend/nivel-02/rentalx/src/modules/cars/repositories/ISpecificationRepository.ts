import { Specification } from "../model/Especification";

interface ICreateSpecificationDTO{
    name:string,
    description:string
}

interface ISpecificationRepository {
    findByName(name:string): Specification
    create({ description, name }: ICreateSpecificationDTO):void;
}

export { ISpecificationRepository, ICreateSpecificationDTO };