import { GenericRepository } from "./generic.repository"

export class GenericService<ModelInstance, IQuery, IOptions> {
    _repository: GenericRepository
    constructor(repository: GenericRepository) {
        this._repository = repository
    }

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

    async updateById(id: any, instance: ModelInstance) {
        return await this._repository.updateById(id, instance)
    }

    async removeById(id: any) {
        return await this._repository.removeById(id)
    }

    async update(query: any, instance: ModelInstance) {
        return await this._repository.update(query, instance)
    }

    async findOrCreate(query: any, instance: ModelInstance) {
        return await this._repository.findOrCreate(query, instance)
    }
}