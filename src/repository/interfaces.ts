import { WithId } from "../controller/interfaces"
import { Pet } from "../model/Pet"

export interface iPetRepository {
    save: (value: Pet) => Promise<WithId<Pet>>
    list: () => Promise<WithId<Pet>[]>
    get: (tId: number) => Promise<WithId<Pet>>
    update: (value: WithId<Pet>) => Promise<WithId<Pet>>
    delete: (tId: number) => Promise<void>
}