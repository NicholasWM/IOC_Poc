import { ClientDomain, IClientProps, IQuery } from "../../Domain/Client.domain";
import { GenericInMemoryRepository } from "../../../../infra/database/in-memory/generic.repository";

export class ClientInMemoryRepository implements GenericInMemoryRepository<
    ClientDomain, IQuery
> {
    _data: ClientDomain[];
    constructor() {
        this._data = [] as ClientDomain[];
        console.log('InMemoryRepository constructor')
    }
    updateById(id: any, instance: any): Promise<any> {
        return new Promise((resolve) => {
            let changedItem
            const data = this._data.map((item) => {
                if (item.id === id) {
                    changedItem = { ...item, ...instance }
                    return changedItem
                }
                return item
            });

            this._data = data;

            resolve(changedItem)
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
            const newData = {
                ...instance,
                id: Math.random().toString(36).substring(7),
                createdAt: new Date(),
                updatedAt: new Date(),
            } as ClientDomain
            this._data.push(newData);
            resolve(newData);
        });
    }
    get model(): any {
        return this
    }
    findOne(query: any, options?: any): Promise<any> {
        return new Promise((resolve) => {
            const data = this._data.find((item: any) => {
                const keys = Object.keys(query)
                let found = true
                keys.forEach((key: any) => {
                    if (item[key] !== query[key]) {
                        found = false
                    }
                })
                if (found) {
                    return item
                }
            });
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