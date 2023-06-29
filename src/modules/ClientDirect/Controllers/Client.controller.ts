
import { NextFunction, Response, Request } from "express";
import { GenericController } from "../../../common/generic.controller";
import { ClientService } from "../Services/Client.service";

export class ClientController<ModelInstance, IQuery, IOptions> extends GenericController<ModelInstance, IQuery, IOptions> {
    constructor() {
        super(new ClientService());
    }
}