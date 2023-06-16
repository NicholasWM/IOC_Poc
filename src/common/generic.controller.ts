import {
    Request,
    Response,
    NextFunction,
 } from "express"
import { GenericService } from "./generic.service"
import { ClientDomain, IClientProps } from "../modules/Client/Domain/Client.domain"

export class GenericController<ClientDomain, IClientProps, IOptions> {
    constructor(private readonly _service: GenericService<ClientDomain, IClientProps, IOptions>) {}

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req
            const result = await this._service.findAll(body)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this._service.findById(req.params.id)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async findOne(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this._service.findOne(req.params.id)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async save(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this._service.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { body, query } = req
            const id = query?.id
            const result = await this._service.updateById(id, body)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const { query } = req
            const id = query?.id
            const result = await this._service.removeById(id)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
}