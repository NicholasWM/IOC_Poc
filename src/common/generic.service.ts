import { GenericRepository } from "./generic.repository"

export class GenericService<ModelInstance, IQuery, IOptions> {
    constructor(private readonly _repository: GenericRepository<ModelInstance, IQuery, IOptions>) {}

    async findAll(query: any) {
        return await this._repository.findAll(query)
    }

    async findById(id: string) {
        return await this._repository.findById(id)
    }

    async findOne(query: any) {
        return await this._repository.findOne(query)
    }

    async create(instance: ModelInstance) {
        return await this._repository.create(instance)
    }

    async updateById(id: string, instance: ModelInstance) {
        return await this._repository.updateById(id, instance)
    }

    async removeById(id: string) {
        return await this._repository.removeById(id)
    }

    async update(query: any, instance: ModelInstance) {
        return await this._repository.update(query, instance)
    }

    async findOrCreate(query: any, instance: ModelInstance) {
        return await this._repository.findOrCreate(query, instance)
    }
}