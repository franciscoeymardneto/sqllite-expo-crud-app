import { PetController } from "../controller/PetController";
import { iCrudController } from "../controller/interfaces";
import { Pet } from "../model/Pet";
import { PetSQLiteRepository } from "../repository/PetSQLiteRepo";

export function petFactory (): iCrudController<Pet> {
    const pet = new PetSQLiteRepository()
    return PetController.initialize(pet)
}