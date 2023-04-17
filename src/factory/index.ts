import { PetController } from "../controller/PetController";
import { iPetController } from "../controller/interfaces";
import { PetSQLiteRepository } from "../repository/PetSQLiteRepo";

export function petFactory (): iPetController {
    const pet = new PetSQLiteRepository()
    return PetController.initialize(pet)
}