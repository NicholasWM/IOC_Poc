import { Router } from "express";
import { ClientController } from "./Controllers/Client.controller";
import { ClientDomain, IClientProps } from "./Domain/Client.domain";
import { IControllerFunctionParams } from "../../common/IControllerFunction";

export class ClientModule {
    private readonly controller: ClientController<ClientDomain, IClientProps, any>

    constructor(readonly router: Router) {
        this.controller = new ClientController()

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
