import { ClientDomain, IClientProps, IQuery } from "../../Domain/Client.domain";
import { GenericInMemoryRepository } from "../../../../infra/database/in-memory/generic.repository";

export class ClientInMemoryRepository extends GenericInMemoryRepository<
    ClientDomain, IQuery
> {
    _data: ClientDomain[];
    constructor() {
        super();
        this._data = [] as ClientDomain[];
    }
    updateById(id: any, instance: any): Promise<any> {
        return new Promise((resolve) => {
            let changedItems = 0;
            const data = this._data.map((item) => {
                if(item.id === id) {
                    changedItems++;
                    return {
                        ...item,
                        ...instance
                    }
                } else {
                    return item
                }
            });
            this._data = data;
            resolve(changedItems);
        });
    }
    removeById(id: any): void {
        new Promise((resolve) => {
            const data = this._data.filter((item) => item.id !== id);
            this._data = data;
            resolve(data);
        });
    }
    update(instance: IClientProps, options?: any): void {
        throw new Error("Method not implemented.");
    }
    findOrCreate(query: IQuery, options?: any): void {
        throw new Error("Method not implemented.");
    }
    async findAll(query?: IQuery, options?: any): Promise<ClientDomain[]> {
        return new Promise((resolve) => {
            resolve(this._data);
        });
    }
    async create(instance: IClientProps, options?: any): Promise<any> {
        return new Promise((resolve) => {
            this._data.push({
                ...instance,
                id: Math.random().toString(36).substring(7),
                createdAt: new Date(),
                updatedAt: new Date(),
            } as ClientDomain);
            resolve(instance);
        });
    }
    get model(): any {
        return this
    }
    findOne(query: IQuery, options?: any): Promise<any> {
        return new Promise((resolve) => {
            const data = this._data.find((item) => item.id === query.id);
            resolve(data);
        });
    }
    findById(id: string, options?: any): Promise<any> {
        return new Promise((resolve) => {
            const data = this._data.find((item) => item.id === id);
            resolve(data);
        });
    }
}