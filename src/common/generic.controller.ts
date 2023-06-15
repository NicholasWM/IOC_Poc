import {
    Request,
    Response,
    NextFunction,
 } from "express"

export class GenericController {
    constructor(private readonly _service: any) {}

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { query } = req
            const result = await this._service.findAll(query)
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
            const result = await this._service.save(req.body)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { body, params } = req
            const result = await this._service.update(params.id, body)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const { params } = req
            const result = await this._service.delete(params.id)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
}