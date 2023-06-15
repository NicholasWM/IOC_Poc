export class GenericService {
    constructor(private readonly _repository: any) {}

    async findAll(query: any) {
        return await this._repository.findAll(query)
    }

    async findById(id: string) {
        return await this._repository.findById(id)
    }

    async findOne(query: any) {
        return await this._repository.findOne(query)
    }

    async save(data: any) {
        return await this._repository.save(data)
    }

    async update(id: string, data: any) {
        return await this._repository.update(id, data)
    }

    async delete(id: string) {
        return await this._repository.delete(id)
    }
}