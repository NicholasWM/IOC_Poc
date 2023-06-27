import { GenericRepository } from "../../../common/generic.repository"
import { GenericInMemoryRepository } from "../../../infra/database/in-memory/generic.repository"
import { connection } from "../../../server"
import { ClientInMemoryRepository } from "../Repositories/In-Memory/Client.inMemory.implementation"
import { ClientSchema } from "../Repositories/mongoose/Client.model"
import { ClientMongooseRepository } from "../Repositories/mongoose/Client.repository"
import { ClientDomain } from "./Client.domain"


describe('Client Domain', () => {
    let clientRepository: GenericRepository<ClientDomain, any, any>
    beforeAll(async () => {
        const model = (await connection).model('Client', ClientSchema);
        clientRepository = new ClientMongooseRepository(model)
    })

    describe('Client In Memory Repository', () => {
        test('Should create a client', async () => {
            const client = new ClientDomain(
                'John Doe',
            )
        
            await clientRepository.create(client)
            const clientCreated = await clientRepository.findOne({ name: 'John Doe' })
            console.log(clientCreated)
            expect(clientCreated.name).toBe(client.name)
            expect(client.userId).toBe(undefined)
        })
    
        test('Should update a client', async () => {
            const client = new ClientDomain(
                'John Doe',
            )
        
            await clientRepository.create(client)
            const clientCreated = await clientRepository.findOne({ name: 'John Doe' })
        
            expect(clientCreated.name).toBe(client.name)
            expect(client.userId).toBe(undefined)
    
            const modified = {...clientCreated, name: 'Jane Doe'}

            await clientRepository.updateById(clientCreated.id, modified)
            const clientUpdated = await clientRepository.findOne({ name: 'Jane Doe' })

            expect(clientUpdated.name).toBe(modified.name)
            expect(client.userId).toBe(undefined)
        })
    })  
})