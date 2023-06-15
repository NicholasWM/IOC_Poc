
import { NextFunction, Response, Request } from "express";

export class ClientController {
    constructor() {}

    get(req: Request, res: Response, next: NextFunction) {
        return res.send('Hello, Express!');
    }
}