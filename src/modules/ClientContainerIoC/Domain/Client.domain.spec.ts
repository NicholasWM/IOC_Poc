import mongoose from "mongoose"
import { connection } from "../../../server"
import { ClientService } from "../Services/Client.service"
import { ClientDomain, IClientProps } from "./Client.domain"
import { ClientContainerInMemory, ClientContainerMongo } from "../providers/Client.provider"

// Com apenas um describe é possivel testar, apenas mudando o container
describe('Client Domain', () => {
    describe('Client with IoC Container', () => {
        let clientService: ClientService<IClientProps, IClientProps, any>
        let mongoConnection: typeof mongoose

        //POSSIBILIDADE DE CONFIGURAR UMA NOVA BASE PARA CADA TESTE
        // beforeEach(async () => {
        beforeAll(async () => {
            mongoConnection = await connection
            clientService = new ClientService(ClientContainerInMemory)
        })

        afterAll(async () => {
            await mongoConnection.disconnect()
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
})