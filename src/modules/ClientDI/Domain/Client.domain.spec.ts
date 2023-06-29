import { GenericRepository } from "../../../common/generic.repository"
import { GenericInMemoryRepository } from "../../../infra/database/in-memory/generic.repository"
import { connection } from "../../../server"
import { ClientController } from "../Controllers/Client.controller"
import { ClientInMemoryRepository } from "../Repositories/In-Memory/Client.inMemory.implementation"
import { ClientSchema } from "../Repositories/mongoose/Client.model"
import { ClientMongooseRepository } from "../Repositories/mongoose/Client.repository"
import { ClientService } from "../Services/Client.service"
import { ClientDomain, IClientProps } from "./Client.domain"

const getRepository = () => {
    let clientRepository: GenericRepository

    clientRepository = new ClientInMemoryRepository()
    return clientRepository
}

describe('Client Domain', () => {
    // let clientRepository: ClientMongooseRepository
    let clientService: ClientService<IClientProps, IClientProps, any>
    beforeEach(async () => {
        // const model = (await connection).model('Client', ClientSchema);
        let clientRepository: GenericRepository
        // clientRepository = new ClientMongooseRepository(model)
        clientRepository = new ClientInMemoryRepository()
        clientService = new ClientService(clientRepository)
    })

    // afterEach(() => {
    //     clientRepository.dropDatabase()
    // })

    describe('Client In Memory Repository', () => {
        test('Should create a client', async () => {
            const client = new ClientDomain(
                'John Doe',
            )
        
            const createdItem = await clientService.create(client)
            const clientCreated = await clientService.findOne({ name: 'John Doe' })
            console.log(clientCreated)
            expect(clientCreated.name).toBe(client.name)
            expect(client.userId).toBe(undefined)
        })
    
        test('Should update a client', async () => {
            const client = new ClientDomain(
                'John Doe',
            )
                
            await clientService.create(client)
            const clientCreated = await clientService.findOne({ name: 'John Doe' })
        
            expect(clientCreated.name).toBe(client.name)
            expect(client.userId).toBe(undefined)
    
            const modified = { name: 'Jane Doe' }

            await clientService.updateById(clientCreated.id, modified)

            const clientUpdated = await clientService.findOne({ name: 'Jane Doe' })

            expect(clientUpdated.name).toBe(modified.name)
            expect(client.userId).toBe(undefined)
        })
    })  
})