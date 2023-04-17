import { Pet } from "../model/Pet";
import { iPetRepository } from "../repository/interfaces";
import { WithId, iPetController } from "./interfaces";

export class PetController implements iPetController {
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
    async searchByName(name: string): Promise<WithId<Pet>[]> {
        try {
            const response = await this.petRepository.searchByName(name)

            return response
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

    public static initialize (petRepository: iPetRepository): iPetController {
        return new PetController(petRepository)
    }
}