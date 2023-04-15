import { WithId } from "../controller/interfaces";
import { Pet } from "../model/Pet";
import { DefaultSQLiteRepo } from "./DefaultSQLiteRepo";
import { iPetRepository } from "./interfaces";

export class PetSQLiteRepository extends DefaultSQLiteRepo implements iPetRepository {
    constructor () {
        super()
    }
    async save(value: Pet): Promise<WithId<Pet>> {
        try {
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async list(): Promise<WithId<Pet>[]> {
        try {
            return await this.executeSelectQuery<WithId<Pet>>('SELECT * FROM pets_list')
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