import { WithId } from "../controller/interfaces";
import { Pet } from "../model/Pet";
import { iPetRepository } from "./interfaces";

export class PetSQLiteRepository implements iPetRepository {
    constructor () {

    }
    async save(value: Pet): Promise<WithId<Pet>> {
        try {
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async list(): Promise<WithId<Pet>[]> {
        try {
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async get(tId: number): Promise<WithId<Pet>> {
        try {
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async update(value: WithId<Pet>): Promise<WithId<Pet>> {
        try {
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async delete(tId: number): Promise<void> {
        try {
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}