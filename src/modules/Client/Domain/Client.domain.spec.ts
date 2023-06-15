import { connection } from "../../../server"
import { ClientInMemoryRepository } from "../Repositories/In-Memory/Client.inMemory.implementation"
import { ClientSchema } from "../Repositories/mongoose/Client.model"
import { ClientMongooseRepository } from "../Repositories/mongoose/Client.repository"
import { ClientDomain } from "./Client.domain"

test('Should create a client', async () => {
    const model = (await connection).model('Client', ClientSchema);
    const clientInMemoryRepository = new ClientMongooseRepository(model)
    const client = new ClientDomain(
        'John Doe'
    )

    await clientInMemoryRepository.create(client)
    const clientCreated = await clientInMemoryRepository.findOne({ name: 'John Doe' })
    console.log(clientCreated)
    expect(clientCreated.name).toBe(client.name)
    expect(client.userId).toBe(undefined)
})