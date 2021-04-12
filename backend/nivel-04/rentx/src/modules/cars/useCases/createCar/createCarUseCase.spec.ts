import { CreateCarUseCase } from "./createCarUseCase";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory"

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    })

    it("sould be able to create a new car", async () => {
        await createCarUseCase.execute({
            name: "Name car",
            description:"Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: "60",
            brand:"Brand",
            category_id: "category"
        });
    })
})