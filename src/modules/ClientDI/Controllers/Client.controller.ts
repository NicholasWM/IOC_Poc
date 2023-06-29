
import { NextFunction, Response, Request } from "express";
import { GenericController } from "../../../common/generic.controller";
import { GenericService } from "../../../common/generic.service";

export class ClientController<ModelInstance, IQuery, IOptions> extends GenericController<ModelInstance, IQuery, IOptions> {
    constructor(_service: GenericService<ModelInstance, IQuery, IOptions>) {
        super(_service);
    }

    get(req: Request, res: Response, next: NextFunction) {
        return res.send('Hello, Express!');
    }
}