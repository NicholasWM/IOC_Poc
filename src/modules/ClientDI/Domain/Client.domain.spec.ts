import mongoose from "mongoose"
import { GenericRepository } from "../../../common/generic.repository"
import { GenericInMemoryRepository } from "../../../infra/database/in-memory/generic.repository"
import { connection } from "../../../server"
import { ClientController } from "../Controllers/Client.controller"
import { ClientInMemoryRepository } from "../Repositories/In-Memory/Client.inMemory.implementation"
import { ClientModel, ClientSchema } from "../Repositories/mongoose/Client.model"
import { ClientMongooseRepository } from "../Repositories/mongoose/Client.repository"
import { ClientService } from "../Services/Client.service"
import { ClientDomain, IClientProps } from "./Client.domain"

const getRepository = () => {
    let clientRepository: GenericRepository

    clientRepository = new ClientInMemoryRepository()
    return clientRepository
}

describe('Client Domain', () => {

    describe('ClientDI In Memory Repository', () => {
        let clientService: ClientService<IClientProps, IClientProps, any>

        //POSSIBILIDADE DE CONFIGURAR UMA NOVA BASE PARA CADA TESTE
        // beforeEach(async () => {
        beforeAll(async () => {
            let clientRepository: GenericRepository
            clientRepository = new ClientInMemoryRepository()
            clientService = new ClientService(clientRepository)
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

    describe('ClientDI In MongoDB', () => {
        let clientRepository: ClientMongooseRepository
        let connectionMongo: typeof mongoose
        let clientService: ClientService<IClientProps, IClientProps, any>

        beforeEach(async () => {
            const connectionMongo = await connection
            const model = connectionMongo.model('Client', ClientSchema);
            clientRepository = new ClientMongooseRepository(model)
            clientService = new ClientService(clientRepository)
        })

        afterEach(() => {
            clientRepository.dropDatabase()
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