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
    private readonly repository: GenericRepository

    constructor(readonly router: Router) {
        this.repository = new ClientInMemoryRepository()
        this.service = new ClientService(this.repository)
        this.controller = new ClientController(this.service)

        router.route('/client')
            .get(...this._get())
            .post(...this._create())
            .put(...this._update())
            .delete(...this._delete())
    }

    _get(): any[] {
        return [
            (...args: IControllerFunctionParams) => this.controller.findAll(...args)
        ]
    }
    _create(): any[] {
        return [
            (...args: IControllerFunctionParams) => this.controller.save(...args)
        ]
    }
    _update(): any[] {
        return [
            (...args: IControllerFunctionParams) => this.controller.update(...args)
        ]
    }
    _delete(): any[] {
        return [
            (...args: IControllerFunctionParams) => this.controller.remove(...args)
        ]
    }
}
