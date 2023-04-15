import { Pet } from "../model/Pet";
import { iPetRepository } from "../repository/interfaces";
import { WithId, iCrudController } from "./interfaces";

export class UnitController implements iCrudController<Pet> {
    private readonly petRepository: iPetRepository

    constructor(petRepository: iPetRepository) {
        this.petRepository = petRepository
    }

    async save(value: Pet): Promise<WithId<Pet>> {
        try {
            return await this.petRepository.save(value)
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async list(): Promise<WithId<Pet>[]> {
        try {
            return await this.petRepository.list()
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async get(tId: number): Promise<WithId<Pet>> {
        try {
            return await this.petRepository.get(tId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async update(value: WithId<Pet>): Promise<WithId<Pet>> {
        try {
            return await this.petRepository.update(value)
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async delete(tId: number): Promise<void> {
        try {
            return await this.petRepository.delete(tId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}