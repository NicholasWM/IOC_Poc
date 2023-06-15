import { Request, Response, NextFunction } from 'express';

export type IControllerFunctionParams = [req: Request, res: Response, next: NextFunction]