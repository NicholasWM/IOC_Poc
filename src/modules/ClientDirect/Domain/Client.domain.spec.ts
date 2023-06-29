import mongoose from "mongoose"
import { connection } from "../../../server"
import { ClientService } from "../Services/Client.service"
import { ClientDomain, IClientProps } from "./Client.domain"
import { ClientInMemoryRepository } from "../Repositories/In-Memory/Client.inMemory.implementation"

// Só da para mudar o repository usado através do import da service

describe('Client Domain', () => {
    let clientService: ClientService<IClientProps, IClientProps, any>
    let connectionMongo: typeof mongoose

    describe('Client With Default Repository(Depends on Service import)', () => {
        beforeAll(async () => {
            connectionMongo = await connection
            clientService = new ClientService()
        })
        afterAll(async () => {
            await connectionMongo.disconnect()
        })
        test('Should create a client', async () => {
            const client = new ClientDomain(
                'John Doe',
            )
        
            const createdItem = await clientService.create(client)
            const clientCreated = await clientService.findOne({ name: 'John Doe' })
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
    describe.skip('Client With In Memory Repository', () => {
        // PESQUISAR COMO FAZER ESSA TROCA
        // NESSE CASO NÃO É POSSÍVEL USAR O MÉTODO FAZER IN-MEMORY
        beforeAll(async () => {
            clientService = new ClientService()
            // Mock do atributo "valor" usando jest.spyOn e mockReturnValue
            const mockClientServiceRepository = jest.spyOn(clientService, '_repository', 'get');
            mockClientServiceRepository.mockReturnValue(new ClientInMemoryRepository());
        })
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