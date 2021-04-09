import { Specification } from "@modules/cars/entities/Especification";

interface ICreateSpecificationDTO{
    name:string,
    description:string
}

interface ISpecificationRepository {
    findByName(name:string): Promise <Specification>
    create({ description, name }: ICreateSpecificationDTO):Promise<void>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };