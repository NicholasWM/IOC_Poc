import { Router } from "express";
import { ClientController } from "./Controllers/Client.controller";
import { IControllerFunctionParams } from "../../common/IControllerFunction";
import { ClientDomain, IClientProps } from "./Domain/Client.domain";
import { ClientInMemoryRepository } from "./Repositories/In-Memory/Client.inMemory.implementation";
import { GenericService } from "../../common/generic.service";
import { GenericRepository } from "../../common/generic.repository";
import { ClientService } from "./Services/Client.service";

export class ClientModule {
    private readonly service: GenericService<ClientDomain, IClientProps, any>
    private readonly controller: ClientController<ClientDomain, IClientProps, any>
    private readonly repository: GenericRepository<ClientDomain, IClientProps, any>

    constructor(readonly router: Router) {
        this.repository = new ClientInMemoryRepository()
        this.service = new ClientService(this.repository)
        this.controller = new ClientController(this.service)

        router.route('/client')
            .get(...this._get())
    }

    _get(): any[] {
        return [
            (...args: IControllerFunctionParams) => this.controller.get(...args)
        ]
    }
}
