import { GenericService } from "../../../common/generic.service";
import { ClientInMemoryRepository } from "../Repositories/In-Memory/Client.inMemory.implementation";
import { ClientMongooseRepository } from "../Repositories/mongoose/Client.repository";

export class ClientService<TModel, TQuery, IOptions> extends GenericService<TModel, TQuery, IOptions> {
    constructor() {
        super(new ClientMongooseRepository());
        // super(new ClientInMemoryRepository());
    }
}