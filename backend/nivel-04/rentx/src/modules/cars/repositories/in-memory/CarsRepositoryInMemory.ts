import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository{
    cars: Car[] = [];
    async create({brand,category_id, daily_rate, name, fine_amount, description, license_plate}: ICreateCarDTO): Promise<void> {
        const car = new Car();

        Object.assign(car,{
            brand,
            category_id,
            daily_rate,
            name,
            fine_amount,
            description,
            license_plate
        });
        this.cars.push(car)
    }
}

export {CarsRepositoryInMemory}