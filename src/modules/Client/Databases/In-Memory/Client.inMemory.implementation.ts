import { ClientDomain, IQuery } from "../../Domain/Client.domain";
import { GenericInMemoryRepository } from "../../../../infra/database/in-memory/generic.implementation.repository";

export class ClientInMemoryRepository extends GenericInMemoryRepository<
    ClientDomain, IQuery
> {}