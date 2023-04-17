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
            const result = await this.executeInsertQuery('INSERT INTO pets_list (name,age,specie) VALUES (?,?,?)',
            [value.name,value.age,value.specie])

            return {...value, id: result}
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async list(): Promise<WithId<Pet>[]> {
        try {
            return await this.executeSelectQuery<WithId<Pet>>('SELECT * FROM pets_list ORDER BY name ASC')
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async get(tId: number): Promise<WithId<Pet>> {
        try {
            const response = await this.executeSelectQuery<WithId<Pet>>('SELECT * FROM pets_list WHERE id = ?',
            [tId])

            return response[0]
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async searchByName(name: string): Promise<WithId<Pet>[]> {
        try {
            const response = await this.executeSelectQuery<WithId<Pet>>(`SELECT * FROM pets_list WHERE name LIKE "%${name}%" ORDER BY name ASC`)

            return response
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async update(value: WithId<Pet>): Promise<WithId<Pet>> {
        try {
            await this.executeUpdateQuery('UPDATE pets_list SET name = ?, age = ?, specie = ? WHERE id = ?',
            [value.name, value.age, value.specie, value.id])
            return value
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async delete(tId: number): Promise<void> {
        try {
            await this.executeUpdateQuery('DELETE FROM pets_list WHERE id = ?',
            [tId])
        } catch (error) {
            throw new Error(error.message)
        }
    }
}