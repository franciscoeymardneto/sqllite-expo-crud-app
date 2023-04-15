export type WithId<T> = {
    id: number
} & T

export interface iCrudController<T> {
    save: (value: T) => Promise<WithId<T>>
    list: () => Promise<WithId<T>[]>
    get: (tId: number) => Promise<WithId<T>>
    update: (value: WithId<T>) => Promise<WithId<T>>
    delete: (tId: number) => Promise<void>
}