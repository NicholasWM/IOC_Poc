import { Container } from "../../../common/Container"
import { ClientInMemoryRepository } from "../Repositories/In-Memory/Client.inMemory.implementation"
import { ClientModel } from "../Repositories/mongoose/Client.model"
import { ClientMongooseRepository } from "../Repositories/mongoose/Client.repository"
import { ClientService } from "../Services/Client.service"

const createProviderDefault = () => {
    const _container = new Container()

    _container.service('ClientMongoModel', () => ClientModel)
    _container.service('ClientInMemoryRepo', c => new ClientInMemoryRepository())
    _container.service('ClientMongoRepo', c => new ClientMongooseRepository(c))
    _container.service('ClientRepository', c => new ClientInMemoryRepository())
    _container.service('ClientService', c => new ClientService(c))

    return _container
}

const createProviderMongo = () => {
    const _container = new Container()

    _container.service('ClientMongoModel', () => ClientModel)
    _container.service('ClientRepository', c => new ClientMongooseRepository(c))
    _container.service('ClientService', c => new ClientService(c))

    return _container
}

const createProviderInMemory = () => {
    const _container = new Container()

    _container.service('ClientRepository', c => new ClientInMemoryRepository())
    _container.service('ClientService', c => new ClientService(c))

    return _container
}

export const ClientContainer = createProviderDefault()

export const ClientContainerMongo = createProviderMongo()

export const ClientContainerInMemory = createProviderInMemory()