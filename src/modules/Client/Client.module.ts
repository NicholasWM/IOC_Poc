import { Router } from "express";
import { ClientController } from "./Controllers/Client.controller";
import { IControllerFunctionParams } from "../../common/IControllerFunction";

export class ClientModule {
    private readonly controller: ClientController

    constructor(readonly router: Router) {
        this.controller = new ClientController()
        router.route('/client')
            .get(...this._get())
    }

    _get(): any[] {
        return [
            (...args: IControllerFunctionParams) => this.controller.get(...args)
        ]
    }
}
